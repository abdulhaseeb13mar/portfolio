import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes history={history} />
    </Router>
  );
}

export default App;
