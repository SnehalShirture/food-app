import React, { useState } from "react";
import { Row, Container, Form, Button } from "react-bootstrap";
import {MyRegistrationForm} from "react-router-dom"

function MyRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Container>
        <Row>
        <h2> || My Registration Form ||</h2>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>User Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter User Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>User Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter User Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default MyRegistrationForm;
