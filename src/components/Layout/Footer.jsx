import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const styleH1 = {
    textAlign: "center",
    fontSize: "100px",
  };
  const styleFooter = {
    backgroundColor: "skyblue",
  };
  return (
    <footer className="footer" style={styleFooter}>
      <Container>
        <Row>
          <Col md={8}>
            <h1 style={styleH1}>The Generics</h1>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <a href="www.facebook.com">Facebook</a>
            <br />
            <a href="www.twitter.com">Twitter</a>
            <br />
            <a href="www.instagram.com">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
