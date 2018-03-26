import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

import UserImage from '../../images/user.png';

function constructGravatarUrl(hash) {
    return `https://www.gravatar.com/avatar/${hash}?s=100`;
}

export default class TeamCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const gravatar = this.props.member.gravatar ? (
            <img src={constructGravatarUrl(this.props.member.gravatar)} />
        ) : (
            <img src={UserImage} />
        );

        const userName = this.props.member.irl ? (
            <h4><a href={this.props.member.irl.url} title={this.props.member.irl.name} target="_blank">{this.props.member.name}</a></h4>
        ) : (
            <h4>{this.props.member.name}</h4>
        );

        return (
            <Col className="team-member mb-5" md="4">
                <div className="avatar">
                    {gravatar}
                </div>

                {userName}

                <div>
                    {this.props.member.blurb}
                </div>
            </Col>
        );
    }
}
