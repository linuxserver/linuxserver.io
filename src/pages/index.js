import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import DockerIcon from '@fortawesome/fontawesome-free-brands/faDocker'
import ClockIcon from '@fortawesome/fontawesome-free-regular/faClock'
import DiscordIcon from '@fortawesome/fontawesome-free-brands/faDiscord'

import DockerPullStats from '../components/DockerPullStats'

const IndexPage = () => (
    <div>
        <div className="splashParent">
            <Container className="splash">
                <Row>
                    <Col>
                        <h1>LinuxServer</h1>
                        <h2>Community Docker Images, made with love</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className="usps">
            <Row>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Standardised Images</h3>
                    <span className="uspIcon"><FontAwesomeIcon icon={DockerIcon} style={{color: '#009bff'}} /></span>
                    <p>All of our images are built from the same base, which we have uniquely curated. By using <span className="monospace">s6-overlay</span>, each of our base images are highly extendable, making them configurable for practically any application.</p>
                </Col>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Weekly Updates</h3>
                    <span className="uspIcon"><FontAwesomeIcon icon={ClockIcon} /></span>
                    <p>Using a build pipeline, all of our images are updated on a weekly basis, ensuring all of our users are kept up-to-date.</p>
                </Col>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Container Support</h3>
                    <span className="uspIcon"><FontAwesomeIcon icon={DiscordIcon} style={{color: '#7289DA'}} /></span>
                    <p>Unlike other image vendors, we provide support for our users via our Discord server. Head on over and have a chat!</p>
                </Col>
            </Row>
        </Container>
        <Container className="totalPulls">
            <DockerPullStats />
        </Container>
    </div>
)

export default IndexPage
