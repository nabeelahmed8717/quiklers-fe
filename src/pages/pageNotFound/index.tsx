import React from 'react'

import pageNotFoundAnm from '../../assets/animations/404-ser-s.gif'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const PageNotFoundPage = () => {
  const userRole = localStorage.getItem('userRole');
const isServiceProvider = userRole === 'serviceProvider'
const isServiceSeeker = userRole === 'serviceSeeker'

const navigate = useNavigate()

  return (
    <div style={{
        backgroundColor:"#fff",
        width: "100%",
        height: "100vh",
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop:"10vh"
    }}>
        <img src={pageNotFoundAnm} width={400} alt="" />
       <div>
       <h3>Page Not found</h3>
        <ul className='list-pg-nf'>
            <li>You don't have access to this page</li>
            <li>Page not found</li>
            <li>Check your network connection</li>
        </ul>
        <Button onClick={() => navigate('/')}>Go to main</Button>
       </div>
    </div>
  )
}

export default PageNotFoundPage