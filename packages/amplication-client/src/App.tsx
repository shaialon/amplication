import React from "react";
import { Route, Switch } from "react-router-dom";
import { TopAppBarFixedAdjust } from "@rmwc/top-app-bar";
import Header from "./Header";
import Application from "./Application";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Account from "./Account";
import * as mock from "./mock.json";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/ripple/dist/mdc.ripple.css";
import "./App.css";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Header organization={mock.organization} />
      <TopAppBarFixedAdjust />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/account">
          <Account />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/applications/:application">
          <Application />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;