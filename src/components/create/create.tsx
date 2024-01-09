import React, { useEffect, useState } from 'react'
import "./create.scss"
import createIcon from "../../assets/icons/magic-wand.svg"
import CreateJobPost from './createJobPost/createJobPost'
import { useLocation } from 'react-router-dom'
import CreateOffer from './createOffer/createOffer'
import CreateAd from './createAd/createAd'

const Create = () => {

  const location = useLocation();
  const route = location.pathname;
  const routeArray = route.split('/');

  const [bordersColors, setBordersColors] = useState('')
  const [backgroundColors, setBackgroundColors] = useState('')
  const [iconBackgrounds, setIconBackgrounds] = useState('')
  const [titleText, setTitleText] = useState('')

  
  useEffect(() => {
    {(() => {
    switch (routeArray[2]) {
      case "create-a-job-post":
        setTitleText('Create your job post'); setBordersColors('1px solid #404eed'); setBackgroundColors("#404eed0d"); setIconBackgrounds("#404eed0d")
        break
      case "create-an-offer":
        setTitleText("Create an offer"); setBordersColors('1px solid #27ae60'); setBackgroundColors("#27ae602b"); setIconBackgrounds("#27ae602b")
        break
      case "create-an-ad":
        setTitleText('Create an AD'); setBordersColors('1px solid #f1c40f'); setBackgroundColors("#f1c40f26"); setIconBackgrounds("#f1c40f26")
        break
      default:
        return "";
    }
  })()}
  }, [route])
  


  

  return (
    <div className="create-page-main">
      <div className="inner-wrapper-set-create">
        <div className="create-header-bx" style={{border:`${bordersColors}`, backgroundColor:`${backgroundColors}` }}>
          <div className="inner-icon" style={{backgroundColor:`${iconBackgrounds}`}}>
            <img src={createIcon} width={20} height={20} alt="" />
          </div>
          <div className='d-flex flex-column align-center' style={{ gap: '5px' }}>
            <h3 className='fs-16 fw-600'>
              {titleText && <span>{titleText}</span>}
            </h3>
            <p className='fs-14 fw-500 text-center' style={{ width: "80%", margin: "0 auto", color: '#8b8b8b' }}>Create your job offer so you can reach professional service providers</p>
          </div>
        </div>

        <div className="area-form">
          {(() => {
            switch (routeArray[2]) {
              case "create-a-job-post":
                return <CreateJobPost />;
              case "create-an-offer":
                return <CreateOffer />;
              case "create-an-ad":
                return <CreateAd />;
              default:
                return null;
            }
          })()}
        </div>

      </div>
    </div >
  )
}

export default Create 