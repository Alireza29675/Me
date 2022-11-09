import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Experiences extends React.Component {

    get experiences () {
        const result = []
        resume.experiences.forEach((item, i) => {
            if (item.hidden) return;
            result.push(
                <li key={`experience-${i}`}>
                    <h3>{item.title} <span>({item.span.from} - {item.span.to})</span></h3>
                    <strong>{item.company}</strong>
                    <em>{item.location}</em>
                    {item.description && <p>{item.description}</p>}
                </li>
            )
        })
        return result;
    }

    render () {

        return (<section className="experiences">
            <h2>Experiences <small>
                (Find descriptions in <a href={resume.links.linkedin} target="_blank">LinkedIn</a>)
            </small></h2>
            <ol>
                {this.experiences}
            </ol>
        </section>)
    }

}