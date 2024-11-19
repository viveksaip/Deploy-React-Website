/*

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the VS Website</h1>
      <p>
        VS website rules the space.
      </p>
    </div>
  );
}

export default App;

*/


import React from 'react';
import './App.css'; 

import Services from './parts/Services';
import Scrolleffect from './parts/Scrolleffect';
import ScrolleffectShapes from './parts/ScrolleffectShapes';


// import backgroundImage from './hearty.jpg';
import CustomerImage from './CustomerImage.png';
import front from './front.jpg';


function App() {


  return (

    // <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
    //    <h1>I Love You, Sweetheart!</h1>
    // </div>

    <>
      
      <div className='VShead'>
        <p className='title'>VSDigital</p> 
        <p className='headsubs'>Home</p> 
        <p className='headsubs'>Services</p> 
        <p className='headsubs'>About</p> 
        <p className='headsubs'>Contact</p> 
      </div>

      <img src={front} style={{ width: '100%', height: 'auto' }}></img>

      <Services />

      <div class='VSgap'></div>

      <div className='VScssContainer'> 
        <div className='VScss2'>
          <img src={CustomerImage}></img>
        </div>

        <div className='VScss3'>
            <p className='About_Green'>About</p>
            <p className = 'main-p'>
              At VSDigital, we are committed to delivering innovative solutions that drive success. With a focus on quality, collaboration, and results, we partner with our clients to solve challenges and unlock new opportunities. Our team of experts brings a wealth of experience, ensuring every project exceeds expectations. Let’s build the future together.
            </p>        
        </div>

      </div>

      <p class='hgreen'>Contact</p>
      <textarea class='textboxcss' placeholder="Message"></textarea>
      <textarea class='textboxcssMssgSent' placeholder="Send Message"> </textarea>
      
      <ScrolleffectShapes />
     

      <div className='VScssContainer'> 
        
        <div className='VScss2row'>
          <h1>VSDigital</h1>
          <p style={{color: 'white'}}>One Stop for all your Tech needs </p> 
        </div>

        <div className='VScss3row'>
          <h1>Important Link</h1>
          <p style={{color: 'white'}}>Home </p> 
          <p style={{color: 'white'}}>Services </p> 
          <p style={{color: 'white'}}>About us </p> 
        </div>

        <div className='VScss4row'>
          <h1>Contact</h1>
          <p style={{color: 'white'}}>VivekSai@VSDigital.com </p> 
          <p style={{color: 'white'}}>Bangalore, GLL, Block Avenue 342 </p> 
          <p style={{color: 'white'}}>+91 8919408071</p> 
        </div>

        <div className='VScss5row'>
          <h1>Social Media</h1>
          <p style={{color: 'white'}}>Github</p> 
          <p style={{color: 'white'}}>Twitter </p> 
          <p style={{color: 'white'}}>Linkedin </p> 
        </div>

      </div>
      
    </>
  
);
}

export default App;

