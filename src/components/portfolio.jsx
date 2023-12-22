import React, { useState } from "react";
import { useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';


let img={}

const Portfolio=()=>{


  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
    
    return(
        <div>
     
     <div>
      <LightSpeed>
        <h5 style={{color:"orange",fontFamily:"poppins",fontWeight:"bolder",paddingTop:"100px"}}>PORTFOLIO</h5>

        <p style={{fontSize:"25px",fontWeight:"bolder",fontFamily:"poppins"}}>Check out some of my work</p>
        </LightSpeed>
     </div>


<div >





<div class="row" style={{margin:"50px auto",width:"70%"}}>


<div class="col-md-6">
          <Zoom top>
        <h6 style={{fontFamily:"poppins",color:"orange",textAlign:"start" ,fontSize:"13px",paddingTop:"20px"}}>WEBSITE DEVELOPED:<a href="https://learningmodes.netlify.app"  target="_blank" style={{color:"orange"}}>LEARNING MODE(An Online Learning Website)</a></h6>
    <h6 style={{fontFamily:"poppins",textAlign:"start"}}>SOFTWARE USED:
    LARAVEL, REACT JS</h6>
    <img src="learn.PNG" className="img-fluid" style={{width:"400px"}}/>

    </Zoom>
        </div>

  <div class="col-md-6">
          <Zoom top>
        <h6 style={{fontFamily:"poppins",color:"orange",textAlign:"start",fontSize:"15px",paddingTop:"20px"}}>WEBSITE DEVELOPED:<a href="https://clinicplusapp.org/#/"  target="_blank" style={{color:"orange"}}>CLINIC(An Online Clinic)</a></h6>
    <h6 style={{fontFamily:"poppins",textAlign:"start"}}>SOFTWARE USED:
    REACT JS, BOOTSTRAP,MATERIAL UI </h6>
    <img src="clinic.PNG" className="img-fluid" style={{width:"400px"}}/>

    </Zoom>
        </div>

</div>


<div class="row"style={{margin:"50px auto",width:"70%"}}>
        <div class="col-md-6">
          <Zoom top>
        <h6 style={{fontFamily:"poppins",color:"orange",textAlign:"start",fontSize:"13px",paddingTop:"20px"}}>WEBSITE DEVELOPED:<a href="https://primecrestmontessori.education/"  target="_blank" style={{color:"orange"}}>PRIMECRESTMONTESSORI(A School Website)</a></h6>
    <h6 style={{fontFamily:"poppins",textAlign:"start"}}>SOFTWARE USED:
    REACT JS, BOOTSTRAP,MATERIAL UI </h6>
    <img src="school.PNG" className="img-fluid" style={{width:"400px"}}/>

    </Zoom>
        </div>


        <div class="col-md-6">
          <Zoom top>
        <h6 style={{fontFamily:"poppins",color:"orange",textAlign:"start",fontSize:"13px",paddingTop:"20px"}}>WEBSITE DEVELOPED:<a href="https://habshome.netlify.app/"  target="_blank" style={{color:"orange"}}>HABS HOME(An Real Estate Website)</a></h6>
    <h6 style={{fontFamily:"poppins",textAlign:"start"}}>SOFTWARE USED:
    REACT JS, REACT BOOTSTRAP,CSS,HTML</h6>
    <img src="images/hab.png" class="img-fluid" style={{width:"300px"}}/>

    </Zoom>
        </div>

</div>




<div class="row"style={{margin:"50px auto",width:"70%"}}>
        


        <div class="col-md-6">
          <Zoom top>
        <h6 style={{fontFamily:"poppins",color:"orange",textAlign:"start",fontSize:"13px",paddingTop:"20px"}}>WEBSITE DEVELOPED:<a href="https://moatcohorts.com.ng/c25/shipn/landing.php"  target="_blank" style={{color:"orange"}}>SHIPN LOGISTICS(A logistic Website with Invoice)</a></h6>
    <h6 style={{fontFamily:"poppins",textAlign:"start"}}>SOFTWARE USED:
    PHP, JAVASCRIPT</h6>
    <img src="images/home.png" class="img-fluid" style={{width:"300px"}}/>

    </Zoom>
        </div>

</div>


    
   
</div>
    <div class="row" style={{margin:"auto 0px",width:"100%"}}>

    <h6 style={{fontFamily:"poppins",color:"orange",textAlign:"start"}}>UI/UX Designs</h6>
    <h6 style={{fontFamily:"poppins",textAlign:"start"}}>SOFTWARE USED:
    Figma</h6>

    <div class="col-md-4" >
      
      <img src="images/fig.jpg" class="img-fluid" style={{height:'400px',width:"400px"}}/>
        <h5> <a href="http://bit.ly/3GkGys8"  target="_blank" style={{color:"black"}}>Ilearn APP( Online Learning Mobile App with Prototyping)</a></h5> 
        
      </div>


      <div class="col-md-4" >
      
      <img src="images/chronos.PNG" class="img-fluid" style={{height:'400px',width:"400px"}}/>
        <h5> <a href="https://www.figma.com/file/JRR0Rw8s7DM08qtythgMbO/UI%2FUX-Design-Group-19?type=design&node-id=23-87&mode=design&t=YYTQ3SXLGnHcaEJ3-0"  target="_blank" style={{color:"black"}}>Group Project:Chronos(Car Dealer Mobile App with Prototyping)</a></h5> 
        
      </div>
    <div class="col-md-4" >
      
    <img src="images/img.jpg" class="img-fluid"/>
      <h5>Sony Game Pad</h5> 
      
    </div>
    <div class="col-md-4">
    <img src="images/img2.jpg" class="img-fluid"/>
      <h5>Xbox Game pad</h5> 
      
    </div>

    <div class="col-md-4">
    <img src="images/img3.jpg" class="img-fluid"/>
      <h5>Restaurant App</h5> 
      
    </div>
    <div class="col-md-4">
    <img src="images/img4.jpg" class="img-fluid"/>
      <h5>Car Ordering App</h5> 
      </div>

    <div class="col-md-4">
    <img src="images/img7.jpg" class="img-fluid"/>
      <h5>Online Game App</h5> 
      </div>

      <div class="col-md-4">
    <img src="images/img5.jpg" class="img-fluid"/>
      <h5>Travel Tour App</h5> 
      </div>

      <div class="col-md-4">
    <img src="images/img6.jpg" class="img-fluid"/>
      <h5>Nike Shoe App</h5> 
      </div>

      <div class="col-md-4">
    <img src="images/img8.jpg" class="img-fluid"/>
      <h5>Nature App</h5> 
      </div>

      <div class="col-md-4">
    <img src="images/img16.jpg" class="img-fluid"/>
      <h5>Nigerians Icon Design</h5> 
      </div>
      
    </div>
    
    </div>
    

    

        
    )
}
export default Portfolio;