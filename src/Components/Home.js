import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css";
import { addItem, removeItem } from "../reduxwork/CartSlice"; // Import removeItem action
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [foodData, setFoodData] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)|| [];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallfood")
      .then((result) => {
        console.log("Data", result.data);
        setFoodData(result.data);
      })
      .catch((err) => {});
  }, []);

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <>
      <Container fluid className="home">
        <Row>
          {foodData.map((food) => {
            const isInCart = isItemInCart(food.id);

            return (
              <Col sm={12} md={6} lg={3} key={food.id}>
                <Card>
                  <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${food.foodimg}`}
                  ></Card.Img>
                  <div className="content">
                    <Card.Title>{food.foodname}</Card.Title>
                    <Card.Text>{food.foodcategory}</Card.Text>
                    <Card.Text>{food.foodtype}</Card.Text>
                    <Card.Text>{food.foodprice}</Card.Text>
                  </div>

                  <Card.Footer>
                    {isInCart ? (
                      <Button onClick={() => dispatch(removeItem(food))}>
                        Remove From Cart
                      </Button>
                    ) : (
                      <Button onClick={() => dispatch(addItem(food))}>
                        Add To Cart
                      </Button>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
