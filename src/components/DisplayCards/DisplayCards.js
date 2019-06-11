import React from "react";
import { Row } from "react-bootstrap";

import Cards from "../../images";

function DisplayCards(props) {
  const { cards } = props;
  return (
    <Row className="my-2 justify-content-center cardTable">
      {cards.map(c => {
        return (
          <img
            className="playingCard"
            key={c}
            src={Cards[c]}
            alt={`card ${c}`}
          />
        );
      })}
    </Row>
  );
}

export default DisplayCards;
