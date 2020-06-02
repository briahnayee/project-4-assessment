import React, { Component, useState, useContext } from 'react';
import './App.css';
import CircleSelector from './CircleSelector/CircleSelector';
import Circles from './Circles/Circles';

const App = () => {

    const [selectedCircle, setSelectedCircle] = useState()

    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector selectedCircle={selectedCircle} setSelectedCircle={setSelectedCircle}/>
          <Circles selectedCircle={selectedCircle} setSelectedCircle={setSelectedCircle}/>
        </main>
      </div>
    );
}

export default App;