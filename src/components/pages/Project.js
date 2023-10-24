import React, { Component } from 'react'
import '../styles/Project.css'
import Card from './Card'
import home from '../assets/home.png';
import img2 from '../assets/img2.png';
class Project extends Component {
  render() {
    return (
      <div className='body4'>
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <center><h1 style={{padding:'10px'}}>My Recent Projects</h1></center>  
            <div className='col'>
                <Card imgsrc={img2} title="Cookify"/>
            </div>
            <div className='col'>
                <Card imgsrc={home} title="Musify"/>
            </div>
            <div className='col'>
                <Card imgsrc={img2} title="Cookify"/>
            </div>
            <div className='col'>
                <Card imgsrc={home} title="Musify"/>
            </div>
            <div className='col'>
                <Card imgsrc={img2} title="Cookify"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Project