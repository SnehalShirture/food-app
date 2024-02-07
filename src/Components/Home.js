import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css";
import { addItem } from "../reduxwork/CartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [foodData, setfoodData] = useState([]);
  const dispatcher = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallfood")
      .then((result) => {
        console.log("Data", result.data);
        setfoodData(result.data);
      })
      .catch((err) => {}, []);
  });
  return (
    <>
      <Container fluid className="home">
        <Row>
          {foodData.map((food) => {
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
                    <Card.Text>{food.foodtype}</Card.Text>
                    <Card.Text>{food.foodprice}</Card.Text>
                  </div>
                  
                  <Card.Footer>
                    <Button  onClick={() => dispatcher(addItem(food))}>
                      Add To Cart
                    </Button>
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
