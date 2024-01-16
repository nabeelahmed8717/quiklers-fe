import React, { useEffect, useState } from 'react'
import "./chat.scss"
import { Col, Row } from 'antd'
import ChatContacts from './chatContacts/chatContacts'
import ChatArea from './chatArea/chatArea'
import { useAppSelector } from '../../redux/store'

const Chat = () => {

  const isMobileView = useAppSelector((state) => state.globalSlice.isMobileView);

  const [catchedChatData, setCatchedChatData] = useState({})

  const [isShowContacts, setIsShowContacts] = useState(true)
  const [isShowChat, setIsShowChat] = useState(false)

  useEffect(() => {
    const handleBack = () => {
      setIsShowChat(false)
      setIsShowContacts(true)
    };

    window.addEventListener('popstate', handleBack);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleBack);
    };
  }, []);

  return (
    <div className="main-chat-wrapper">
     {!isMobileView && <div className="chat-header">
        <h2 className="fs-24 fw-600">Chat</h2>
        <p className="fs-16 light-grey">Chat with connections in your contacts</p>
      </div>}
      <div className="chat-inner-wrapper">
       {!isMobileView &&
        <>
         <Row gutter={30}>
          <Col xs={24} sm={24} md={8} lg={6} >
            <ChatContacts setCatchedChatData={setCatchedChatData}/>
          </Col>
          <Col xs={24} sm={24} md={16} lg={18} >
            <ChatArea  catchedChatData={catchedChatData}/>
          </Col>
        </Row>
        </>
       }
       {/* For Responsive  */}
       {
        isMobileView && 
        <>
        {isShowContacts && <ChatContacts isMobile={isMobileView} setCatchedChatData={setCatchedChatData} catchedChatData={catchedChatData} setIsShowContacts={setIsShowContacts} setIsShowChat={setIsShowChat}/>}
        {isShowChat && <ChatArea isMobile={isMobileView} catchedChatData={catchedChatData} setIsShowContacts={setIsShowContacts} setIsShowChat={setIsShowChat}/>}
        </>
       }
      </div>
    </div>
  )
}

export default Chat