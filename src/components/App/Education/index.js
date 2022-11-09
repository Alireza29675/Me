import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Education extends React.Component {

    get institutes () {
        const result = []
        resume.education.forEach((item, i) => {
            if (item.hidden) return;
            result.push(
                <li key={`education-${i}`}>
                    <h3>{item.name} <span>({item.span.from} - {item.span.to})</span></h3>
                    <strong>{item.degree} of {item.field}</strong>
                    <em>{item.location.city}, {item.location.country}</em>
                    {item.description && <p>{item.description}</p>}
                </li>
            )
        })
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