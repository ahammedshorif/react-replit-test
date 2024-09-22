import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Nav(){
  return(
    <div id='nav' >
      <ul>
        <li ><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/about" className='link'>About</Link></li>
        <li><Link to="/project" className='link'>Project</Link></li>
        <li><Link to="/login" className='link'>Login</Link></li>

      </ul>
    </div>
  )
}

export default Nav;