import React from 'react';
import {Route,Switch} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import Home from './components/';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <CssBaseline/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </>
  );
}

export default App;
