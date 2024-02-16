import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


  

function MyNavbar() {
const { ItemCount  } = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Navbar.Brand>Rasoi Rhapsody</Navbar.Brand>
        <Navbar.Toggle aria-control="responsive-nav-bar"> </Navbar.Toggle>
        <Navbar.Collapse id="responsive-nav-bar">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/fooditems">FoodItems </Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/profile">Profile</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/MyOrders">My Orders</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/orderdetails">Order Details</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/cart">Cart {ItemCount}</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/login">Login </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/register">Registration </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/orderlist">Order List </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
