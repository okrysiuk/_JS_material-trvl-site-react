import React from "react";
import "./app.scss";
import Navbar from "../navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './../../pages/home';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
