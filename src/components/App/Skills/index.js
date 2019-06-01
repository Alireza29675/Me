import React from 'react';
import './style.scss';

import resume from '../../../data/resume.json'

export default class Honors extends React.Component {

    get skills () {
        const result = []
        for (const cat in resume.skills) {
            const elements = resume.skills[cat].map(item => {
                return (<div key={item.name} className="Skills__skill">
                    <span className="Skills__skill__name">{item.name}</span>
                    <span className="Skills__skill__level">{item.level}</span>
                </div>)
            })
            result.push(<div key={cat} className="Skills__category">
                <h5>{cat}</h5>
                {elements}
            </div>)
        }
        return result;
    }

    render () {

        return (<section className="Skills">
            <h2>Highlight Skills</h2>
            <ol>
                {this.skills}
            </ol>
        </section>)
    }

}