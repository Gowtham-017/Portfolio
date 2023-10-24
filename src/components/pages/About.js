import React from 'react'
import home from '../assets/home.png';
import '../styles/About.css'
function About() {
  return (
    <div className='aboutbox'>
      <div className='about'>
        <h2 style={{textAlign:'center'}}>Who Am I ?</h2>
        <h3 style={{width:'650px'}}>I am currently an Undergraduate student pursuing BTech degree in Information Technology.I am hard working and highly passionate towards my goal</h3>
      </div>
      <div className='logoo'>
        <img src={home} alt='logoo' />
      </div>
    </div>
  )
}
export default About