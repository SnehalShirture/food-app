import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Navbar.Brand>MyfoodCourt</Navbar.Brand>
        <Navbar.Toggle aria-control="responsive-nav-bar"> </Navbar.Toggle>
        <Navbar.Collapse id="responsive-nav-bar">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>

            <Nav.Link>Menu</Nav.Link>

            <Nav.Link>Profile</Nav.Link>

            <Nav.Link>MyOrders</Nav.Link>

            <Nav.Link>Cart</Nav.Link>

            <Nav.Link>login</Nav.Link>

            <Nav.Link>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
