import React from 'react';
import './App.css';
import { init } from 'ityped';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';


function App() {


  useEffect(() => {
    const myElement = document.querySelector('#myElement');
    init(myElement, { showCursor: false, strings: ['FULLSTACK DEVELOPER', 'UI/UX DESIGNER'] });
     
      window.scroll(0,0);
    
  }, []);

  let images={
    minHeight:"700px",backgroundImage:'url("img.jpg")',backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",
   }
   
   let world={
       color:"orange" ,paddingTop:"100px",fontSize:"20px",fontFamily:"'Anton', sans-serif;"
   }
   let span={
       color:"white",fontSize:"50px",
   }
   let dev={
       color:"white",paddingTop:"40px"
   }



return (
    <div className="App">

      


    <div class="row">
     <div class="col-12">
      
        <div style={images} >
        <Zoom top>
       <h1 style={world}>HELLO , WORLD <br/><strong><span style={span}> I'm  Sanusi Habeebat.</span></strong></h1>
       </Zoom>
        <strong><p style={dev}> |  <span id="myElement" style={{ color: 'orange' }}></span> |</p></strong>
        <Zoom top>
        <Link to="/about"><button class="btn btn-lg "style={{fontSize:"12px",border:"3px solid grey",borderRadius:"0px",color:"white",}}>MORE ABOUT ME</button></Link>
        </Zoom>
     </div>
     </div>
     </div>


     
    
    </div>
  );
}

export default App;
