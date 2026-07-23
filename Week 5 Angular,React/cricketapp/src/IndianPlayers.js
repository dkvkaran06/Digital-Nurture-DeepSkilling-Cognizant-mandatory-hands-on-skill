import React from "react";

export function OddPlayers(players) {
  const [first, , third, , fifth] = players;

  return (
    <>
      <p>{first}</p>
      <p>{third}</p>
      <p>{fifth}</p>
    </>
  );
}

export function EvenPlayers(players) {
  const [, second, , fourth, , sixth] = players;

  return (
    <>
      <p>{second}</p>
      <p>{fourth}</p>
      <p>{sixth}</p>
    </>
  );
}

export function ListofIndianPlayers() {
  const T20players = [
    "Mr. First Player",
    "Mr. Second Player",
    "Mr. Third Player"
  ];

  const RanjiPlayers = [
    "Mr. Fourth Player",
    "Mr. Fifth Player",
    "Mr. Sixth Player"
  ];

  const IndianPlayers = [...T20players, ...RanjiPlayers];

  return (
    <>
      {IndianPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}
    </>
  );
}