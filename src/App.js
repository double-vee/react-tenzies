import Die from "./components/Die";

function App() {
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
