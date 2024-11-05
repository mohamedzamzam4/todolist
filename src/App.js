import logo from "./logo.svg";
import "./App.css";

import Formaat from "./Formaat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JUST DO IT ...</h1>
        {/* create a new component contains the form to put tasks */}
        <Formaat />
      </header>
    </div>
  );
}

export default App;
