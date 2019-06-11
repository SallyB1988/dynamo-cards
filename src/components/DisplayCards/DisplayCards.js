import React from 'react';
import { Row } from "react-bootstrap";

import Cards from '../../images';
import './cards.css';


function DisplayCards(props) {
  const { cards } = props;
  return (
    <Row className="my-3 justify-content-center">
      {cards.map((c) => {
        return (
        <img
        className="playingCard"
        key={c}
        src={Cards[c]}
        alt={`card ${c}`}  />
        )
      })}
    </Row>
  )
}

export default DisplayCards;