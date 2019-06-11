import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class DisplayButtons extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          <Col md="3">
            <Button
              onClick={this.props.drawOne}
              disabled={this.props.disableDrawOne}
            >
              Draw One
            </Button>
          </Col>
          <Col md="3">
            <Button
              onClick={this.props.dealAll}
              disabled={this.props.disableDealAll}
            >
              Deal All
            </Button>
          </Col>
          <Col md="3">
            <Button>Shuffle</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
