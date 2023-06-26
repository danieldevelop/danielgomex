import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="*" component={() => <h1>404 Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
