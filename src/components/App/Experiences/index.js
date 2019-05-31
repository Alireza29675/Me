import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Experiences extends React.Component {

    get institutes () {
        const result = []
        resume.experiences.forEach((item, i) => {
            result.push(
                <li key={`experience-${i}`}>
                    <h3>{item.title} <span>({item.span.from} - {item.span.to})</span></h3>
                    <strong>{item.company}</strong>
                    <em>{item.location}</em>
                    <p>{item.description}</p>
                </li>
            )
        })
        return result;
    }

    render () {

        return (<section className="Experiences">
            <h2>Experiences</h2>
            <ol>
                {this.institutes}
            </ol>
        </section>)
    }

}