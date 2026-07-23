import React from "react";

function ListofPlayers({ players }) {
  return (
    <>
      {players.map((player, index) => (
        <p key={index}>
          {player.name} {player.score}
        </p>
      ))}
    </>
  );
}

export function Scorebelow70({ players }) {
  const result = players.filter(player => player.score <= 70);

  return (
    <>
      {result.map((player, index) => (
        <p key={index}>
          {player.name} {player.score}
        </p>
      ))}
    </>
  );
}

export default ListofPlayers;