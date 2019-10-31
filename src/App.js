import React from 'react';


import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Contact from './components/Contact'
import MonsterList from './components/MonsterList'
import Summoning from './components/Summoning'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Accueil} >
          <Accueil />
          <About />
        </Route>
        <Route path='/Contact' component={Contact} />
        <Route path='/MonsterList' component={MonsterList} />
        <Route path='/Summoning' component={Summoning} />
      </Switch>
    </div>




  );
}

export default App