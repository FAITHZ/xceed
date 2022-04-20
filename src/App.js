import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";

import axios from "axios";

const App = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState();
  

  const baseURL = "https://api.football-data.org/v2";

  const token = "5f3ece105a1142af826ed06aa1872c0c";

  const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      "Content-type": "application/json",
      "X-Auth-Token": token,
    },
    mode: "no-cors",
  });

  useEffect(() => {
    setIsLoading(true);
    instance.get("/competitions/PD/teams?season=2021").then((res) => {
      setTeams(res.data.teams);
      setIsLoading(false);
    });
  }, []);

  const getPlayers = (teamId,teamName) => {
    if (teamId) {
      setIsLoading(true);
      instance.get("/teams/" + teamId).then((res) => {
        setPlayers(res.data.squad);
        setSelectedTeam(teamName);
        setIsLoading(false);
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <Slider />
      <Board
        teams={teams}
        players={players}
        isLoading={isLoading}
        getPlayers={getPlayers}
        selectedTeam={selectedTeam}
        setPlayers={setPlayers}
      />
    </div>
  );
};

export default App;
