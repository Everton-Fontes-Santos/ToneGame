import "./App.css";
import ToneButtons from "./components/ToneButtons";
import "../dist/output.css"

function App() {
  return (
    <div className="App flex justify-center items-center flex-col w-full bg-gradient-to-r from-cyan-500 to-blue-500" role="main">
      <h1 className="text-3xl text-center"> Tone Game</h1>
      <p className="text-center">This Game is pretty simple, its a Simon Says game implemented with React, Tailwind CSS and Styled Components</p>
      <p className="text-center">So, to play just press the play button and then will be played a note sequence and your job is to play the right sequence!</p>
        <ToneButtons />
    </div>
  );
}

export default App;
