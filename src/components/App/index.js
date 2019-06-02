import React from 'react';
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


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
      <Helmet>
          <meta charSet="utf-8" />
          <title>{`${resume.name} ${resume.lastName}'s Resume`}</title>
      </Helmet>
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
      <div className="footer-credits">
        <FontAwesomeIcon icon={faGithub} /> Fork this resume in <a href="https://github.com/Alireza29675/Me" rel="noopener noreferrer" target="_blank">https://github.com/Alireza29675/Me</a>
      </div>
    </div>
  );
}

export default App;
