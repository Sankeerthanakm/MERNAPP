import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const user = localStorage.getItem("userData");
    const userData = JSON.parse(user);
    const navbarStyle = {
      backgroundColor: 'mediumaquamarine',
      padding: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '32px',
      width: '100vw',
    };
  
    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
      margin: '0 20px',
    };
    
  return (
    
    
    
    <div style={navbarStyle}>
    <div>
      <a href="/home" style={linkStyle}>Home</a>
      <a href="/emplist" style={linkStyle}>Employee List</a>
    </div>
    <div>{userData?.username}</div>
    <a href="/" style={linkStyle}>Logout</a>
  </div>
  )
}

export default Navbar