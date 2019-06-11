import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class DisplayButtons extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center buttonRow">
          <Col md="3">
            <Button
              className="dynamoButton"
              onClick={this.props.drawOne}
              disabled={this.props.disableDrawOne}
            >
              Draw One
            </Button>
          </Col>
          <Col md="3">
            <Button
              className="dynamoButton"
              onClick={this.props.dealAll}
              disabled={this.props.disableDealAll}
            >
              Deal All
            </Button>
          </Col>
          <Col md="3">
            <Button
                          className="dynamoButton"

              onClick={this.props.shuffle}
            >
              Shuffle
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
