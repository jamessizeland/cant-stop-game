import React from "react";
import PositionMarker, { PositionProps } from "./position";

interface BarProps {
  value: number; // 0 to total
  total: number; // in steps
  hops: number[]; // hops for each player
  risked: number; // risked for current player beyond their hops
  currentPlayer: number; // current player
}

const Bar: React.FC<BarProps> = ({
  value,
  total = 12,
  hops,
  risked,
  currentPlayer,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white">{value}</h1>
      <ul className="steps steps-vertical">
        {Array.from({ length: total }).map((_, idx) => {
          const index = total - idx; // Reverse the index to match the visual representation
          const players: PositionProps = {
            currentPlayer,
            player1: hops[0] === index,
            player2: hops[1] === index,
            player3: hops[2] === index,
            player4: hops[3] === index,
            risker: hops[currentPlayer] + risked === index,
          };
          return (
            <li key={index} className="flex justify-center items-center">
              <PositionMarker {...players} />
            </li>
          );
        })}
      </ul>
      <h1 className="text-white">{value}</h1>
    </div>
  );
};

export default Bar;
