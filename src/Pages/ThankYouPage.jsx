import React from 'react'
import Navbar from '../Components/Navbar'
import "../Styles/pages/ThankYou.css"

const ThankYouPage = () => {
  return <>
    <Navbar />
    <div className='thankucomponent'>
      <div className="thankusubcomponent">
        <div className="thankusymbol">🥰</div>
        <div className="thanku">Thank You !!</div>
        <div className="thankutext">Our Team Will Contact You</div>
      </div>
    </div>
  </>
}

export default ThankYouPage