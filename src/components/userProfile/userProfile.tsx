import React, { useEffect, useState } from 'react'
import "./userProfile.scss"
import starIcon from "../../assets/icons/fi-sr-star.svg"
import userIcon from "../../assets/raw/driver.png"
import verifiedIcon from "../../assets/icons/verified-colored.svg"
import serviceBanner from "../../assets/raw/service-banner.png"
import { Col, Image, Row, Tabs, TabsProps } from 'antd'
import ProfileTab from './profileTabs/profileTab'
import OverviewTab from './profileTabs/overviewTab'
import CompletedBookingsTab from './profileTabs/completedBookingsTab'
import AchievmentsTabs from './profileTabs/achievmentsTabs'
import BooknowProcess from './booknowProcess/booknowProcess'
import NoteCard from '../../shared/noteCard/noteCard'
import QuickTips from '../../shared/quickTips/quickTips'
import ProfileTabEdit from './profileTabs/editComps/profileTabEdit'

const UserProfile = ({ mode }: any) => {

    const isServiceProvider = mode === 'edit'

    // scrollnav 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav 


    const [isBookNowModalOpen, setIsBookNowModalOpen] = useState(false)

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Profile`,
            children: mode === 'edit' ? <ProfileTabEdit /> : <ProfileTab />,
        },
        {
            key: '2',
            label: `Overview`,
            children: <OverviewTab />,
        },
        {
            key: '3',
            label: `Completed Bookings`,
            children: <CompletedBookingsTab />,
        },
        {
            key: '4',
            label: `Achievments`,
            children: <AchievmentsTabs />,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    return (
        <>
            <div className={`${mode === 'edit' ? 'inset-d-rop-unfilled' : "inset-d-rop"}`}></div>
            <div className='user-profile-main-wrapper'>
                <div className='inner-inset-services'>
                    <div className="section-user-info">
                        <div className="wrapper-profile-banner">
                            {/* <img src={serviceBanner} alt="" /> */}
                            <img src={serviceBanner} />
                        </div>
                        <div className="user-profile-wrapper">
                            <div className="user-image">
                                <Image src={userIcon} style={{ borderRadius: "13px" }} />
                                <div className="badge-is-online"></div>
                            </div>
                        </div>
                    </div>
                    <div className="inset-bt-c">
                        <Row gutter={30}>
                            <Col md={16} sm={24} >
                                <div className="user-details" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                    <div className="main-details">
                                        <h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <img src={verifiedIcon} width={20} height={20} alt="" /> Jhon Doe</h2>
                                        <p>Level : <span>09</span></p>
                                    </div>
                                    <div className="profile-ratings">
                                        <img src={starIcon} width={12} height={12} alt="" />
                                        <span>5.6</span>
                                    </div>
                                </div>
                                <div className="section-detailed-tab">
                                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                                </div>
                            </Col>
                            <Col md={8} sm={24} >
                                {mode === 'edit' ?
                                    <QuickTips />
                                    :
                                    <div style={{ position: "sticky", top: "100px !important" }}>
                                        <div className="bg-side-info-wrap book-sec"
                                            style={{ top: visible ? "65px" : '0px', }}
                                        >
                                            <div style={{ padding: '15px' }}>
                                                <h4 className='fs-16 fw-600 label-color'>Expected Hourly Rate</h4>
                                                <h5 className='h-rate'>500 <span>Rs</span></h5>
                                            </div>
                                            <button onClick={() => setIsBookNowModalOpen(true)}>Book Now</button>
                                        </div>
                                        <br />
                                        <NoteCard title='Information' description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus dolore ullam inventore reprehenderit veritatis, nam commodi, exercitationem odit nulla unde eum." />
                                    </div>
                                }
                            </Col>
                        </Row>
                    </div>
                    <br />
                    <br />
                </div>

                <BooknowProcess isBookNowModalOpen={isBookNowModalOpen} setIsBookNowModalOpen={setIsBookNowModalOpen} />


            </div></>

    )
}

export default UserProfile