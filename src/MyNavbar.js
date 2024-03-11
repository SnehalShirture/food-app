import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function MyNavbar() {
  const { ItemCount } = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar
        collapseOnSelect
        variant="dark"
        bg="dark"
        expand="lg"
        className="navbar-custom"
      >
        <Navbar.Brand className="Brand">
        Karma Kitchen
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="responsive-nav-bar" />
        <Navbar.Collapse id="responsive-nav-bar">
          <Nav className="me-auto">
            <Nav.Link className="navbar-custom">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/fooditems" className="nav-link">
                Food Items
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/MyOrders" className="nav-link">
                My Orders
              </Link>
            </Nav.Link>
            <Nav.Link className="navbar-custom">
              <Link to="/orderdetails" className="nav-link">
                Order Details
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/cart" className="nav-link">
                Cart ({ItemCount})
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/register" className="nav-link">
                Registration
              </Link>
            </Nav.Link>

            <Nav.Link className="navbar-custom">
              <Link to="/orderlist" className="nav-link">
                Order List
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
