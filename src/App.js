import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(() => allNewDice());

  function allNewDice() {
    const initialArray = [];

    for (let i = 0; i < 10; i++) {
      initialArray.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }

    return initialArray;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} />;
  });

  return (
    <div className="container">
      <main className="main">
        <div className="dice-container">{diceElements}</div>
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
