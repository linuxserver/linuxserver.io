import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import DockerIcon from '@fortawesome/fontawesome-free-brands/faDocker'
import JenkinsIcon from '@fortawesome/fontawesome-free-brands/faJenkins'
import DiscordIcon from '@fortawesome/fontawesome-free-brands/faDiscord'

import DockerPullStats from '../components/DockerPullStats'
import DiscordScreenshot from '../images/Discord_2018-03-17_13-40-59.png';

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
        <Container className="whoAreWe">
            <Row>
                <Col lg="12">
                    <h3>Who are we?</h3>
                    <p>We are a group of home server enthusiasts that wish to give back to the community. Our primary goal is to provide functional, easy-to-use and streamlined Docker images. </p>
                </Col>
            </Row>
        </Container>
        <Container className="usps">
            <Row>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Standardised Images</h3>
                    <span className="uspIcon"><FontAwesomeIcon icon={DockerIcon} style={{color: '#009bff'}} /></span>
                    <p>All of our images are built from the same base, which we have uniquely curated. By using <code>s6-overlay</code>, each of our base images are highly extendable, making them configurable for practically any application.</p>
                </Col>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Weekly Updates</h3>
                    <span className="uspIcon"><FontAwesomeIcon icon={JenkinsIcon} /></span>
                    <p>Using Jenkins as our build pipeline, all of our images are updated on a weekly basis, ensuring all of our users are kept up-to-date.</p>
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
        <Container className="showcase">
            <Row>
                <Col className="col" xs="12" sm="12" md="6" style={{display: 'flex'}}>
                    <div className="alignMiddle">
                        <h3>Join the conversation!</h3>
                        <p>
                            We actively talk to our users and offer guidance and help to all that ask for it. Have a problem with Docker? Found a bug in one of our containers? Or just want to say "hi"? You are welcome to join our server and be part of the ever expanding conversation.
                        </p>
                    </div>
                </Col>
                <Col className="col" xs="12" sm="12" md="6">
                    <img src={DiscordScreenshot} alt="Discord" className="showcaseImage" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default IndexPage
