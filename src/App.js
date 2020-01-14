import React from 'react';
import './App.css';
import MainPageContainer from './components/MainPageContainer';
import image from './images/sw-height-img.jpg';

function App() {
  return (
    <div className="App">
      <h1 id="header">STAR WARS Height-O-Meter</h1>
      <img alt="height-sw" src={image} width="60%" />
      <MainPageContainer />
    </div>
  );
}

export default App;
