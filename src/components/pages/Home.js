import React from "react";
import Typewriter from "typewriter-effect";
import '../styles/Home.css'
import home from '../assets/home.png';
function Home() {
  return (
    <div className="body1">
      <div className="intro">
        <img src={home} alt="logo" className="logo"/>
        <h1><span class="hello">Hello!</span> I'm <span>Gowtham</span></h1>
        <Typewriter className="type" options={{strings: [ "Software Developer","React Developer","ML Enthusiast", ],
            autoStart: true, loop: true, deleteSpeed: 50,}} style={{ fontSize: '80px' }} />
        <div className="contact">
          <button className="butt"></button>
          <button className="butt"></button>
          <button className="butt"></button>
        </div>
      </div>
    </div>
  );
}
export default Home;