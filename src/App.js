import React from 'react';
import Accueil from './components/Accueil'
import './components/Accueil.css'
import './App.css';
import ImageBackground from './components/ImageBackground';

function App() {
  return (
    <div className="App">
      <Accueil>
        <ImageBackground />
      </Accueil>
    </div>
  );
}

export default App;
