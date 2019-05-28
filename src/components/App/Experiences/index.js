import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Education extends React.Component {

    get institutes () {
        const result = []
        for (let institute of resume.education) result.push(
            <li key={institute.name}>
                <h3>{institute.name} <span>({institute.span.from} - {institute.span.to})</span></h3>
                <strong>{institute.degree}</strong>
                <em>{institute.location.city}, {institute.location.country}</em>
            </li>
        )
        return result;
    }

    render () {

        return (<section className="Education">
            <h2>Education</h2>
            <ol>
                {this.institutes}
            </ol>
        </section>)
    }

}