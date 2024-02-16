import React from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";

import OrderList from "./OrderList";

function Orders() {
  return (
    <div>
      <Container>
        <Row>
          <Tabs defaultActiveKey="Pending">
            <Tab eventKey="Pending" title="Pending">
              <OrderList orderStatus="Pending" />
            </Tab>
            <Tab eventKey="Approve" title="Approve">
              <OrderList orderStatus="Approve" />
            </Tab>
            <Tab eventKey="Dispatch" title="Dispatch">
              <OrderList orderStatus="Dispatch" />
            </Tab>
            <Tab eventKey="Intransit" title="Intransit">
              <OrderList orderStatus="Intransit" />
            </Tab>
            <Tab eventKey="Delivered" title="Delivered">
              <OrderList orderStatus="Delivered" />
            </Tab>
            <Tab eventKey="Cancel" title="Cancel">
              <OrderList orderStatus="Cancel" />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
}

export default Orders;
