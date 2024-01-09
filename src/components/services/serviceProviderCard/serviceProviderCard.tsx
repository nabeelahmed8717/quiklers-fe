import React from 'react'
import "./serviceProviderCard.scss"
import starIcon from "../../../assets/icons/fi-sr-star.svg"
import { Button, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../../../shared/userProfile/userProfile'

import verifiedColoredIcon from '../../../assets/icons/verified-colored.svg'
import sponsoredColoredIcon from '../../../assets/icons/sponsored-colored.svg'

const ServiceProviderCard = ({ cardData, handelSuponsorModalFunc, setIsViewServiceDetails, setViewServiceDetails }: any) => {
  const navigate = useNavigate()
  console.log(cardData)
  return (
    <div className='service-provider-card-main' onClick={() => {setIsViewServiceDetails(true); setViewServiceDetails(cardData) }} >
      <Row gutter={20}>
        <Col sm={8}><div className='service-image'><img src={cardData?.serviceBanner} alt="" /></div></Col>
        <Col sm={16}>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div onClick={() => navigate('/user-profile')}>
                <UserProfile src={cardData?.userDetails?.userIcon} title={cardData.userDetails.userName} />
              </div>
              <p className='fs-14 fw-600'><em><u>{cardData?.serviceLabel}</u></em></p>
            </div>
            <h3 className='fs-16 fw-500' style={{marginTop:"10px"}}>Strategic Insights: Your Path to Success with Professional Consulting Services</h3>
            <p className='fs-14 fw-400' style={{ marginTop: "10px" }}>{cardData.serviceDiscription}</p>
            <p className='fs-14 fw-400 dull-color' style={{ marginTop: "10px" }}>{cardData.ratings} Ratings &bull; {cardData.servicesDone} Services Done</p>
            <div className='ser-tags'>
              {cardData.isVerified && <div className="ser-tags-bbx">
                <img src={verifiedColoredIcon} alt="" />
                <p>VERIFIED</p>
              </div>}
              <div className="ser-tags-bbx">
                <img src={sponsoredColoredIcon} alt="" />
                <p>SPONSORED</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ServiceProviderCard