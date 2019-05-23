import React from 'react';
import './App.scss';
import Basic from '../Basic/Basic';
import Summary from '../Summary/Summary';

function App() {
  return (
    <div className="App">
      <div className="resume">
        <Basic />
        <Summary />
        <hr />
      </div>
    </div>
  );
}

export default App;
