import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const totalQuantity = items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
          <Nav.Link href="/">
            <h3>Home</h3>
          </Nav.Link>
          <Nav.Link href="/store">
            <h3>Store</h3>
          </Nav.Link>
          <Nav.Link href="/about">
            <h3>About</h3>
          </Nav.Link>
          <Nav.Link href="/contact-us">
            <h3>Contact</h3>
          </Nav.Link>
        </Nav>
        <Nav className="mx-auto">
          <Button variant="primary" onClick={props.onHideCart}>
            Cart {totalQuantity}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
