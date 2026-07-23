import './App.css';
import ListofPlayers, { Scorebelow70 } from './ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from './IndianPlayers';

function App() {

  const players = [
    { name: "Mr. Jack", score: 50 },
    { name: "Mr. Michael", score: 70 },
    { name: "Mr. John", score: 40 },
    { name: "Mr. Ann", score: 61 },
    { name: "Mr. Elisabeth", score: 61 },
    { name: "Mr. Sachin", score: 95 },
    { name: "Mr. Dhoni", score: 100 },
    { name: "Mr. Virat", score: 84 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Rohit", score: 80 }
  ];

  const IndianTeam = [
    "First : Sachin1",
    "Second : Dhoni2",
    "Third : Virat3",
    "Fourth : Rohit4",
    "Fifth : Yuvaraj5",
    "Sixth : Raina6"
  ];

  const flag = true;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}

        <hr />

        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}

        <hr />

        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers />
      </div>
    );
  }
}

export default App;