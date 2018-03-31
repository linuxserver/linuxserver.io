import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import DockerImageList from '../components/DockerImageList';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import DockerBrandImage from '../images/docker-vertical.png';

const ImagesPage = () => (<div>
    <TitleAndMetaTags title="Images built by us - LinuxServer"/>
    <Container className="our-images">
        <Row>
            <Col>
                <h1>Our Images</h1>
            </Col>
        </Row>
    </Container>
    <Container className="showcase our-images">
        <Row>
            <Col className="col mb-5" xs="12" sm="12" md="6">
                <img src={DockerBrandImage}/>
            </Col>
            <Col className="col mb-5" xs="12" sm="12" md="6" style={{display: 'flex'}}>
                <div className="align-middle">
                    <h3>From us, to Docker Hub, to you.</h3>
                    <p>
                        We build all of our images on our own <a href="https://ci.linuxserver.io" target="_blank">pipeline</a>, after which get uploaded directly to <a href="https://hub.docker.com/u/linuxserver/" target="_blank">Docker Hub</a>. The list of our images is ever expanding as we get new requests from our users. We provide images for the <code>x86</code>, <code>armhf</code> and <code>arm64</code> architectures.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
    <Container className="our-images">
        <Row>
            <Col sm="12">
                <h2>All Images</h2>
            </Col>
            <Col sm="12">
                <DockerImageList />
            </Col>
        </Row>
    </Container>
</div>)

export default ImagesPage
