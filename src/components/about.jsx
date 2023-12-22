import React from "react";
import { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
const About=()=>{

    let emailAddress=
        "habeebatsanusi08@gmail.com";
      
    


let sp={
    fontSize:"12px",color:"grey"
    
}
  
useEffect(() => {
    window.scroll(0,0);

    
  }, []);
    return(
      <div>
        <div class="row" style={{background:"white",minHeight:"200px",margin:"auto",width:"80%"}}>
            <div>
            </div>
            <div class="col-md-4" style={{paddingTop:"130px"}}>
                <Zoom top>
            <img src="myimg.jpg" class="img-fluid"style={{borderRadius:"50%",height:"150px"}}/>
            </Zoom>
            </div>
            <div class="col-md-6" style={{paddingTop:"100px"}}>
            <LightSpeed>
            <strong><h5 style={{color:"orange",fontFamily:"poppins",fontWeight:"bolder"}}>ABOUT</h5></strong>
            </LightSpeed>
            <strong><p style={{lineHeight:"2",padding:"0px 10px"}}>
            <Zoom top>
            I am a results-driven Full Stack Web Developer and UI/UX Designer with a fervent passion for the intricate art of website development.The dynamic nature of transforming ideas into interactive and visually stunning digital experiences is what fuels my enthusiasm for this 
            field. With a solid foundation in  Laravel, PHP,React, and JavaScript, I leverage these technologies to create seamless, responsive, and innovative websites.
                </Zoom>
            </p></strong>
            
            </div>
            <div class="col-md-6 my-5">
                <LightSpeed>
                <h3 style={{fontFamily:"cursive",color:"orange"}}>My Skills</h3>
                </LightSpeed>
                <Zoom top>
                <ul style={{listStyleType:"none",paddingTop:"10px"}}>
                    <li>
            <label>HTML5</label>
            <ProgressBar animated now={95} />
            </li>
            <li>
            <label>CSS</label>
            <ProgressBar animated now={95} />
            </li>
            <li>
            <label >BOOTSTRAP</label>
            <ProgressBar animated now={95} />
            </li>
            <li>
            <label>REACT JS</label>
            <ProgressBar animated now={90} />
            </li>
            <li>
            <label>PHP</label>
            <ProgressBar animated now={90} />
            </li>
            <li>
            <label>LARAVEL</label>
            <ProgressBar animated now={95} />
            </li>
            </ul>
            </Zoom>
            </div>
            <div class="col-md-6 my-4">
            <Zoom top>
              <h3 style={{color:"orange",fontFamily:"cursive"}}>Profile</h3>
              
              <div>
                
              <strong><h6>FULLNAME:</h6></strong>
              <p style={sp}>Sanusi Habeebat</p>
              </div>
              <div>
              <strong><h6>JOB:</h6></strong>
              <p style={sp}>Web developer,UI/UX designer</p>
              </div>
              

              <div>
              <strong><h6>Email:</h6></strong>
              <p style={sp}> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.</p>
              </div>
              
              </Zoom>
            </div>
            
            <div>
                
            <Link to="/quote"><button class="btn btn-lg "style={{fontSize:"12px",border:"3px solid grey",borderRadius:"0px",color:"black",fontWeight:"bolder",margin:"0px 20px"}}>GET FREE QUOTE</button></Link>
            
            <Zoom>
            <a href='/techcv.pdf'><button class="btn btn-lg "style={{fontSize:"12px",background:"black",borderRadius:"0px",color:"white",margin:"10px 0px",fontWeight:"bolder",target:"_blank"}}>DOWNLOAD CV</button></a>
            </Zoom>
            </div>
            
        </div>
        
        </div>
    )
}
export default About