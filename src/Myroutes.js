import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRegistrationForm from "./Components/MyRegistrationFrom";
import MyNavbar from "./MyNavbar";
import Home from "./Components/Home";
import FoodItems from "./Components/FoodItems";
import MyLoginForm from "./Components/MyLoginForm";
import MyOffCan from "./Components/MyOffCan";


function Myroutes() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar/>
        <MyOffCan/>
        <Routes>
          <Route path="/register" element={<MyRegistrationForm />}></Route>
          <Route path="/login" element={<MyLoginForm />}></Route>
          <Route path="/fooditems" element={<FoodItems />}></Route>
          <Route path="/" element={<Home />}></Route>
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Myroutes;
