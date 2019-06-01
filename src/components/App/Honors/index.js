import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Honors extends React.Component {

    get honors () {
        const result = []
        resume.honors.forEach((item, i) => {
            if (item.hidden) return;
            result.push(
                <li key={`honors-${i}`}>
                    <h3>{item.rank} <span>({item.in} in {item.year})</span></h3>
                    <strong>{item.field}</strong>
                    <em>{item.location}</em>
                    {item.description && <p>{item.description}</p>}
                </li>
            )
        })
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