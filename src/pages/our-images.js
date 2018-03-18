import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

const ImagesPage = () => (
    <div>
        <TitleAndMetaTags title="Images built by us - LinuxServer" />
        <Container className="not-found">
            <Row>
                <Col>
                    <h3>Images built by us</h3>
                </Col>
            </Row>
        </Container>
    </div>
)

export default ImagesPage
