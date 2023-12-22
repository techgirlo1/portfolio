import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const   Quote=()=>{

    const[state,statekey]=useState({
        post:[]
    })


    useEffect(() => {
      window.scroll(0,0);
  
      
    }, []);

    axios.get('https://type.fit/api/quotes')
  .then(function (response) {
    // handle success
    statekey({post:response.data});
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  let item= state.post.map((items,index)=>{
    return <div class="row" style={{display:"flex"}}>
      <div class="col-12" style={{border:"1px solid black",flexGrow:"2",paddingTop:"100px"}}>
      <h5>Author: {items.author}</h5>
      <p>Quote: {items.text}</p>
      </div>
    </div>
  })

  
     return(
        <div>
           {item}
        </div>
     )
}
export default Quote