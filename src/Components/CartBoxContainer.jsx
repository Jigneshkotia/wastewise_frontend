import React, { useState } from "react";
import "../Styles/components/CartBoxContainer.css";
import ItemCartCard from "./ItemCartCard";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const CartBoxContainer = () => {

  const navigate = useNavigate();

  const itemArray = useSelector((state) => state.cart.value);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    remark: "",
    state: "",
    pinCode: "",
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
      garbageTypes: itemArray.map(item => item.name).join(", "),
    };

    emailjs
      .send(
        "wastewise@serviceidemail", 
        "wastewise@templateid", 
        emailData, 
        "YVuK8o3RGXXFPJHk3"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        navigate('/submit');

        setTimeout(() => {
          window.location.reload(); // Force reload after navigation
        }, 100);
        
        setShowForm(false); 
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          date: "",
          remark: "",
          state: "",
          pinCode: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an error submitting your request. Please try again.");
      });
  };

  return (
    <>
      {showForm ? (
        <div className="cartboxcontainer">
          <div className="cartboxheading">Pickup Request</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="formdiv1">
              <div className="entrydiv namediv">
                <label htmlFor="name">Name</label>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="entrydiv phonediv">
                <label htmlFor="phone">Phone Number</label>
                <input
                  placeholder="Enter Your Phone no."
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formdiv2 ">
              <div className="entrydiv addressdiv">
                <label htmlFor="address">Address</label>
                <input
                  placeholder="Enter Your Address"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="entrydiv statediv">
  <label htmlFor="state">State</label>
  <select
    id="state"
    name="state"
    value={formData.state}
    onChange={handleChange}
  >
    <option value="">Select a State</option>
    <option value="Delhi">Delhi</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
  </select>
</div>
            </div>

            <div className="formdiv3">
              <div className="entrydiv pincodediv">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  placeholder="Enter PIN Code"
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                />
              </div>

              <div className="entrydiv emaildiv">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="entrydiv datediv">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Choose Date"
              />
            </div>

            <div className="entrydiv remarkdiv">
              <label htmlFor="remark">Remark</label>
              <textarea
                placeholder="Message"
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
              />
            </div>

            <div className="pickup-btn-cover">
              <button className="pickup-btn" type="submit" onClick={handleSubmit}>
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
