import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../pages/login";
import CreateAccount from "../pages/createaccount";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Dashboard from "../pages/dashboard";
import Listing from "../pages/list";
import error404 from "../pages/404";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/home" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/list" component={Listing} />
          <Route path="/error" component={error404}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
