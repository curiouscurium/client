import React from "react";
// import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
