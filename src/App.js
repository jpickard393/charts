import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Menubar from './Components/MenuBar/Menubar';
import Home from './Components/Home/Home';
import Bullish from './Components/Bullish/Bullish';
import Bearish from './Components/Bearish/Bearish';
import Neutral from './Components/Neutral/Neutral';
import PageError from './Components/PageError/PageError';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menubar></Menubar>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/bullish" component={Bullish}></Route>
        <Route path="/bearish" component={Bearish}></Route>
        <Route path="/neutral" component={Neutral}></Route>
        <Route component={PageError} />
      </Switch>
    </Router>
  );
}

export default App;
