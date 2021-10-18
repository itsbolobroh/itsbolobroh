import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [showHello, setShowHello] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/").then((response) => {
      console.log("RES: ", response);
      const list = response.data.map((item) => <div>{item}</div>);
      setShowHello(list);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{showHello}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
