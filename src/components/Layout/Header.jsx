import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import AuthContext from "../../store/auth-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const { items } = cartCtx;
  const totalQuantity = items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
        </Nav>
        <Nav className="mx-auto ">
          <NavLink to="/store">
            <h3>Store</h3>
          </NavLink>
        </Nav>
        <Nav className="mx-auto ">
          <NavLink to="/about">
            <h3>About</h3>
          </NavLink>
        </Nav>
        <Nav className="mx-auto ">
          <NavLink to="/contact-us">
            <h3>Contact Us</h3>
          </NavLink>
        </Nav>
        {!authCtx.isLoggedIn && (
          <Nav className="mx-auto ">
            <NavLink to="/auth">
              <h3>Login</h3>
            </NavLink>
          </Nav>
        )}
        {authCtx.isLoggedIn && (
          <>
            <Nav className="mx-auto ">
              <NavLink to="/profile">
                <h3>Profile</h3>
              </NavLink>
            </Nav>
            <Nav className="mx-auto ">
              <Button
                onClick={() => {
                  authCtx.logout();
                }}
              >
                Logout
              </Button>
            </Nav>
          </>
        )}
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
