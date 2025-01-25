import React from 'react'
import "../Styles/components/ContactBox.css"

const ContactBox = () => {
  return <>
    <div className="contactbox" >
        <div className="contactboxheading">Contact Us</div>
        <div className="contactboxsubheading">Don't Hesitate To Ask Anything About Us</div>
        <div className="contactinnerbox">
            <div className="subBox">
                <div className="subBoxLeft">🌏</div>
                <div className="subBoxRight">www.wastewise.live</div>
            </div>
            <div className="subBox">
                <div className="subBoxLeft">📞</div>
                <div className="subBoxRight">+91 9667714412</div> 
            </div>
            <div className="subBox">
                <div className="subBoxLeft">📧</div>
                <div className="subBoxRight">kotiajignesh8@gmail.com</div>
            </div>
            <div className="subBox">
                <div className="subBoxLeft">🏢</div>
                <div className="subBoxRight">P and T colony, Civil Lines</div>
            </div>
        </div>
    </div>
    </>
}

export default ContactBox