import React from "react";
import { string, number } from "prop-types";
import "./style.css";

export default function Tile({ color, id }) {
  return <div className="tile" style={{ backgroundColor: color }}></div>;
}

Tile.defaultProps = {
  color: "gray",
};

Tile.propType = {
  color: string,
  id: number.isRequired,
};
