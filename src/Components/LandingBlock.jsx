import React from 'react'
import '../Styles/components/LandingBlock.css'
import { useNavigate } from "react-router-dom";

const LandingBlock = () => {

  const navigate = useNavigate();

  const goToPriceList = () => {
    navigate('/pricelist');
  }

  return <div className='landingblockpage'>
    <div className="back"></div>
    <div className="top">
      <div className="topleft">
        <div className="toplefttextfirst">Book a <span className='toplefttextfirstspan'>pickup</span></div>
        <div className="toplefttextsecond">Request<span className='toplefttextsecondspan'>.</span></div>
      </div>
      <div className="topright">
        <div className="toprighttext">Give your all scrap to Online Kabadiwala for Recycling Hassle free doorstep pickup service.</div>
        <button className='toprightbtn' onClick={goToPriceList}>Schedule a Pickup</button>
      </div>
    </div>
  </div>
}

export default LandingBlock