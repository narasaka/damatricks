import React from "react";
import Home from "./components/Home";
import List from "./components/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={List} />
      </Switch>
    </Router>
  );
}

export default App;
