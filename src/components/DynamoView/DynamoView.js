import React, { Component } from 'react'
import DisplayButtons from '../DisplayButtons';
import DisplayCards from '../DisplayCards';


export default class DynamoView extends Component {
  render() {
    return (
      <div>
        <DisplayButtons />
        <DisplayCards />
      </div>
    )
  }
}
