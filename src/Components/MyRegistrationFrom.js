import React, { useState } from "react";
import { Container, Form, Row , Button } from "react-bootstrap";
import axios from "axios";

function MyRegistrationFrom() {
  const [CustFirstName, setFirstName] = useState("");
  const [CustLastName, setLAstName] = useState("");
  const [CustAdd, setCustAdd] = useState("");
  const [CustMobNo, setCustMobNo] = useState("");
  const [CustCity, setCustCity] = useState("");
  const [CustEmail, setEmail] = useState("");
  const [CustPassword, setCustPassword] = useState("");

  const submitForm = () => {
    const CustData = {
      CustFirstName: CustFirstName,
      CustLastName: CustLastName,
      CustAdd: CustAdd,
      CustMobNo: Number(CustMobNo),
      CustCity: CustCity,
      CustEmail: CustEmail,
      CustPassword: CustPassword,
    };

    axios
      .post("http://localhost:5000/api/addCust", CustData)
      .then((result) => {
        alert("Customer Added");
        console.log("DATA", result.data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <h2>!!My Registration Form !!</h2>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer First Name </Form.Label>
              <Form.Control
                text="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer Last Name </Form.Label>
              <Form.Control
                text="text"
                placeholder="Last Name"
                onChange={(e) => setLAstName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer Address </Form.Label>
              <Form.Control
                text="text"
                placeholder="Address"
                onChange={(e) => setCustAdd(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer Mobile Number </Form.Label>
              <Form.Control
                text="text"
                placeholder="Mobile Number "
                onChange={(e) => setCustMobNo(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer City </Form.Label>
              <Form.Control
                text="text"
                placeholder="City"
                onChange={(e) => setCustCity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer Email </Form.Label>
              <Form.Control
                text="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer Password </Form.Label>
              <Form.Control
                text="Password"
                placeholder="Password"
                onChange={(e) => setCustPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button onClick={() => submitForm()}>Add Customer</Button>
        </Row>
      </Container>
    </div>
  );
}

export default MyRegistrationFrom;
