import React,{useState} from 'react'
import '../styles/Navigation.css'
import {FaBars} from 'react-icons/fa';
import {Link} from "react-router-dom"
function Navigation() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className='body0'>
      {/* <div className='elements'>
        <div className='item1'>Gowtham </div>
        <Link to="Home"><div className='item2'>Home</div></Link>
        <Link to="About"><div className='item2'>About</div></Link>
        <Link to="Skills"><div className='item2'>Skills</div></Link>
        <Link to="Card"><div className='item2'>Projects</div></Link>
      </div> */}
         
      <div id="sidebar" className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <button className="menu-toggle-button" onClick={toggleSidebar}>
          <FaBars size={40} style={{color:'white'}}/>
        </button>
        {sidebarVisible && (
          <>
          <Link to="Home"><div className='item2'><h5>Home</h5></div></Link>
          <Link to="About"><div className='item2'><h5>About</h5></div></Link>
          <Link to="Skills"><div className='item2'><h5>Skills</h5></div></Link>
          <Link to="Project"><div className='item2'><h5>Project</h5></div></Link>
          <Link to="Resume"><div className='item2'><h5>Resume</h5></div></Link>
          </>
        )}
      </div>
    </div>
  )
}
export default Navigation
