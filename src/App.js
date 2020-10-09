import React from 'react';
import './App.css';
import Normalize from 'react-normalize';
import IntroGif from './components/IntroGif'
import NavigationMenu from './components/Navigation';
import Icones from './components/Icones';

function App() {
  return (
    <div className="App">
      <Normalize />
      <header className="App-body">
        <NavigationMenu />
        <IntroGif />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Revol
        </a>

        <Icones/>

      </header>
     
    </div>
  );
}

export default App;
