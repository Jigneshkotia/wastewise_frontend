import React from "react";

const LiveTracking = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0"}}>
      <div style={{ width: "90%", maxWidth: "600px", padding: "20px", borderRadius: "10px", backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        <h2 style={{ color: "#333" }}>Live Tracking System</h2>
        <div style={{ width: "100%", height: "300px", borderRadius: "5px", overflow: "hidden" }}>
          <img 
            src="/images/maps_placeholder.png" 
            alt="Map Placeholder" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p style={{ marginTop: "15px", color: "#555" }}>Tracking will be displayed here...</p>
      </div>
    </div>
  );
};

export default LiveTracking;