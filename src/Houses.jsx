import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 109px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const House = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.hasHuman ? "green" : "red")};
  margin-bottom: 1px;
`;

export const Houses = () => {
  const houseArray = [...new Array(100)].map(() => {
    return { hasHuman: true };
  });

  const [houseStatus, setHouseStatus] = useState(houseArray);

  const zombieInvasion = () => {
    const rounds = (numberOfRounds, zombieArr, houseArr) => {
      if (zombieArr.length >= 100) {
        return numberOfRounds;
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
    <div>
      <button onClick={startApocalypse}>Start apocalypse</button>
      

      <Container>
        {houseStatus.map(({ hasHuman }, index) => {
          return <House key={index} hasHuman={hasHuman}></House>;
        })}
      </Container>
    </div>
  );
};
