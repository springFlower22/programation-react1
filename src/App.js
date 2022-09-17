import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Clues from "./pages/Clues";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/clues" exact component={Clues} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;