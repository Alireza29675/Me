import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Honors extends React.Component {

    get honors () {
        const result = []
        for (let honor of resume.honors) result.push(
            <li key={honor.name}>
                <h3>{honor.name}</h3>
            </li>
        )
        return result;
    }

    render () {

        return (<section className="Honors">
            <h2>Honors</h2>
            <ol>
                {this.honors}
            </ol>
        </section>)
    }

}