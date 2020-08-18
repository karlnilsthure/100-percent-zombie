import React from "react";

export const InvasionList = ({ invasionList }) => {
  return (
    <div>
      <h2>Number of rounds per invasion:</h2>
      <ol>
        {invasionList.map((number, index) => {
          return (
            <li key={index}>
              <p>{number}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
