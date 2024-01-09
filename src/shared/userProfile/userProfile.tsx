import React from 'react'
import './userProfile.scss'

const UserProfile = ({src, title}:any) => {
  return (
    <div style={{display:"flex", alignItems:"center", gap:'10px'}}>
        <div style={{
            backgroundColor:"#e7e7e9",
            width:"35px",
            height:"35px",
            borderRadius:"8px",
            overflow:"hidden"
        }}>
            <img src={src} alt="" style={{width:"100%", height:"100%"}} />
        </div>
        <h4>{title}</h4>
    </div>
  )
}

export default UserProfile