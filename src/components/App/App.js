import React from 'react';
import './App.scss';
import Basic from '../Basic/Basic';
import Summary from '../Summary/Summary';
import Education from '../Education/Education';

function App() {
  return (
    <div className="App">
      <div className="resume">
        <Basic />
        <Summary />
        <hr />
        <Education />
      </div>
    </div>
  );
}

export default App;
