import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

// PlayerCard renders an image

class RummiTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  componentDidMount() {
    const { color, value } = this.props;
    this.setState({ color: color, value: value, clicked: false });
  }

  // handleClick = () => {
  //   props.playerClicked(props.name);
  //   props.updateCount();
  // };

  render() {
    return (
      <Card
        bg="info"
        style={{ width: "10rem", margin: "5px auto" }}
        // onClick={handleClick}
      >
        <Card.Body>
          <h1 className="card-img" style={{ color: this.state.color }}>
            {this.state.value}
          </h1>
        </Card.Body>
      </Card>
    );
  }
}

export default RummiTile;
