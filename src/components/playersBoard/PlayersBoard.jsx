import React, { useState } from "react";
import Loader from "../loader/Loader";
import {
  SortAscendingIcon,
  SortDescendingIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import "./PlayersBoard.scss";

const PlayersBoard = (props) => {
  const { players, isLoading, selectedTeam } = props;

  const [order, setOrder] = useState();
  const [numItems, setNumItems] = useState(3);
  const [noResults, setNoResults] = useState(false);
  const [showPlayers, setShowPlayers] = useState(players);
  
 
  const getAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };

  const sortPlayers = (side) => {
    const sortPlayersArray = [...showPlayers].sort((a, b) =>
      side === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

    setShowPlayers(sortPlayersArray);
    setOrder(side);
  };

  const showMore = () => {
    const newItems = numItems + 3;
    setNumItems(newItems);
  };

  const filterName = (event) => {
    setNoResults(false)
    const filterPlayers = [...players].filter((player) =>
      player.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    filterPlayers.length ? setShowPlayers(filterPlayers) : setNoResults(true);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="players-board__table">
          <div className="players-board__title">
            <div className="players-board__input-wrapper">
              <span className="players-board__icon-wrapper">
                <SearchIcon className="search-icon" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="players-board__input-search"
                onInput={(event) => filterName(event)}
              />
            </div>
            <div className="players-board__team-name">{selectedTeam}</div>
          </div>
          <div className="players-board__grid-title">
            NAME{" "}
            <SortAscendingIcon
              className={`sort-icon ${order === "asc" && "active"}`}
              onClick={() => sortPlayers("asc")}
            />
            <SortDescendingIcon
              className={`sort-icon ${order === "desc" && "active"}`}
              onClick={() => sortPlayers("desc")}
            />
          </div>
          <div className="players-board__grid-title">NATIONALITY</div>
          <div className="players-board__grid-title">POSITION</div>
          <div className="players-board__grid-title">AGE</div>
          {noResults && <div className="players-board__no-results">No players</div>}
          {showPlayers.length && !noResults &&
            showPlayers.slice(0, numItems).map((player) => (
              <>
                <div className="players-board__grid-name">{player.name}</div>
                <div className="players-board__grid-nationality">
                  {player.nationality}
                </div>
                <div className="players-board__grid-position">
                  {player.position}
                </div>
                <div className="players-board__grid-dateOfBirth">
                  {getAge(player.dateOfBirth)}
                </div>
              </>
            ))}
          {numItems < players.length && !noResults &&(
            <div className="players-board__grid-seemore" onClick={showMore}>
              SEE MORE
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PlayersBoard;
