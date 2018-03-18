import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

const ImagesPage = () => (
    <div>
        <TitleAndMetaTags title="Images built by us - LinuxServer" />
        <Container className="our-images">
            <Row>
                <Col>
                    <h1>Images built by us</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Coming Soon!</p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default ImagesPage
