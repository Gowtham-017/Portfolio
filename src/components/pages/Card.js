import React from 'react'
import '../styles/Card.css'
function Card(props) {
  return (
    <div className='body7'>
      <div className='card-text-center shadow'>
        <div className='overflow'>
          <img src={props.imgsrc} alt='home' className='card-img-top' />
        </div>
        <div className='card-body text-dark'>
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-text text-secondary'>lorem iyaigdifa a afuic</p>
          <center><a href='/' className='btn btn-outline-success'>Go anywhere</a></center>
        </div>
      </div>
    </div>
  )
}
export default Card