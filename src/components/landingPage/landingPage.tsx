import React from 'react'
import "./landingPage.scss"
import { Button } from 'antd'

import bgWrapper from '../../assets/wrapper/bg-landing.svg'
import { servicesData } from '../../mock/services'


import arrowDown from "../../assets/icons/arrow-down-small.svg"
import ServiceCards from './serviceCards/serviceCards'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className='wrapper-main-landing-page'>
      <div className="wrapper-top-main-extend">
        <div className="wrapper-text" >
          <h2>Find your best nearby <br /> trusted Local Service Providers</h2>
        </div>
        <div className="wrapper-buttons">
          <Button className="find-now-button fw-600">Find Now</Button>
          <Button onClick={() => navigate('/sign-up')} className="register-now-button fw-600">Register</Button>
        </div>
        <img src={bgWrapper} alt="" className='bg-wrapper' />
      </div>

      <div className="section-services">
        <h3 className='fs-28 fw-700 text-center' style={{ marginTop: '30px' }}>Featured Services</h3>
        <div className="wrapper-service-cards" style={{ marginTop: "40px" }}>
          <ServiceCards serviceCardsData={servicesData}/>
        </div>
        <Button className='show-more-btn'>Show More <img src={arrowDown} alt="" /></Button>
      </div>
      <div style={{backgroundColor:"#F7F7F7", width:"100%", height:"200px", marginTop:"20vh"}}></div>
    </div>
  )
}

export default LandingPage