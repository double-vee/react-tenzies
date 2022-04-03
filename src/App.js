import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(() => allNewDice());

  function allNewDice() {
    const initialArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return initialArray.map((number) => Math.floor(Math.random() * 6 + 1));
  }

  console.log(dice);

  return (
    <div className="container">
      <main className="main">
        <div className="dice-container">
          <Die value="1" />
        </div>
      </main>
    </div>
  );
}

export default App;
