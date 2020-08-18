import React from "react";
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

export const Houses = ({ houseArray }) => {
  if (!houseArray) return null;

  return (
    <Container>
      {houseArray.map(({ hasHuman }, index) => {
        return <House key={index} hasHuman={hasHuman}></House>;
      })}
    </Container>
  );
};
