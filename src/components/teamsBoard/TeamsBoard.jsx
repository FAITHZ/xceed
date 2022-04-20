import React from "react";
import Loader from "../loader/Loader";
import "./TeamsBoard.scss";

const TeamsBoard = (props) => {
  const { teams, isLoading, getPlayers } = props;
  return (
    <>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="teams-board__table">
            <div className="teams-board__title">Select a team to see its roster</div>
            {teams.length &&
              teams.map((team) => (
                <div className="teams-board__grid" key={team.id} onClick={()=>getPlayers(team.id, team.name)}>{team.name}</div>
              ))}
          </div>
        )}
    </>
  );
};

export default TeamsBoard;