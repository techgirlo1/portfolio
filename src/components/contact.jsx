import React, { useState } from "react";
import { useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
const Contact=()=>{

    const[state,statekey]=useState({
        uname:"",
        mail:"",
        message:"",
        nameerr:"",
        mailerr:"",
        messageerr:"",
        all:""
    })


    useEffect(() => {
        window.scroll(0,0);
    
        
      }, []);



    var validate=()=>{
        if(state.uname=="" && state.mail=="" && state.message==""){
            statekey({all:"All fields are required"});
        }else if(state.uname=="" ){
            statekey({nameerr:"Name field is required"});
        }else if( state.mail==""){
            statekey({mailerr:"mail field is required"});
        }else if( state.message==""){
            statekey({messageerr:"message field is required"});
        }else{
            return true;
        }
    }


    let sub=(e)=>{
       e.preventDefault();
       if(validate()){
        alert("Thank you your message has been delivered sucessfully our team will get back to you");
       }
    }
    let form={
        borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"1px solid grey"
    }
    return(
        <div>
     
     <div class="row"style={{background:"white",minHeight:"700px"}}>
        <div class="col-12">
            <LightSpeed>
           <div>
            <h5 style={{color:"orange",paddingTop:"100px",fontFamily:"poppins",fontWeight:"bolder"}}>CONTACT</h5>
           <strong><p style={{fontSize:"25px",fontFamily:"poppins"}}>I'd Love to hear from you</p></strong>

           </div>
           </LightSpeed>
        </div>
        <div class="col-md-8" style={{ margin:"auto"}}>
            <Zoom top>
           <form onSubmit={sub}>
  <div class="mb-5">
  <div>
  <strong style={{color:"orange"}}>{state.all}</strong>
  </div>
  
    <input type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp"style={form}placeholder="Name" name="uname" onChange={(e)=>{statekey({...state,uname:e.target.value})}}/>
     </div>
     <strong style={{color:"orange"}}>{state.nameerr}</strong>
  <div class="mb-5">
  <input type="email" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp"style={form}placeholder="Email" name="mail"onChange={(e)=>{statekey({...state,mail:e.target.value})}}/>
  </div>
  <strong style={{color:"orange"}}>{state.mailerr}</strong>

  <div class="mb-5">
  <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"style={form}placeholder="Message" name="message"onChange={(e)=>{statekey({...state,message:e.target.value})}}/>
  </div>
  <strong style={{color:"orange"}}>{state.messageerr}</strong>
  
  <button type="submit" class="btn form-control my-4" style={{backgroundColor:"orange",color:"white"}}>Submit</button>
  </form>
</Zoom>
</div>
     </div>
     
     
        </div>
    )
}
export default Contact;