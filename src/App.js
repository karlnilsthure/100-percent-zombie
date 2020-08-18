import React, { useState } from "react";
import "./App.css";
import { Houses } from "./Houses";
import { InvasionList } from "./InvasionList";
import styled from "styled-components";

const StartButton = styled.button`
  padding: 10px;
  margin: 10px 0;
`;

function App() {
  const houseArray = [...new Array(100)].map(() => {
    return { hasHuman: true };
  });

  const [houseStatus, setHouseStatus] = useState(houseArray);
  const [invasionStatus, setInvasionStatus] = useState([]);

  const zombieInvasion = () => {
    setHouseStatus(houseArray);

    const rounds = (numberOfRounds, zombieArr, houseArr) => {
      if (zombieArr.length >= 100) {
        setInvasionStatus((status) => [...status, numberOfRounds]);
        return;
      }

      let newZombies = [];

      zombieArr.forEach((zombie) => {
        const randomHouse = Math.floor(Math.random() * 100);
        const houseHasHuman = houseArr[randomHouse].hasHuman;
        if (houseHasHuman) {
          houseArr[randomHouse].hasHuman = false;
          newZombies.push("zombie");
        }
      });

      setTimeout(() => {
        rounds(numberOfRounds + 1, [...zombieArr, ...newZombies], houseArr);

        setHouseStatus([...houseArr]);
      }, 1000);
    };

    rounds(1, ["zombie"], houseArray);
  };

  const startApocalypse = () => {
    zombieInvasion();
  };

  return (
    <div className="App">
      <StartButton onClick={startApocalypse}>Start apocalypse</StartButton>
      <Houses houseArray={houseStatus} />
      <InvasionList invasionList={invasionStatus} />
    </div>
  );
}

export default App;
