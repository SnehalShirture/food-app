import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderList = ({ orderStatus }) => {
  const [orderData, setOrderData] = useState([]);
  const { UserData } = useSelector((state) => state.user);
  const navi = useNavigate();


  const ordersda ={
    custid:UserData._id,
    OrderStatus:orderStatus
  }
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/getorderByCustomerId",ordersda)
      .then((result) => {
        setOrderData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>
    <Container className="order-details-container">
        <Row className="customer-details">
          {orderData.map((order) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  {/* <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${order.OrderItems[0].foodimg}`}
                  ></Card.Img> */}
                  <div className="content">
                    <Card.Title>{order.OrderTotal}</Card.Title>
                    <Card.Text>{order.OrderSize}</Card.Text>
                    <Card.Text>{order.OrderStatus}</Card.Text>
                    <Card.Text>{order.OrderDate}</Card.Text>
                  </div>

                  <Card.Footer>
                    <Button onClick={() => navi(`/orderdetails/${order._id}`)}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
  </div>;
};

export default OrderList;
