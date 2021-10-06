import React from "react";
import "./App.scss";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage, GetQuotePage } from "./pages";
import { ScrollTopButton } from "./components";

const App = () => {
  return (
    <Router>
      <ScrollTopButton />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/contact">
          <GetQuotePage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
