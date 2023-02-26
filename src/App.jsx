import "./App.css";
import ToneButtons from "./components/ToneButtons";
import "../dist/output.css"

function App() {
  return (
    <div className="App" role="main">
      <h1 className="text-3xl"> Tone Game</h1>
        <ToneButtons />
    </div>
  );
}

export default App;
