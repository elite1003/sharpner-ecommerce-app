import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" color="white">
            Home
          </Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav className="mx-auto">
          <Button variant="primary" onClick={props.onHideCart}>
            Cart
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
