import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";
import Store from "./store/Store";

const history = createBrowserHistory();

function App() {
  return (
    <Store>
      <Router history={history}>
        <Routes history={history} />
      </Router>
    </Store>
  );
}

export default App;
