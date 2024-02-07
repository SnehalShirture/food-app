import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function MyNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Navbar.Brand>MyfoodCourt</Navbar.Brand>
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
            <Link to="/cart">Cart </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/login">Login </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/register">Register </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
