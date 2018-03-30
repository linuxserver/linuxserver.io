import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

const ImagesPage = () => (
    <div>
        <TitleAndMetaTags title="Attributions - LinuxServer" />
        <Container className="attributions" style={{marginBottom: '100px'}}>
            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <h1>Attributions</h1>
                </Col>
            </Row>
            <Row style={{textAlign: 'left'}}>
                <Col>
                    <ul>
                        <li>
                            Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                        </li>
                        <li>
                            The Docker, Inc name and accompanying logo are registered trademarks of Docker, Inc.
                        </li>
                        <li>
                            LinuxServer.io is in no way affilliated or partnered with Docker, Inc.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
)

export default ImagesPage
