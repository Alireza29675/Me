import React from 'react';
import './style.scss';

import Basic from '../Basic';
import Summary from '../Summary';
import Education from '../Education';

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
