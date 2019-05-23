import React from './node_modules/react';
import './Honors.scss';

import resume from '../../data/resume.json'

export default class Honors extends React.Component {

    get honors () {
        const result = []
        for (let honor of resume.honors) result.push(
            <li key={honor.name}>
                <h3>{honor.name} <span>({institute.span.from} - {institute.span.to})</span></h3>
                <strong>{institute.degree}</strong>
                <em>{institute.location.city}, {institute.location.country}</em>
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