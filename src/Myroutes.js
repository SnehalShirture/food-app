import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRegistrationForm from "./Components/MyRegistrationFrom";
import Profile from "./Components/Profile";
import MyNavbar from "./MyNavbar";
import Home from "./Components/Home";
import FoodItems from "./Components/FoodItems";
import MyLoginForm from "./Components/MyLoginForm";
import MyOffCan from "./Components/MyOffCan";
import Cart from "./Components/Cart"
import Orders from"./Components/Orders"




function Myroutes() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <MyOffCan />
        <Routes>
          <Route path="/register" element={<MyRegistrationForm />}></Route>
          <Route path="/login" element={<MyLoginForm />}></Route>
          <Route path="/fooditems" element={<FoodItems />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/MyOrders" element={<Orders />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Myroutes;
