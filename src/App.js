import React from "react";
import Forecast from "../src/components/Forecast/Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <h1>React Weather App</h1>
        <Forecast />
      </main>
      <footer>Page created by Fadumo Aideed</footer>
    </div>
  );
}

export default App;
