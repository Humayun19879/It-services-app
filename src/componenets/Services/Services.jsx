import React from 'react'
import './Services.css'
import menu from '../../assets/menus.png'
import development from '../../assets/icons/web development.png' 
import Designer from '../../assets/icons/slider1.png' 

const Services = () => {
  return (
    <div className='services' id='services'>
     
        <div className="services-content">
          <div className="services-content-heading">
            <img src={menu} alt="" />
          <h3>SERVICES </h3>
          </div>
          <div className="services-content-heading-content">
            <h2>SERVICES WE OFFER:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem cumque quaerat, aliquam unde ratione?Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="services-content-heading-cards">
            <div className="card">
              <img src={development} alt="" />
              <div className="crd-inner">
              <h3>Web-Development</h3>
             
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo voluptatibus libero, odit voluptatem sit!</p>
              </div>
            </div>





            <div className="card">
              <img src={Designer} alt="" />
              <div className="crd-inner">
              <h3>Graphic- Designing</h3>
             
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo voluptatibus libero, odit voluptatem sit!</p>
              </div>
            </div>

            
            <div className="card">
              <img src={development} alt="" />
              <div className="crd-inner">
              <h3>Songs</h3>
             
              <p>Lorem ipsum dolor ghjkghj Lorem ipsum dolor sit. sit amet consectetur adipisicing elit. Blanditiis quo voluptatibus libero, odit voluptatem sit!</p>
              </div>
            </div>


            <div className="card">
              <img src={development} alt="" />
              <div className="crd-inner">
              <h3>Social-Media Management</h3>
             
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo voluptatibus libero, odit voluptatem sit!</p>
              </div>
            </div>

          </div>
        </div>
     
    </div>
  )
}

export default Services
