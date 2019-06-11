import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class DisplayButtons extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          <Col md="3">
            <Button>Draw 1</Button>
          </Col>
          <Col md="3">
            <Button>Deal All</Button>
          </Col>
          <Col md="3">
            <Button>Shuffle</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
