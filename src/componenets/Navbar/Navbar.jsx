import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logon.png'
import facebook from '../../assets/facebookn.png'
import insta from '../../assets/instan.png'
import whatsapp from '../../assets/whatsappn.png'



const Navbar = () => {
  
const [active,setActive]= useState('home');
 
  return (
    <div className='nav'>
      <div className="nav-main">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="mid">
          <ul>
            <li><a  onClick={()=>setActive("home")} className={active==='home'?"active":""} href="#home" >Home</a></li>
            <li><a onClick={()=>setActive("services")} className={active==='services'?"active":""} href="#services">Services</a></li>
            <li><a onClick={()=>setActive("pricing")} className={active==='pricing'?"active":""} href="#pricing">Pricing</a></li>
            <li><a onClick={()=>setActive("contact")} className={active==='contact'?"active":""} href="#contact">Contact</a></li>


          </ul>

        </div>
      </div>
      <div className="right">
        <ul>
          <li><img src={facebook} alt="" /></li>
          <li><img src={insta} alt="" /></li>
          <li><img src={whatsapp} alt="" /></li>
        </ul>
          
          
          
      </div>

    </div>
  )
}

export default Navbar
