import React, { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { apiRequest } from '../utils';

function SignUp() {
   const navigate=useNavigate()
   const [error,setError]=useState(false)
   const [data,setData]=useState(null)

   const [formData, setFormData] = useState({
    username: '',
    password: ''
});

function handleChange(e){
      const {name,value}=e.target
      setFormData({...formData,[name]:value})
}

// console.log(formData)

   const onSubmit=async (event)=>{
      
        //  console.log(formData)

     try {
        event.preventDefault() 
      const res=await fetch("http://localhost:4000/api-v1/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify(formData)
      })
      const data=await res?.json()
      setData(data)


      if(data?.error){
        console.log(data?.error)
        setError(data?.error)
      }else
     { 
      console.log(data?.user)
      localStorage.setItem("userData", JSON.stringify(data?.user));

       navigate("/dashboard")}

     } catch (error) {
        console.log(error)
     }
      
    }

   return (
   
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <form onSubmit={onSubmit} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login Page</h2>
        <div style={{ marginBottom: "10px" }}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" value={formData.username} onChange={(e) => { handleChange(e) }} style={{ marginLeft: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={(e) => { handleChange(e) }} style={{ marginLeft: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ textAlign: "center", marginBottom: "10px", color: "red" }}>{error ? data?.error : " "}</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" style={{ backgroundColor: "green", color: "white", padding: "8px 15px", borderRadius: "3px", border: "none", cursor: "pointer" }}>Login</button>
        </div>

        <span style={{ display: "block", textAlign: "center", marginTop: "20px" }}>Don't have any account? <Link to={"/login"}>Signup</Link></span>
    </form>
</div>

  )
}

export default SignUp