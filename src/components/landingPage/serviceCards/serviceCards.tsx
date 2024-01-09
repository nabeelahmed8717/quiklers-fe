import React from 'react'
import "./serviceCards.scss"

import starIcon from "../../../assets/icons/fi-sr-star.svg"
import arrowUp from "../../../assets/icons/arrow-up.svg"

const ServiceCards = ({ serviceCardsData }: any) => {
    return (
        <>
            {
                serviceCardsData.map((service: any) => (
                    <div className="card-service">
                        <div className="service-tags">
                            <div className="ratings tags" style={{ backgroundColor: '#f39c1221' }}><img src={starIcon} width={12} height={12} alt="" /><span style={{ color: "#f39c12" }}>3.4</span></div>
                            <div className="trending tags" style={{ backgroundColor: '#27ae6021' }}><img src={arrowUp} width={12} height={12} alt="" /></div>
                        </div>
                        <div className="service-icon"><img src={service.icon} alt="" /></div>
                        <div className="service-title fs-16 fw-500" style={{ marginTop: '20px' }}>{service.label}</div>
                    </div>
                ))
            }
        </>
    )
}

export default ServiceCards