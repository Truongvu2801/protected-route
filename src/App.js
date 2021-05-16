import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./Unauthorized";

import "./styles.css";

export default function App() {
  const [user, setUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(false);
  };
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          handleLogin={handleLogin}
          render={(props) => (
            <Landing
              {...props}
              user={user.toString()}
              handleLogin={handleLogin}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
          handleLogout={handleLogout}
          user={user}
        />
        <Route exact path="/unauthorized" component={Unauthorized} />
      </Router>
    </div>
  );
}
