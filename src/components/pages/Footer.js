import React from 'react'
import '../styles/Footer.css'
import {FaInstagram,FaYoutube,FaLinkedin,FaHeart} from 'react-icons/fa';
function Footer() {
  return (
    <div className='body5'>
      <div className='dev'>
        <h5 style={{padding:'30px 10px',textAlign:'center'}}>Copyrights@2023</h5>
        <div className='icons'>
          <FaInstagram size={30}/>
          <FaYoutube size={30} />
          <FaLinkedin size={30}/>
        </div>
        <h5 style={{padding:'30px 10px',textAlign:'left'}}>Designed with &nbsp; <FaHeart style={{color:'red'}}/></h5>
      </div>
    </div>
  )
}
export default Footer