import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import DockerIcon from '@fortawesome/fontawesome-free-brands/faDocker'
import JenkinsIcon from '@fortawesome/fontawesome-free-brands/faJenkins'
import DiscordIcon from '@fortawesome/fontawesome-free-brands/faDiscord'

import TitleAndMetaTags from '../components/TitleAndMetaTags'

import DockerPullStats from '../components/DockerPullStats'
import DiscordScreenshot from '../images/Discord_2018-03-31_12-09-55.png';
import LinuxServerBannerImage from '../images/logo-transparent-bg.png';
import SplashImage from '../images/johannes-plenio-377226.jpg';
import MobyLogoImage from '../images/moby.png';

const IndexPage = () => (
    <div>
        <TitleAndMetaTags title="LinuxServer" />
        <Container fluid={true} className="splash">
            <Row>
                <Col>
                    <img src={LinuxServerBannerImage} className="banner-image" />
                    <h2>We make and maintain container images for the community.</h2>
                </Col>
            </Row>
        </Container>
        <Container className="who-are-we">
            <Row>
                <Col lg="12">
                    <h3>Who are we?</h3>
                    <p>We are a group of like minded enthusiasts from across the world.</p>
                    <p>We have built and maintain the largest collection of container images on the web and at our core are the principles behind Free and Open Source Software. Our primary goal is to provide easy-to-use and streamlined Docker images with clear and concise documentation.</p>
                </Col>
            </Row>
        </Container>
        <Container className="total-pulls">
            <DockerPullStats />
        </Container>
        <Container className="usps">
            <Row>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Standardised Images</h3>
                    <img src={MobyLogoImage}/>
                    <p>Our images are built from the same base, which we have uniquely curated. </p>
                    <p>By using <code><a href="https://github.com/just-containers/s6-overlay" target="_blank">s6-overlay</a></code>, each of our base images are highly extendable, making them configurable for practically any application.</p>
                </Col>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Weekly Updates</h3>
                    <span className="usp-icon"><FontAwesomeIcon icon={JenkinsIcon} /></span>
                    <p>Our build pipeline is a publicly accessible <a href="https://ci.linuxserver.io/" target="_blank">Jenkins</a> server.</p>
                    <p>This pipeline is triggered on a weekly basis, ensuring all of our users are kept up-to-date with latest application features and security fixes from upstream.</p>
                </Col>
                <Col className="col" xs="12" sm="12" md="4">
                    <h3>Support</h3>
                    <span className="usp-icon"><FontAwesomeIcon icon={DiscordIcon} style={{color: '#7289DA'}} /></span>
                    <p>Support is provided for our users via our Discord server - a place where all team members reside.</p>
                    <p>Head on over and have a chat!</p>
                </Col>
            </Row>
        </Container>
        <Container className="showcase">
            <Row>
                <Col className="col" xs="12" sm="12" md="6" style={{marginBottom: '20px'}}>
                    <img src={DiscordScreenshot} alt="Discord" className="showcase-image" />
                </Col>
                <Col className="col" xs="12" sm="12" md="6" style={{display: 'flex'}}>
                    <div className="align-middle">
                        <h3>Join the conversation!</h3>
                        <p>
                            We actively talk to our users and offer guidance and help to all that ask for it. Have a problem with Docker? Found a bug in one of our containers? Or just want to say "hi"? You are welcome to join our server and be part of the ever expanding conversation. Click on the icon below to join our server.
                        </p>
                        <p>
                            <a href="https://discord.gg/YWrKVTn" target="_blank"><FontAwesomeIcon icon={DiscordIcon} style={{color: '#7289DA', fontSize: '5rem'}} /></a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default IndexPage
