import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, clearCart, decrementQty, incrementQty } from "../reduxwork/CartSlice";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../Components/Cart.css";
import axios from "axios";

function Cart() {
  const { CartItems , CartTotalAmt  } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user);
  const dispatcher = useDispatch();
  dispatcher(calculateTotal())


  const addOrder = () => {
    const finalItems = [];
    CartItems.map((items) => {
      finalItems.push({
        FoodId:items._id,
        Qty:items.Qty,
      });
    });
    const orderData = {
      OrderTotal:0,
      OrderSize:CartItems.length,
      CustId:UserData._id,
      OrderItems:finalItems,
    };

    axios
      .post('http://localhost:5000/api/addOrder', orderData)
      .then((result) => {
        alert("Order Placed Successfully");
        console.log(result.data)
        dispatcher(clearCart());
      })
      .catch((err) => {
        console.log(err)
      });
       
  };
  return (
    <div>
      <Container>
        <Row>
          {CartItems.map((food) => {
            const iid = food._id;
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${food.foodimg}`}
                  ></Card.Img>
                  <div className="content">
                    <Card.Title>{food.foodname}</Card.Title>
                    <Card.Text>{food.foodcategory}</Card.Text>
                    <Card.Text>QTy:{food.Qty}</Card.Text>
                    <Card.Text>{food.foodprice}</Card.Text>
                  </div>

                  <Card.Footer className="cardfooter">
                    <Button onClick={() => dispatcher(incrementQty({ iid }))}>
                      +
                    </Button>
                    <h4>{food.Qty}</h4>
                    <Button onClick={() => dispatcher(decrementQty({ iid }))}>
                      -
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
         
           
          
        </Row>
        <Col><h4>
          Total: <i className="bi bi-7-square-fill"></i> {CartTotalAmt}
        </h4></Col>
        <Button onClick={() => addOrder()}>Placed Order</Button>
      </Container>
    </div>
  );
}

export default Cart;
