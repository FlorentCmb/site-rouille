import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import MonsterList from './components/MonsterList'
import Summoning from './components/Summoning'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Contact' component={Contact} />
        <Route path='/MonsterList' component={MonsterList} />
        <Route path='/Summoning' component={Summoning} />
      </Switch>

    </div>
  );
}

export default App;
