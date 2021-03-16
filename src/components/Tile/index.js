import React from "react";
import { string, number, func } from "prop-types";
import "./style.css";

export default function Tile({ color, id, onDoubleClick }) {
  return (
    <div
      className="tile"
      onDoubleClick={onDoubleClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}

Tile.defaultProps = {
  color: "gray",
};

Tile.propType = {
  color: string,
  id: number.isRequired,
  onDoubleClick: func.isRequired,
};
