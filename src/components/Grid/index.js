import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTile, removeTile } from "../../features/Grid/actions";

import AddTileButton from "../AddTileButton";
import Tile from "../Tile";

const colors = ["red", "blue", "pink", "yellow", "gray"];

export default function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();

  return (
    <div>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => (
          <Tile
            {...tile}
            key={index}
            onDoubleClick={(e) => dispatch(removeTile(tile.id))}
          />
        ))}
      </div>

      <br />

      <div>
        {colors.map((color) => (
          <AddTileButton
            onClick={(e) => dispatch(addTile(color))}
            key={color}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}
