import React, { Component } from 'react'

import { createDeck, drawOne } from '../../utils/cardActions';
import DisplayButtons from '../DisplayButtons';
import DisplayCards from '../DisplayCards';


export default class DynamoView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stack: [],
      drawn: [],
    }
  }

  componentDidMount = () => {
    const deck = createDeck();
    this.setState({ stack: deck });
  }

  handleDrawOne = () => {
    const { card, newStack } = drawOne(this.state.stack);
    let drawnArr = this.state.drawn;
    drawnArr.push(card);
    this.setState({ stack: newStack, drawn: drawnArr})
    console.log(`Card Drawn: ${card}`);
    console.log(`Stack is now: ${newStack}`);
    console.log(this.state.stack);
    console.log(this.state.drawn);

  }


  render() {
    return (
      <div>
        <DisplayButtons drawOne={this.handleDrawOne} />
        <DisplayCards />
      </div>
    )
  }
}
