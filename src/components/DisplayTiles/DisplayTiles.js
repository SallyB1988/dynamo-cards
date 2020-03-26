import React from "react";
import { Row } from "react-bootstrap";
import RummiTile from "../RummiTile/RummiTile.js";

// import Tiles from "../../images";

function DisplayTiles(props) {
  const { tiles } = props;
  return (
    <Row className="my-2 justify-content-center cardTable">
      {tiles.map(tile => (
        <RummiTile color={tile.color} value={tile.value} />
      ))}
    </Row>
  );
}

export default DisplayTiles;
