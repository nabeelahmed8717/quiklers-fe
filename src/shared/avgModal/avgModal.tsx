import React, { useState } from 'react'
import './avgModal.scss'
import { Button, Modal } from 'antd'
import jobSeekerGif from '../../assets/animations/seeker.gif'
import serviceProviderGif from '../../assets/animations/service-provider.gif'
import collaboratorGif from '../../assets/animations/collaborator.gif'
import { useNavigate } from 'react-router-dom'

const AvgModal = ({ isOpenModal, setIsOpenModal, onSubmit, isAvg, contentsSwitchModal, setContentsSwitchModal }: any) => {
    const navigate = useNavigate()
    const [serveLoadingCloned, setServeLoadingCloned] = useState(false)
    const titleSwitch: any = {
        serviceSeeker: 'Switch to "Service Seeker" Dashboard',
        serviceProvider: 'Switch to "Service Provider" Dashboard',
        collaborator: 'Switch to "Collaborator" Dashboard',
    }
    const descriptionSwitch: any = {
        serviceSeeker: 'Discover the Service Seeker Dashboard – your go-to hub for seamless service exploration. This user-friendly platform empowers you to effortlessly find, connect, and engage with service providers while gaining valuable insights into your interactions.',
        serviceProvider: 'your central hub for streamlined service management. This intuitive platform empowers providers to optimize operations, enhance customer interactions, and gain valuable business insights.',
        collaborator: 'Step into the Collaborator Dashboard – your command center for effective collaboration. This user-friendly platform empowers you to optimize teamwork, enhance communication, and gain valuable insights into your collaborative efforts',
    }
    const imageSwitch: any = {
        serviceSeeker: jobSeekerGif,
        serviceProvider: serviceProviderGif,
        collaborator: collaboratorGif,
    }
    const clickedSwitch: any = {
        serviceSeeker: () => {setServeLoadingCloned(true); localStorage.setItem('userRole', 'serviceSeeker'); navigate('./home'); window.location.reload() },
        serviceProvider: () => {setServeLoadingCloned(true); localStorage.setItem('userRole', 'serviceProvider'); navigate('./service-provider'); window.location.reload() },
        collaborator: () => {setServeLoadingCloned(true); localStorage.setItem('userRole', 'serviceCollaborator'); navigate('./home'); window.location.reload() },
    }

    return (
        <Modal rootClassName='avg-modal-main' open={isOpenModal} footer={false} onCancel={() => { { setIsOpenModal(false); setContentsSwitchModal({}) } }}>

            {isAvg ?
                <>
                    <div className="anm-wrapper">
                        <img src={imageSwitch[contentsSwitchModal?.type]} style={{ width: "50%" }} />
                        <h2 style={{ marginTop: "20px" }}>{titleSwitch[contentsSwitchModal?.type]}</h2>
                        <p className='fs-12 dull-color' style={{ marginTop: "10px", width: "80%", textAlign: "center" }}>{descriptionSwitch[contentsSwitchModal?.type]}</p>
                        <div style={{ display: "flex", gap: "10px", marginTop: "20px", marginBottom: "20px" }}>
                            <Button onClick={() => { { setIsOpenModal(false); setContentsSwitchModal({}) } }} className='close-btn'>Close</Button>
                            <Button onClick={clickedSwitch[contentsSwitchModal?.type]}  loading={serveLoadingCloned}>Navigate</Button>
                        </div>
                    </div>
                </>
                :
                <>s</>
            }
        </Modal>
    )
}

export default AvgModal