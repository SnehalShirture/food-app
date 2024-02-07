import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { UserData } = useSelector((state) => state.user);
  return (
    <div>
      <h2>First_Name:{UserData.CustFirstName}</h2>
      <h2>Last_Name:{UserData.CustLastName}</h2>
      <h2>Customer_Adrees:-:{UserData.CustAdd}</h2>
      <h2>Customer_Contact No:{UserData.CustMobNo}</h2>
      <h2>Customer_City:{UserData.CustCity}</h2>
      <h2>Customer_Email:{UserData.CustEmail}</h2>
      <h2>Customer_Password:{UserData.CustPassword}</h2>
    </div>
  );
}

export default Profile;
