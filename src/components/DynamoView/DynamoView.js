import React, { Component } from "react";

import { createDeck, drawOne, shuffleDeck } from "../../utils/cardActions";
import DisplayButtons from "../DisplayButtons";
import DisplayCards from "../DisplayCards";

export default class DynamoView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: [],
      drawn: [],
      disableDrawOne: false,
      disableDealAll: false
    };
  }

  componentDidMount = () => {
    const deck = createDeck();
    this.setState({ stack: deck });
  };

  // Draw one card from stack and put it in the drawn array
  handleDrawOne = () => {
    if (this.state.stack.length === 0) return;
    const { card, newStack } = drawOne(this.state.stack);
    let drawnArr = this.state.drawn;
    drawnArr.push(card);
    this.setState({ stack: newStack, drawn: drawnArr });
    if (newStack.length === 0) {
      this.setState({
        disableDrawOne: true,
        disableDealAll: true
      });
    }
  };

  // Move all remaining cards in stack to the drawn array
  handleDealAll = () => {
    const drawn = [...this.state.drawn, ...this.state.stack];
    this.setState({
      stack: [],
      drawn: drawn,
      disableDrawOne: true,
      disableDealAll: true
    });
  };

  // Reset the stack with a shuffled deck of cards
  handleShuffle = () => {
    const deck = shuffleDeck(createDeck());
    this.setState({
      stack: deck,
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
        <DisplayCards cards={this.state.drawn} />
      </div>
    );
  }
}
