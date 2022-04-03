import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(() => allNewDice());

  function allNewDice() {
    const initialArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return initialArray.map((number) => Math.floor(Math.random() * 6 + 1));
  }

  const diceElements = dice.map((die) => {
    return <Die value={die} />;
  });

  return (
    <div className="container">
      <main className="main">
        <div className="dice-container">{diceElements}</div>
      </main>
    </div>
  );
}

export default App;
