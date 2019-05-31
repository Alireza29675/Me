import React from 'react';
import './style.scss'
import md5 from 'md5'

import resume from '../../../data/resume.json'

export default class Basic extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            avatar: `https://www.gravatar.com/avatar/${md5(resume.email)}?s=500`
        }
    }

    render () {
        const { avatar } = this.state;
        const fullName = `${resume.name} ${resume.lastName}`;

        return (
            <header className="Basic">
                <div className="Basic__left">
                    <img src={avatar} alt={fullName} />
                </div>
                <div className="Basic__right">
                    <h2 className="name">{fullName}</h2>
                    <em className="location">{resume.location.city}, {resume.location.country}</em>
                    <span><b>Phone: </b><a href={`tel: ${resume.phoneNumber}`}>{resume.phoneNumber}</a></span>
                    <span><b>Email: </b><a href={`mailto: ${resume.email}`}>{resume.email}</a></span>
                    <span><b>Date of Birth: </b>{resume.birthday.year}/{resume.birthday.month}/{resume.birthday.day}</span>
                    <span><b>Linkedin: </b><a href={resume.links.linkedin}>{resume.links.linkedin}</a></span>
                </div>
            </header>
        )
    }

}