import React, { useEffect, useState } from 'react'
import './services.scss'
import { Button, Col, Drawer, Input, Modal, Row } from 'antd'

import cloudBanner from "../../assets/wrapper/cloud-banner.svg"
import companyIcon from "../../assets/raw/arrowcod.png"
import ServiceProviderCard from './serviceProviderCard/serviceProviderCard'
import { servicesPageData } from '../../mock/servicesData'
import { SearchOutlined } from '@ant-design/icons';
import navigationIcon from '../../assets/icons/navigation.svg'
import hexagonCheckIcon from '../../assets/icons/hexagon-check.svg'
import linkIcon from '../../assets/icons/link.svg'
import searchIcon from '../../assets/icons/fi-rs-search.svg'
import arrowRightIcon from '../../assets/icons/arrow-down-small.svg'
import NoteCard from '../../shared/noteCard/noteCard'
import UserProfile from '../../shared/userProfile/userProfile'

import verifiedColoredIcon from '../../assets/icons/verified-colored.svg'
import sponsoredColoredIcon from '../../assets/icons/sponsored-colored.svg'
import bookmarkIcon from '../../assets/icons/bookmark.svg'
import flagIcon from '../../assets/icons/flag-alt.svg'
import countryIcon from '../../assets/images/country.png'
import clockIcon from '../../assets/icons/clock-five.svg'

import QuickTips from '../../shared/quickTips/quickTips'


