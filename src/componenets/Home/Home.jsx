import React from 'react'
import './Home.css'
import feature1 from '../../assets/icons/feature1.png'
import feature2 from '../../assets/icons/feature2.png'
import feature3 from '../../assets/icons/feature3.png'
import feature4 from '../../assets/icons/feature4.png'

const Home = () => {
  return (
    <div className='home' id='home'>
     
      <div className="content">
        <h1>DIGITAL SERVICES</h1>
        <p>BUILDING YOUR EMPIRE DIGITALLY</p>
        <div className="home-btn">
        <button className='gets'>Get Started</button>
        <button>Order</button>
        </div>


      </div>

      <div className="home-cards">
        <div className="card">
          <img src={feature1} alt="" />
          <h3>Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum </p>
        </div>
        <div className="card">
        <img src={feature2} alt="" />
          <h3>Lorem ipsum dolor sit amet .</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum quasi </p>
        </div>
        <div className="card">
        <img src={feature3}alt="" />
          <h3>Lorem ipsum dolor sit amet .</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum quasi </p>
        </div>
        <div className="card">
        <img src={feature4}alt="" />
          <h3>Lorem ipsum dolor sit amet .</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum </p>
        </div>
      </div>
    </div>
  )
}

export default Home

