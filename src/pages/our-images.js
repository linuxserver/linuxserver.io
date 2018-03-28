import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import DockerImageList from '../components/DockerImageList';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const ImagesPage = () => (<div>
    <TitleAndMetaTags title="Images built by us - LinuxServer"/>
    <Container className="our-images">
        <Row>
            <Col>
                <h1>Images built by us</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <DockerImageList />
            </Col>
        </Row>
    </Container>
</div>)

export default ImagesPage
