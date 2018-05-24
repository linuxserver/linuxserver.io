import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ExternalLinkIcon from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'

import PoweredByDOImage from '../../images/DO_Powered_by_Badge_white.png';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small blue mt-4">
                <Container>
                    <Row>

                        <Col md="4">
                            <p>&copy; 2018 Copyright</p>
                            <h5>LinuxServer.io</h5>
                            <a href="https://www.digitalocean.com/" target="_blank"><img src={PoweredByDOImage} style={{width: '50%'}}/></a>
                        </Col>

                        <Col md="4">
                            <h5>Links</h5>
                            <ul>
                                <li><Link to="/team">The Team</Link></li>
                                <li><Link to="/donate">Donate</Link></li>
                                <li><a href="https://blog.linuxserver.io" target="_blank">Blog<span><FontAwesomeIcon icon={ExternalLinkIcon} /></span></a></li>
                                <li><Link to="/attributions">Attributions</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </Col>

                        <Col md="4">
                            <h5>Channels</h5>
                            <ul>
                                <li><a href="https://hub.docker.com/u/linuxserver/" target="_blank">Docker Hub<span><FontAwesomeIcon icon={ExternalLinkIcon} /></span></a></li>
                                <li><a href="https://github.com/linuxserver" target="_blank">GitHub<span><FontAwesomeIcon icon={ExternalLinkIcon} /></span></a></li>
                                <li><a href="https://twitter.com/linuxserverio" target="_blank">Twitter<span><FontAwesomeIcon icon={ExternalLinkIcon} /></span></a></li>
                                <li><a href="https://www.facebook.com/linuxserver.io/" target="_blank">Facebook<span><FontAwesomeIcon icon={ExternalLinkIcon} /></span></a></li>
                                <li><a href="https://discord.gg/YWrKVTn" target="_blank">Discord<span><FontAwesomeIcon icon={ExternalLinkIcon} /></span></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </footer>
        );
    }
}
