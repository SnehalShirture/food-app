import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { orderid } = useParams();
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const ordData = {
      orderid: orderid,
    };

    axios
      .post("http://localhost:5000/api/getorderById", ordData)
      .then((result) => {
        setOrderData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});

  const orderstatus =()=>{
    const ordered ={
      oid:orderid,
      OrderStatus:"Cancel"
    }
    axios
    .post("http://localhost:5000/api/updateOrderStatus", ordered)
    .then((result) => {
      console.log('Data',result)
      window.location.reload(false)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <div>
      OrderDetails
      <h3>{orderid}</h3>
      <Container>
        <Row>
          <h3>
            <b>Customer Details</b>
          </h3>
          <h4>{orderData?.CustId?.CustFirstName}</h4>
          <h4>{orderData?.CustId?.CustMobNo}</h4>
        </Row>

        <Row>
          <h3>Order Items </h3>
          {orderData?.OrderItems?.map((item) => {
            return (
              <Col>
                <Card>
                  <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${item.FoodId.foodimg}`}
                  ></Card.Img>

                  <Card.Text>{item.FoodId.foodname}</Card.Text>
                  <Card.Text>{item.Qty}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Button onClick={() => orderstatus()}>
            Cancel
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetails;
