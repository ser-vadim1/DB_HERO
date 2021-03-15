import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ArrRoutes } from "./indexRoutes";
import uuid from "react-uuid";
import HeaderNav from "../Components/HeaderNav/HeaderNav";

const RouterLaylaout = () => {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        {ArrRoutes.map((optionsRoutes) => {
          return (
            <Route exact path={optionsRoutes.path} key={uuid()}>
              {<optionsRoutes.Component />}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default RouterLaylaout;
