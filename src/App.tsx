import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GuntendexApiDataFetcher from "./components/GuntendexApiDataFetcher";
import CalibreApiDataFetcher from "./components/CalibreApiDataFetcher";

function App() {
  return (
    <div className="App">
      <GuntendexApiDataFetcher />
      {/* <CalibreApiDataFetcher /> */}
    </div>
  );
}

export default App;
