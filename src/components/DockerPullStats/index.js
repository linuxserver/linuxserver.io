import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

export default class DockerPullStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            images: []
        }
    }

    componentDidMount() {

        fetch('https://next.linuxserver.io/dockerhub-jsonstats/stats')
            .then(response => response.json())
            .then(result => {

                this.setState({
                    isLoaded: true,
                    images: result
                });
            });
    }

    render() {

        const { error, isLoaded, images } = this.state;

        if (isLoaded) {

            return (
                <div>
                    <Row>
                        <Col>
                            <h3>Millions of pulls from <a href="https://hub.docker.com/u/linuxserver/" target="_blank">Docker Hub</a> and counting...</h3>
                        </Col>
                    </Row>
                    <Row className="pull-stat-numbers">
                        <Col>
                            <div className="pull-stat-number">3</div>
                            <div className="pull-stat-number">5</div>
                            <div className="pull-stat-number">5</div>
                            <div className="pull-stat-comma">,</div>
                            <div className="pull-stat-number">8</div>
                            <div className="pull-stat-number">4</div>
                            <div className="pull-stat-number">3</div>
                            <div className="pull-stat-comma">,</div>
                            <div className="pull-stat-number">2</div>
                            <div className="pull-stat-number">5</div>
                            <div className="pull-stat-number">0</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>We pride ourselves on the commitment we make to the community and our users. Over the years, we have worked hard to build a name that resonates with home server enthusiasts and newcomers. Our images are for everyone, and always will be.</p>
                        </Col>
                    </Row>
                </div>
            );
        } else {

            return (
                <div></div>
            )
        }
    }
}
