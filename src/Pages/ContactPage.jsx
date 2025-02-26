import React from "react";
import Navbar from "../Components/Navbar";
import ContactBox from "../Components/ContactBox";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "87vh",
          width: "100vw",
        }}
      >
        <ContactBox />
      </div>
    </>
  );
};

export default ContactPage;