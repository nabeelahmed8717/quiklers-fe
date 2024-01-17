import './myServices.scss'
import { Button, Col, Row, Select} from 'antd'
import settingsIcon from '../../../assets/icons/settings.svg'
import viewIcon from '../../../assets/icons/eye.svg'
import createIcon from '../../../assets/icons/create.svg'
import QuickTips from '../../../shared/quickTips/quickTips'
import { useNavigate } from 'react-router-dom'

const MyServices = () => {

  const navigate = useNavigate()


  return (
    <div className='my-services-page'>
      <div className='header-flex'>
        <div className="header-main-comp">
          <h2>My Services</h2>
          <p>Manage Your services</p>
        </div>
        <Button onClick={() => navigate('/service-provider/create-service')} className='common-rounded-g' style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={createIcon} style={{ filter: "invert(1) brightness(1)" }} width={20} height={20} alt="" /> Create Service</Button>
      </div>
      <div className="service-cards-flex">

        <Row>
          <Col lg={18}>
            <Row gutter={20}>
              <Col lg={12} md={12}>
                <div className="service-card">
                  <div className='header-ser'>
                    <h2 className='service-title'>Strategic Insights: Your Path to Success with Professional Consulting Services</h2>
                    <div className='header-options'>
                      <div className='header-sl-btns' ><img src={settingsIcon} width={20} height={22} alt="" /></div>
                      <div className='header-sl-btns'><img src={viewIcon} width={20} height={22} alt="" /></div>
                    </div>
                  </div>
                  <div className="service-status-insights">
                    <p>Service Status <span className='sc-ac'>Active</span></p>
                    <p>Total Views <span className='sc-ac'>20</span></p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <QuickTips />
          </Col>
        </Row>

      </div>
      
    </div>
  )
}

export default MyServices