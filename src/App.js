import React from 'react';
<<<<<<< HEAD
import './App.css';
import Contact from './components/contact/Contact';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    );
  }
}
=======

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Contact from './components/Contact'
import Summoning from './components/Summoning'
import About from './components/About'
import MonsterList from './components/MonsterList';
import Footer from './components/Footer'




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
      <Footer/>


    </div>




  );
}

export default App
>>>>>>> dev
