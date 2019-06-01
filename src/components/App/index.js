import React from 'react';
import './style.scss';

import resume from '../../data/resume.json'

import Basic from './Basic';
import Summary from './Summary';
import Experiences from './Experiences';
import Education from './Education';
import Honors from './Honors';
import Skills from './Skills';

window.resume = resume;

function App() {
  return (
    <div className="App">
      <div className="resume">
        <Basic />
        <Summary />
        <div className="App__sections">
          <Skills />
          <Experiences />
          <Honors />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
