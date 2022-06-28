import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(() => allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [start, setStart] = useState(false);
  const [firstGame, setFirstGame] = useState(true);

  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allValuesEqual = dice.every((die) => die.value === firstValue);

    if (allDiceHeld && allValuesEqual) {
      setStart(false);
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const initialArray = [];

    for (let i = 0; i < 10; i++) {
      initialArray.push(generateNewDie());
    }

    return initialArray;
  }

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
      setStart(true);
    } else if (firstGame) {
      setDice(allNewDice());
      setStart(true);
      setFirstGame(false);
    } else {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    }
  }

  function holdDie(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        hold={() => holdDie(die.id)}
      />
    );
  });

  return (
    <div className="container">
      <main className="main">
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-btn" onClick={rollDice}>
          {tenzies || firstGame ? "Play" : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;
