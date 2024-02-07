import axios from "axios";
import React, { useState } from "react";
import { Row, Container, Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";

function MyLoginForm() {
  const dispatcher = useDispatch();
  const [CustEmail, setCustomeremail] = useState("");
  const [CustPassword, setCustomerpassword] = useState("");
  const navi = useNavigate();

  const addlogin = () => {
    const logindata = {
      CustEmail: CustEmail,
      CustPassword: CustPassword,
    };

    axios
      .post("http://localhost:5000/api/doLogin", logindata)
      .then((result) => {
        console.log("DATA", result.data);

        if (result.data.success) {
          dispatcher(login(result.data.data));
          alert("Login Succesfully");
          navi("/");
        } else {
          alert("Login Fail");
        }
        //window .location .reload(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <h2>||Login Form ||</h2>
          <Form>
            <Row>
              <Form.Group>
                <Form.Label>Customer Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter User Email"
                  onChange={(e) => setCustomeremail(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>Customer Password</Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="Enter User Password"
                  onChange={(e) => setCustomerpassword(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group>
              <Row>
                <Button onClick={() => addlogin()}>Login</Button>
              </Row>
            </Form.Group>
          </Form>
        </Row>

        <Row>
          <Col>
            <h3>{CustEmail}</h3>
            <h3>{CustPassword}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyLoginForm;
