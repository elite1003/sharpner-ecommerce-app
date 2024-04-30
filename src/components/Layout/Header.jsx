import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom";
import AuthContext from "../../store/auth-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { items } = cartCtx;
  const totalQuantity = items.reduce((acc, item) => acc + item.amount, 0);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to="/" className="text-decoration-none text-white">
            <h3>Home</h3>
          </NavLink>
        </Nav>
        <div className="d-flex w-75 justify-content-end ">
          <Nav className="mx-3">
            <NavLink to="/store" className="text-decoration-none text-white">
              <h3>Store</h3>
            </NavLink>
          </Nav>
          <Nav className="mx-3">
            <NavLink to="/about" className="text-decoration-none text-white">
              <h3>About</h3>
            </NavLink>
          </Nav>
          <Nav className="mx-3">
            <NavLink
              to="/contact-us"
              className="text-decoration-none text-white"
            >
              <h3>ContactUs</h3>
            </NavLink>
          </Nav>
          {!authCtx.isLoggedIn && (
            <Nav className="mx-3">
              <NavLink to="/auth" className="text-decoration-none text-white">
                <h3>Login</h3>
              </NavLink>
            </Nav>
          )}
          {authCtx.isLoggedIn && (
            <>
              <Nav className="mx-3">
                <NavLink
                  to="/profile"
                  className="text-decoration-none text-white"
                >
                  <h3>Profile</h3>
                </NavLink>
              </Nav>
              <Nav className=" mx-3">
                <Button onClick={logoutHandler}>Logout</Button>
              </Nav>
              <Nav className="mx-3">
                <Button variant="primary" onClick={props.onHideCart}>
                  Cart {totalQuantity}
                </Button>
              </Nav>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
