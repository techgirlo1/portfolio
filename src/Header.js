import React from "react";
import './App.css';

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart} from '@fortawesome/free-solid-svg-icons'
import { Route,Routes,Link } from 'react-router-dom';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { faBehance, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Quote from './components/quote';
import moment from 'moment/moment';
import Zoom from 'react-reveal/Zoom';
var current=moment().format("YYYY")
const Header=()=>{

    
    return(
        <div class="App" >
<div>
<Navbar expand="lg" bg="black" data-bs-theme="dark"  fixed="top">
      <strong><Navbar.Brand><Link activeStyle={{color:'green'}} from ="/*" to="/" status="200" style={{color:"orange", textDecoration:"none",fontSize:"30px",paddingLeft:"10px"}} >PORTFOLIO</Link></Navbar.Brand></strong>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto" style={{paddingLeft:"250px"}}> 
        
        
          <Nav.Link><Link from ="/*" to ="/about" status="200" style={{color:"orange", textDecoration:"none"}} >ABOUT</Link></Nav.Link>
          <Nav.Link><Link from ="/*" to ="/portfolio" status="200" style={{color:"orange", textDecoration:"none"}}>PORTFOLIO</Link></Nav.Link>
          <Nav.Link><Link from ="/*" to="/contact" status="200" style={{color:"orange", textDecoration:"none"}}>CONTACT</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
        
    <Routes>
    
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/quote' element={<Quote/>}/>
      <Route path='/' element={<App/>}/>
    </Routes>
    </div>



    <div style={{backgroundColor:"orange",minHeight:"160px"}}>
      
   <Link to="https://www.linkedin.com/in/habeebat-sanusi-27b423249/" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color:'white',fontSize:"30px",paddingLeft:"30px",marginTop:"70px"}}/></Link>
    <Link to="https://instagram.com/the_tech_girl01?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><FontAwesomeIcon icon={faInstagram} style={{color:'white',fontSize:"30px",paddingLeft:"30px"}}/></Link>
    <Link to="https://github.com/techgirlo1" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'white',fontSize:"30px",paddingLeft:"30px"}}/></Link>
    <Link to="https://www.behance.net/habeebatsanusi?fbclid=PAAabiKu-wVrSGQm3Nqp3eyVDXlaxioiOgGeXYNxzXQjt6zVspExkDJMobDhM" target='_blank'><FontAwesomeIcon icon={faBehance} style={{color:'white',fontSize:"30px",paddingLeft:"30px"}}/></Link>
    
    <p style={{color:"white",paddingTop:"20px"}}>Develop with <FontAwesomeIcon icon={faHeart} style={{color:'pink',fontSize:"15px"}}/> by Sanusi Habeebat  &copy;{current}</p>
    
        
</div>

        </div>
    )
}

export default Header