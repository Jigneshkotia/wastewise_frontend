import React from 'react'
import Navbar from '../Components/Navbar'
import ContactBox from '../Components/ContactBox'

const ContactPage = () => {
  return <>
    <Navbar />
    {/* <div style={{fontSize: "5rem"}}>this page is under development !!</div> */}
    <div style={{display: "flex", justifyContent:"center", alignItems: "center", height:"70vh"}}>
    <ContactBox />
    </div>
    </>
}

export default ContactPage