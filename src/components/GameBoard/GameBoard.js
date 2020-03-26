import React, { Component } from "react";

import { createTiles, drawOne, shuffleTiles } from "../../utils/tileActions";
import DisplayButtons from "../DisplayButtons";
import DisplayTiles from "../DisplayTiles";

export default class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      available: [],
      drawn: [],
      disableDrawOne: false,
      disableDealAll: false
    };
  }

  componentDidMount = () => {
    const tiles = createTiles();
    this.setState({ available: tiles });
  };

  // Draw one card from stack and put it in the drawn array
  handleDrawOne = () => {
    if (this.state.available.length === 0) return;
    const { tile, remaining } = drawOne(this.state.available);
    let drawnArr = this.state.drawn;
    drawnArr.push(tile);
    this.setState({ avaiable: remaining, drawn: drawnArr });
    if (remaining.length === 0) {
      this.setState({
        disableDrawOne: true,
        disableDealAll: true
      });
    }
  };

  // Move all remaining cards in stack to the drawn array
  handleDealAll = () => {
    const drawn = [...this.state.drawn, ...this.state.available];
    this.setState({
      available: [],
      drawn: drawn,
      disableDrawOne: true,
      disableDealAll: true
    });
  };

  // Reset the stack with a shuffled deck of cards
  handleShuffle = () => {
    const tiles = shuffleTiles(createTiles());
    this.setState({
      available: tiles,
      drawn: [],
      disableDrawOne: false,
      disableDealAll: false
    });
  };

  render() {
    return (
      <div>
        <DisplayButtons
          drawOne={this.handleDrawOne}
          dealAll={this.handleDealAll}
          shuffle={this.handleShuffle}
          disableDrawOne={this.state.disableDrawOne}
          disableDealAll={this.state.disableDealAll}
        />
        <DisplayTiles tiles={this.state.drawn} />
      </div>
    );
  }
}
