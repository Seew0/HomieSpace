import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "../pages/login";
import CreateAccount from "../pages/createaccount";
import Home from "../pages/home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;