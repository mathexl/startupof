import { useState } from "react";
import styled from "styled-components";

export const Votes = (props) => {
  const calculateLeft = (i, v) => {
    return (
      Math.abs(
        ((((i % 3) * v) % i) + (i % 7) * v + (v % 9) * v - ((i * v) % 4) * v) %
          80
      ) +
      14 +
      "%"
    );
  };

  const calculateTop = (i, v) => {
    return (
      Math.abs(
        ((i % 4) * v + (i % 3) * v + (v % 4) * i - ((i * v) % 4) * v) % 80
      ) +
      14 +
      "%"
    );
  };

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((n, i) => (
        <VoteText
          style={{
            left: calculateLeft(i + 4, props.votes),
            top: calculateTop(i + 4, props.votes),
          }}
        >
          {props.votes}
        </VoteText>
      ))}
    </>
  );
};

const VoteText = styled.div`
  transition: 1s;
  position: absolute;
  font-family: GilroyB;
  color: var(--secondary);
`;
