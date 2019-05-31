import React from 'react';
import './style.scss';

import resume from '../../data/resume.json'

import Basic from './Basic';
import Summary from './Summary';
import Experiences from './Experiences';
import Education from './Education';

window.resume = resume;

function App() {
  return (
    <div className="App">
      <div className="resume">
        <Basic />
        <Summary />
        <hr />
        <Experiences />
        <Education />
      </div>
    </div>
  );
}

export default App;
