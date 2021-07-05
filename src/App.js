import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navagation from "./components/Navigation";
import "./App.css";


function App() {
  return(
    <HashRouter>
      <Navagation></Navagation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  )
}

export default App;