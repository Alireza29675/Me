import React from 'react';
import './Basic.scss';

import resume from '../../data/resume.json'

export default class Basic extends React.Component {

    render () {
        return (<div>{resume.name}</div>)
    }

}