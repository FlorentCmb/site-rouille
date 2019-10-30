import React from 'react';
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