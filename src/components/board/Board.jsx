import React from "react";
import TeamsBoard from "../teamsBoard/TeamsBoard";
import PlayersBoard from "../playersBoard/PlayersBoard";

import "./Board.scss";

const Board = (props) => {
  const { players } = props;
  return (
    <div className="board">
      {players.length ? <PlayersBoard {...props} /> : <TeamsBoard {...props} />}
    </div>
  );
};

export default Board;
