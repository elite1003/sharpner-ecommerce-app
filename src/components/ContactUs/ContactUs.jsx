import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const complainDetail = {
      name: event.target.formBasicName.value,
      email: event.target.formBasicEmail.value,
      message: event.target.formBasicMessage.value,
    };
    const response = await fetch(
      "https://swapi-movie-app-default-rtdb.asia-southeast1.firebasedatabase.app/complain.json",
      {
        method: "POST",
        body: JSON.stringify(complainDetail),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("successfully logged complain");
    }
  };

  return (
    <Container className="mb-5 ">
      <h1 className="text-center">Contact Us</h1>
      <Form onSubmit={handleSubmit} className="card p-5 w-50 m-auto shadow-lg">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
