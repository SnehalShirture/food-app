import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const { UserData } = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <Card.Body className="profile-card-body">
          <div className="profile-header">
            <h1>User Profile</h1>
          </div>
          <div className="profile-details">
            <h2>
              <span className="profile-label">First Name:</span>{" "}
              {UserData.CustFirstName}
            </h2>
            <h2>
              <span className="profile-label">Last Name:</span>{" "}
              {UserData.CustLastName}
            </h2>
            <h2>
              <span className="profile-label">Address:</span>{" "}
              {UserData.CustAdd}
            </h2>
            <h2>
              <span className="profile-label">Contact No:</span>{" "}
              {UserData.CustMobNo}
            </h2>
            <h2>
              <span className="profile-label">City:</span> {UserData.CustCity}
            </h2>
            <h2>
              <span className="profile-label">Email:</span>{" "}
              {UserData.CustEmail}
            </h2>
            <h2>
              <span className="profile-label">Password:</span>{" "}
              {UserData.CustPassword}
            </h2>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
