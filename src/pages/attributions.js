import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

const ImagesPage = () => (
    <div>
        <TitleAndMetaTags title="Attributions - LinuxServer" />
        <Container className="attributions">
            <Row>
                <Col>
                    <h1>Attributions</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default ImagesPage
