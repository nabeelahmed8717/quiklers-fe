import React, { useEffect, useState } from 'react'
import './serviceProviderDashboard.scss'
import { Button, Calendar, CalendarProps, Col, Row, Switch, theme } from 'antd'
import userIcon from '../../../assets/raw/driver.png'
import verifiedIcon from '../../../assets/icons/verified-colored.svg'
import badgeIcon from '../../../assets/images/star-medal.png'
import serviceStcIcon from '../../../assets/images/rocket.png'
import commentIcon from '../../../assets/icons/comment.svg'
import arrowDownIcon from '../../../assets/icons/arrow-down-small.svg'
import calenderIcon from '../../../assets/icons/calendar-day.svg'
import PendingBookings from '../bookings/bookingsTabs/pendingBookings'
import Table, { ColumnsType } from 'antd/es/table'
import { Dayjs } from 'dayjs'
import { useAppSelector } from '../../../redux/store'

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const ServiceProviderDashboard = () => {

  const isMobileView = useAppSelector((state) => state.globalSlice.isMobileView);

  const { token } = theme.useToken();

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const columns: ColumnsType<any> = [
    {
      title: 'Seller Name',
      dataIndex: 'sellerName',
      key: 'sellerName',
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
      key: 'serviceType',
    },
    {
      title: 'Booking Date',
      dataIndex: 'bookingDate',
      key: 'bookingDate',
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
    },

  ];

  const bookingsData: any[] = [
    {
      key: '1',
      sellerName: 'John Brown',
      serviceTag: 'House Cleaning',
      serviceType: 'Conditional',
      bookingDate: '01-05-2023',
      paymentStatus: 'Paid',
    },
    {
      key: '2',
      sellerName: 'Sara Andrew',
      serviceTag: 'IT Consultant',
      serviceType: 'Un Conditional',
      bookingDate: '16-05-2023',
      paymentStatus: 'Un Paid',
    },
    {
      key: '3',
      sellerName: 'Sara Andrew',
      serviceTag: 'IT Consultant',
      serviceType: 'Un Conditional',
      bookingDate: '16-05-2023',
      paymentStatus: 'Un Paid',
    },
  ];


  useEffect(() => {
    if(isMobileView){
      setIsProfileOpen(false)
    }else{
      setIsProfileOpen(true)
    }
  }, [isMobileView])
  

  return (
    <div className='service-provider-main-dashboard'>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={8} lg={6}>
         {isMobileView && <div className="profile-overview" style={{borderRadius:`${isProfileOpen ? '20px 20px 0 0' : '20px' }`}} onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <p className='fs-14 fw-600'>Profile Overview</p>
            <img src={arrowDownIcon} style={{transform:`${isProfileOpen ? "rotate(180deg)" : 'rotate(0deg)'}`, transition:"0.3s"}} width={30} height={20} alt="" />
          </div>}
          {isProfileOpen &&
            <div className={`profile-card-main ${isMobileView ? "lower-to-high-anm-prf" : ""}`} style={{borderRadius:`${!isMobileView && isProfileOpen ? '0px 0px 20 20' : '0px' }`}}>
              <div className="user-details">
                <div className="user-image-bx"><img src={userIcon} alt="" /></div>
                <div className="user-title">
                  <h2><img src={verifiedIcon} width={20} height={20} alt="" /> Jhon Doe</h2>
                  <p className='fs-12 fw-500 dull-color' style={{ marginTop: "5px" }} >Level : 2</p>
                </div>
              </div>
              <br />
              <div className="service-badge">
                <p style={{ marginBottom: "5px" }}>Current Earned Badge</p>
                <img src={badgeIcon} width={40} alt="" />
              </div>
              <br />
              <div className="service-info">
                <p style={{ marginBottom: "5px" }}>Service Info</p>
                <div className='inset-service-info'>
                  <div className='inset-s-i'>
                    <p>Today</p>
                    <h3>3</h3>
                  </div>
                  <div className='inset-s-i'>
                    <p>Declined</p>
                    <h3>1</h3>
                  </div>
                  <div className='inset-s-i'>
                    <p>Total Done</p>
                    <h3>47</h3>
                  </div>
                </div>
              </div>
              <br />
              <div className="address-info">
                <p style={{ marginBottom: "5px" }}>Address</p>
                <p className='fs-12 ad dull-color'>Street 7, 16 Ave, North Battleford, SK S9A 1A4, Canada</p>
              </div>
              <div className="wrapper-update-btn">
                <Button className='update-btn'>Update Information</Button>
              </div>
            </div>
          }
          <div className="availability-badge">
            <p className='fs-14 fw-600'>Avalibility</p>
            <Switch rootClassName='availability-check' defaultChecked />
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Row gutter={20}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div className="service-overview-card">
                <div>
                  <p className='label'>My Services</p>
                  <h2 className='ser-tile' style={{ display: "flex", gap: "4px", color: "#ffffffe0" }}>2 <p className=''>Active</p></h2>
                  <Button className='manage-ser-btn'>Manage Services</Button>
                </div>
                <img src={serviceStcIcon} className='ser-stc-img' alt="" />
              </div>
              <div className="mis-cards-flex">
                <Row gutter={[20,20]}>
                  <Col xs={12} sm={12} md={8} lg={8}>
                    <div className="mis-cards-bx">
                      <p>Service Viewers</p>
                      <h2>2</h2>
                    </div></Col>
                  <Col xs={12} sm={12} md={8} lg={8}>
                    <div className="mis-cards-bx">
                      <p>Service Ratings</p>
                      <h2>4.5</h2>
                    </div></Col>
                  <Col xs={24} sm={24} md={8} lg={8}>
                    <div className="mis-cards-bx">
                      <p>Pending Tasks</p>
                      <h2>2</h2>
                    </div></Col>
                </Row>
              </div>
              <div className="bookings-table">
                <Table rootClassName='bookings-dashboard-table-styles' columns={columns} dataSource={bookingsData} scroll={{ x: "max-content" }} />
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="recent-messages">
                <p><img src={commentIcon} width={18} alt="" /> Recent Messages / Queries</p>
              </div>
              <div className='dashboard-calender'>
                <p><img src={calenderIcon} width={18} alt="" /> Calender</p>
                <Calendar mode='month' fullscreen={false} onPanelChange={onPanelChange} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ServiceProviderDashboard