const Services = () => {

  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false)
  const [catchedSponsorDetails, setCatchedSponsorDetails] = useState({})
  const [isViewServiceDetails, setIsViewServiceDetails] = useState(false)
  const [viewServiceDetails, setViewServiceDetails] = useState<any>()

  const [isMobile, setIsMobile] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState('All')

  const handelSuponsorModalFunc = (children: any, catchedDetails: any) => {
    setIsSponsorModalOpen(children)
    setCatchedSponsorDetails(catchedDetails)
  }

  const filtersData = [
    {
      icon: navigationIcon,
      label: "All",
    },
    {
      icon: hexagonCheckIcon,
      label: "Verified",
    },
    {
      icon: linkIcon,
      label: "Sponsored",
    },
  ]

  const handelFilterSubmit = (key: any) => {
    setSelectedFilter(key)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);



  const [scrollOpacity, setScrollOpacity] = useState<any>(1);

  const handleScroll = () => {
    const serCardInsetCloneDiv:any = document?.querySelector('#ser-card-inset-clone-dr4');
    const scrollY = serCardInsetCloneDiv?.scrollTop;

    const opacity = 1 - scrollY / 300;
    setScrollOpacity(Math.max(0, Math.min(1, opacity)));
  };

  useEffect(() => {
    const serCardInsetCloneDiv:any = document?.querySelector('#ser-card-inset-clone-dr4');
    serCardInsetCloneDiv?.addEventListener('scroll', handleScroll);

    return () => {
      serCardInsetCloneDiv?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='services-main-wrapper'>
      <div className="main-service-image-wrapper">
        <img className='cloud-banner' src={cloudBanner} alt="" />
        <div className="middle-head-content">
          <h2>Unlock Expertise at Your Fingertips: <br />
            Find Your Perfect Service Provider Today!</h2>
        </div>
      </div>


      <div className="wrap-set-services">
        <div className='search-flex-ser' style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
          <Input rootClassName='search-service' size="large" placeholder="Search Service" />
          <Button className='btn-hfr' style={{ padding: "10px 20px" }}> <img src={searchIcon} style={{ filter: "invert(1) brightness(11)" }} width={20} height={20} alt="" /> </Button>
        </div>

        <Row style={{ marginTop: 60 }} gutter={20}>
          <Col lg={7} md={7} sm={24} xs={24} >
            <div
              style={{
                position: 'sticky',
                top: '70px',
                width: '100%',
                zIndex: "100"
              }}>
              <div className='filters'>
                {
                  filtersData.map((item: any) => (
                    <div className={`${item.label === selectedFilter ? 'fil-bx fill-selected' : 'fil-bx'}`} onClick={() => handelFilterSubmit(item.label)} >
                      <img src={item.icon} alt="" />
                      <p>{item.label}</p>
                    </div>
                  ))
                }
              </div>
              <br />
              <QuickTips />
            </div>
          </Col>
          <Col md={17} sm={17} style={{ position: 'unset' }} >
            <div className="service-providers-cards-page-wrapper">
              {
                servicesPageData.map((item: any) => (
                  <ServiceProviderCard setIsViewServiceDetails={setIsViewServiceDetails} setViewServiceDetails={setViewServiceDetails} cardData={item} handelSuponsorModalFunc={handelSuponsorModalFunc} />
                ))
              }
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </div>





      <Modal centered title="Sponsored Details" wrapClassName='sponsored-details-wrapper' open={isSponsorModalOpen} onCancel={() => setIsSponsorModalOpen(false)} footer={false}>
        <div className="inner-set-gripper">
          <div className="company-info-wrapper">
            <div className="company-icon">
              <img src={companyIcon} alt="" />
            </div>
            <div className="details-content">
              <h3 className='fs-16 fw-600'>ArrowCod_it_solutions</h3>
              <p className='fs-12 fw-500 light-grey'>Company Type : <span><u><em>Software</em></u></span></p>
              <p style={{ marginTop: '5px' }}>
                <label className='fs-16 fw-500'>About</label><br />
                <span className='light-grey fs-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veritatis ex soluta! Quasi alias nulla vel amet iste, consequatur porro velit. Laboriosam fuga at unde earum architecto nulla sed similique?</span>
              </p>
              <div className="tags">
                <div className="tg-xr" style={{ border: "1px solid #f39c12", backgroundColor: '#f39c1221', color: '#f39c12' }}>Ratings : 4.3</div>
                <div className="tg-xr" style={{ border: "1px solid #3498db", backgroundColor: '#3498db1a', color: '#3498db' }}>Employes : 200</div>
                <div className="tg-xr" style={{ border: "1px solid #27ae60", backgroundColor: '#27ae601f', color: '#27ae60' }}>Location : Islamabad</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Drawer closeIcon={<img src={arrowRightIcon} width={25} height={25} style={{ transform: "rotate(90deg)" }} alt="" />} title="" rootClassName='wrapper-service-drawer' placement="right" onClose={() => setIsViewServiceDetails(false)} open={isViewServiceDetails}>
        <div className='service-provider-card-main ser-card-inset-clone-dr4' id='ser-card-inset-clone-dr4' >
          {
            isMobile &&
            <div className="res-back-icon" onClick={() => setIsViewServiceDetails(false)}>
              <img src={arrowRightIcon} width={30} height={30} style={{ transform: "rotate(90deg)" }} alt="" />
            </div>
          }
          <div className='wrapper-ddl7s8'>
            <div className='service-image'> <div style={{ opacity: scrollOpacity }}><img src={viewServiceDetails?.serviceBanner} alt="" /></div> </div>
            <div className='wrapper-service-inset'>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <UserProfile src={viewServiceDetails?.userDetails?.userIcon} title={viewServiceDetails?.userDetails?.userName} />
                </div>
                <p className='fs-14 fw-600'><em><u>{viewServiceDetails?.serviceLabel}</u></em></p>
              </div>
              <h3 className='fs-20 fw-500' style={{ marginTop: "10px" }}>Strategic Insights: Your Path to Success with Professional Consulting Services</h3>
              <p className='fs-14 fw-400' style={{ marginTop: "10px" }}>{viewServiceDetails?.serviceDiscription}</p>
              <p className='fs-14 fw-400 dull-color' style={{ marginTop: "10px" }}>{viewServiceDetails?.ratings} Ratings &bull; {viewServiceDetails?.servicesDone} Services Done</p>
              <div className='ser-tags'>
                {viewServiceDetails?.isVerified && <div className="ser-tags-bbx">
                  <img src={verifiedColoredIcon} alt="" />
                  <p>VERIFIED</p>
                </div>}
                <div className="ser-tags-bbx">
                  <img src={sponsoredColoredIcon} alt="" />
                  <p>SPONSORED</p>
                </div>
              </div>
            </div>

            {!isMobile && <SimilarJobs />}
          </div>


          <div className='right-content-dvd'>
            {/* <div className='book-btns'>
              <Button className='common-rounded-g-blue' style={{ width: "100%" }}>Book Now</Button>
            </div> */}
            <div className='book-btns'>
              <Button className='common-rounded-g-blue' style={{ width: "100%" }}>Book Now</Button>
              <Button className='common-rounded-g-dull' style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}> <img src={bookmarkIcon} width={15} height={15} alt="" /> Save this Job</Button>
            </div>


            <div className="job-terms">
              <h4 className='fs-14 fw-500' style={{ marginBottom: "10px" }}>Job Terms</h4>
              <div className='j-t-info'>
                <p>Availability Mode : <span>Online</span></p>
                <p>Online Software : <span>Zoom, Google Meet</span></p>
              </div>
            </div>
            <div className="service-provider-about">
              <h4 className='fs-14 fw-500' style={{ marginBottom: "10px" }}>About Service Provider</h4>
              <div className='j-t-info'>
                <div className='gripperjt'><div className='lw-inset'><img src={countryIcon} height={20} alt="" /> </div><span>pakistan</span></div>
                <div className='gripperjt'><div className='lw-inset'><img src={clockIcon} width={15} height={15} alt="" /></div> <span>Member since &bull; Jan 09, 2024</span></div>
              </div>
            </div>
            <div className="flag-user">
              <img src={flagIcon} width={15} height={15} alt="" /> Report User
            </div>


            {isMobile && <SimilarJobs />}

          </div>

        </div>
      </Drawer>

    </div>
  )
}


const SimilarJobs = () => {
  return (
    <div className="similar-jobs-wrapper">
      <h4 className='fs-20 fw-500' style={{ marginBottom: "10px", marginTop: "20px" }}>Similar Jobs</h4>
      <div className="similar-jobs-inset">
        <a href="" target="_blank" rel="noopener noreferrer">Professional Strategy Advisor: Guiding Success Trajectories</a>
        <a href="" target="_blank" rel="noopener noreferrer">Success Path Consultant: Crafting Strategic Insights</a>
        <a href="" target="_blank" rel="noopener noreferrer">Driving Success through Consulting</a>
        <a href="" target="_blank" rel="noopener noreferrer">Consulting Excellence Manager: Mapping Success Strategies</a>
        <a href="" target="_blank" rel="noopener noreferrer">Insight Advisor: Charting Paths to Success</a>
        <a href="" target="_blank" rel="noopener noreferrer">Services Architect: Designing Paths for Success</a>
        <a href="" target="_blank" rel="noopener noreferrer">Success Strategies Consultant: Orchestrating Professional Insight</a>
        <a href="" target="_blank" rel="noopener noreferrer">Solutions Analyst: Delivering Success through Consulting</a>
      </div>
    </div>

  )
}

export default Services