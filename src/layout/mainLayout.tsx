import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import homeIcon from "../assets/icons/home.svg"
import homeIconFilled from "../assets/icons/filled/house-filled.svg"

import bookings from "../assets/icons/fi-rs-notebook.svg"
import bookingsFilled from "../assets/icons/filled/bookings-filled.svg"

import chat from "../assets/icons/fi-rr-comment.svg"
import chatFilled from "../assets/icons/filled/comment-filled.svg"

import services from "../assets/icons/service.svg"
import servicesFilled from "../assets/icons/filled/service-filled.svg"

import plusIcon from "../assets/icons/plus-hex-icon.svg"
import plusGif from "../assets/icons/animated/plus.gif"

import NavBar from './navBar/navBar'

import "./mainLayout.scss"
import { Button, Modal } from 'antd'
import CreateModalSpec from '../shared/createModalSpec/createModalSpec'

const userRole = localStorage.getItem('userRole');


const NavigationItem = ({ centered, icon, filledIcon, navigation, navigate, label, onClick }: any) => {

    const location = useLocation();
    const route: any = location.pathname;

    return (
        <div className="nav-icons-box" onClick={() => (onClick ? onClick() : navigate(navigation))}>
            <img src={(centered ? icon : navigation === route ? filledIcon : icon)} width={centered ? 30 : 22} height={centered ? 30 : 22} alt="" />
            {!centered && <span>{label}</span>}
        </div>
    )
};

const MainLayout = () => {

    const isServiceProvider = userRole === 'serviceProvider'
    const isServiceSeeker = userRole === 'serviceSeeker'

    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState<any>(false);
    const [visible, setVisible] = useState(false);

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

    return (
        <>
            {<NavBar activeRole={userRole} />}

            <div style={{ paddingBottom: `${isMobile ? '60px' : '0px'}` }}>
                <Outlet />
            </div>
            {
                isMobile &&
                <>
                    <div className='bottom-nav-bar'>
                        <NavigationItem icon={homeIcon} filledIcon={homeIconFilled} navigation={isServiceSeeker ? '/home' : isServiceProvider ? '/service-provider' : '/'} navigate={navigate} label='Home' />
                        <NavigationItem icon={bookings} filledIcon={bookingsFilled} navigation={isServiceSeeker ? '/bookings' : isServiceProvider ? '/service-provider/bookings' : '/'} navigate={navigate} label='Bookings' />
                        <NavigationItem icon={plusIcon} centered navigate={setVisible} label='' onClick={() => setVisible(true)} />
                        <NavigationItem icon={services} filledIcon={servicesFilled} navigation={isServiceSeeker ? '/services' : isServiceProvider ? '/rand' : '/'} navigate={navigate} label='Services' />
                        <NavigationItem icon={chat} filledIcon={chatFilled} navigation={isServiceSeeker ? '/chat' : isServiceProvider ? '/chat' : '/'} navigate={navigate} label='Chat' />
                    </div>
                </>
            }
            {
                isServiceSeeker &&
                <>
                    {!isMobile && <Button className='main-floating-button' onClick={() => setVisible(true)}><img src={plusGif} width={25} height={25} alt="" />Create</Button>}
                </>
            }

            <CreateModalSpec visible={visible} setVisible={setVisible} />
        </>
    )
}




export default MainLayout