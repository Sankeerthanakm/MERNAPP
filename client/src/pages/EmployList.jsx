import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

function EmployList() {

  const [data,setData]=useState(null)
  const [count,setCount]=useState(0)
  const [search,setSearch]=useState('')
  const[filterData,setFilterData]=useState(null)
  const navigate=useNavigate()

  useEffect( ()=>{
    const fetchData=async ()=>{
      try {
        const res=await fetch("http://localhost:4000/api-v1/employee/allEmployee",{
         method:"GET",
         headers:{
           "Content-Type":"application/json",
           
          }
        })
 
        const data=await res.json()
        console.log(data)
        setCount(data?.totalDocuments)
       setData(data?.allEmployee)
     } catch (error) {
       console.log(error)
     }
    }
        fetchData()
  },[])


  useEffect(()=>{
      const filterData= data?.filter((each)=>
          each?.name?.toLowerCase().includes(search.toLowerCase())
       )
      
       console.log(search)
       console.log(filterData)
       setFilterData(filterData)
  },[search,data])




  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thStyle = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const handleDelete =async (index) => {
    console.log("button clicked",index)
    const id= data[index]._id
      try {
        await fetch(`http://localhost:4000/api-v1/employee/delete/${id}`,{
          method:"DELETE", 
      })
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);

      } catch (error) {
        console.log(error)
      }
    }



  return (
    
    <div>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td colSpan={10} style={{ backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>Employee List</td>
        </tr>
        <tr>
          <td colSpan={8}>Total count: {count}</td>
          <td><a href="/home" style={buttonStyle}>Create Employee</a></td>
        </tr>
        <tr>
          <td colSpan={8}>Search</td>
          <td><input type='search' name='search' placeholder='Enter search keyword' value={search} onChange={(e) => setSearch(e.target.value)} /></td>
        </tr>
        <tr style={thStyle}>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>mobile</th>
          <th>designation</th>
          <th>gender</th>
          <th>course</th>
          <th>createDate</th>
          <th>Action</th>
        </tr>
        {filterData?.map((each, index) => (
          <tr key={index}>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{each.name}</td>
            <td style={tdStyle}>{each.email}</td>
            <td style={tdStyle}>{each.mobile}</td>
            <td style={tdStyle}>{each.designation}</td>
            <td style={tdStyle}>{each.gender}</td>
            <td style={tdStyle}>{each.courses}</td>
            <td style={tdStyle}>{each.createdAt}</td>
            <td style={tdStyle}>
              <a href={`/edit/${index}`} style={buttonStyle}>Edit</a>
              <button onClick={() => handleDelete(index)} style={{ ...buttonStyle, marginLeft: '5px', backgroundColor: 'red' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default EmployList