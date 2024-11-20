import React from 'react'
import "../Notification/Notification.css"
import img1 from "../../assets/Following/img-1.jpg"
import img2 from "../../assets/Following/img-2.jpg"
import img3 from "../../assets/Following/img-3.jpg"
import img4 from "../../assets/Following/img-5.jpg"
import {AiOutlineHome} from "react-icons/ai"
import ProfileImg from "../../assets/profile.jpg"
import { Link } from 'react-router-dom'

const Notification = () => {
  
  return (
    <div className="noti-overall">
      <div className='nav-section'>
        <Link to="/home" style={{textDecoration:"none"}} className='noti-div'><AiOutlineHome className='noti-Home-Icon'/></Link>
        <Link to="/profile" style={{textDecoration:"none"}}><img src={ProfileImg} alt="" /></Link>
      </div>

    <div className="notification-group">
      <h1>notification</h1>
      <div className="notification-section">
      </div>
    </div>
    </div>
  )
}

export default Notification