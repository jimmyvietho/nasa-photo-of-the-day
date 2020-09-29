import React from "react";
import ReactDOM from "react-dom"
import "./App.css";
import Header from "./components/Header"
import Data from "./components/Data"


function App() {
  return (
    <div className="App">
     <Header />
     <Data />
    </div>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

export default App;
