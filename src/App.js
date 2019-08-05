import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
