import React, { useState } from 'react';
import "../Styles/components/CartBoxContainer.css";
import ItemCartCard from './ItemCartCard';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';

const CartBoxContainer = () => {
  const itemArray = useSelector((state) => state.cart.value);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    remark: '',
    state: '',
    pinCode: '',
  });

  // Toggle form visibility
  const pickupRequestHandler = () => {
    setShowForm(!showForm);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Include a recipient's email address
    const emailData = {
      ...formData,
      recipient_email: 'lamyasamar13@gmail.com, raghavga0123@gmail.com', // Replace with the target email address
    };
  
    emailjs.send(
      'wastewise@serviceidemail', // Your email service ID
      'wastewise@templateid', // Your email template ID
      emailData, // Send form data, including recipient_email
      'YVuK8o3RGXXFPJHk3' // Your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Your pickup request has been submitted!');
      setShowForm(false); // Close the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        remark: '',
        state: '',
        pinCode: '',
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('There was an error submitting your request. Please try again.');
    });
  };




  return (
    <>
      {showForm ? (
        <div className="cartboxcontainer">
          <div className="cartboxheading">Pickup Request</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="remark">Remark:</label>
              <textarea
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="pinCode">Pin Code:</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>

            <div className="pickup-btn-cover">
              <button className="pickup-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="cartboxcontainer">
          <div className="cartboxheading">Your Cart</div>
          <div className="cartitemlist">
            {itemArray.map((item) => (
              <ItemCartCard
                key={item.name}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
          <div className="pickup-btn-cover">
            <button className="pickup-btn" onClick={pickupRequestHandler}>
              Pickup Request
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBoxContainer;