import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  // const styleH1 = {
  //   textAlign: "center",
  //   fontSize: "3rem",
  // };
  // const styleFooter = {
  //   backgroundColor: "skyblue",
  // };
  return (
    <footer className="footer bg-dark text-white mt-auto">
      <Container>
        <Row>
          <Col md={8}>
            <h2>The Generics</h2>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-evenly"
          >
            <h5>Follow Us</h5>
            <a href="www.facebook.com" className="text-white">
              Facebook
            </a>
            <a href="www.twitter.com" className="text-white">
              Twitter
            </a>
            <a href="www.instagram.com" className="text-white">
              Instagram
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
