import React from 'react';
import './Summary.scss';

import resume from '../../data/resume.json'

export default class Summary extends React.Component {

    render () {
        return (<section className="Summary">
            <h2>Summary</h2>
            <p>{resume.summary}</p>
        </section>)
    }

}