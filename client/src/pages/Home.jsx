import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

function Home() {
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
    fontSize: '32px',
    width: '100vw',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const tdStyle = {
    height: '100px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };


  return (
    <>
    {/* <div>
       <Navbar/>
       </div>
       <div>
      <table>
         <tr>
          <th>
            DashBoard
          </th>
         </tr>
         <tr style={{height:'70px',textAlign:'center'}}>
           <td colSpan={6}>Welcome Admin panel</td>
         </tr>
      </table>
    </div> */}

    
     <div style={contentStyle}>
      <Navbar />
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th>DashBoard</th>
          </tr>
          <tr>
            <td colSpan={6} style={tdStyle}>Welcome Admin panel</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home