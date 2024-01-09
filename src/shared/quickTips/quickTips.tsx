import React from 'react'
import './quickTips.scss'
import lightBlub from '../../assets/icons/lightbulb-on.svg'
const QuickTips = () => {
  return (
    <div className='quick-tips-wrapper'>
        <h2 className='head'><img src={lightBlub} width={20} height={20} alt="" />Quick Tips</h2>
        <p>Complete your profile by highlighting skills and certifications. Clearly define your services using simple language. Specify working hours accurately for smoother scheduling. Respond quickly to messages and service requests to build trust. Clearly outline your pricing structure to avoid misunderstandings. Use professional images showcasing your work or services.</p>
    </div>
  )
}

export default QuickTips