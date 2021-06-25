import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Board from "./board";
const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/auth" />
      </Route>
      <Route exact path="/board" component={Board} />
    </Switch>
  );
};

export default App;
