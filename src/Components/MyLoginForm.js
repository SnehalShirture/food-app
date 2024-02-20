import axios from "axios";
import React, { useState } from "react";
import { Row, Container, Form, Button, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import loginimg from "../Images/Login.jpg";
import "./Login.css";
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
    <>
      <Container fluid className="login">
        <div className="form">
          <Row>
            <h2>Login Form</h2>
            <Form>
              <Row>
                <Form.Group className="custlogin">
                  <Form.Label>Customer Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter User Email"
                    onChange={(e) => setCustomeremail(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="custlogin"> 
                  <Form.Label>Customer Password</Form.Label>
                  <Form.Control
                    type="Password"
                    placeholder="Enter User Password"
                    onChange={(e) => setCustomerpassword(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
              <Form.Group className="button">
                <Button onClick={() => addlogin()}>Login</Button>
              </Form.Group>
              </Row>
            </Form>
          </Row>
        </div>

        <div className="LoginImage">
          <Image className="image" src={loginimg} />
        </div>
      </Container>
    </>
  );
  
}

export default MyLoginForm;
