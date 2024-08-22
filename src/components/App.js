import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

const routes = [
  { path: "/", component: Home },
  { path: "/movies", component: Movies },
  { path: "/directors", component: Directors },
  { path: "/actors", component: Actors }
]

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
