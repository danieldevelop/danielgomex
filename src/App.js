import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home/Home";
import About from "./views/about/About";
import notFound from "./views/notFound/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        <Route path="*" component={notFound} />
      </Switch>
    </>
  );
}

export default App;
