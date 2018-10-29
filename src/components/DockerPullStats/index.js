import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

let formatNumber = function(num) {

    var array = num.toString().split('');
    var index = -3;
    while (array.length + index > 0) {
        array.splice(index, 0, ',');
        index -= 4;
    }
    return array;
}

let renderNumber = function(value, index) {

    if (value === ',') {
        return <div className="pull-stat-comma" key={index}>{value}</div>
    } else {
        return <div className="pull-stat-number" key={index}>{value}</div>
    }
}

export default class DockerPullStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            count: 0
        }
    }

    componentDidMount() {

        fetch('https://next.linuxserver.io/dockerhub-jsonstats/stats')
            .then(response => response.json())
            .then(result => {

                let aggregatedCount = 0, aggregatedArray;

                result.forEach((image) => {
                    aggregatedCount += image.count;
                });

                aggregatedArray = formatNumber(aggregatedCount);

                this.setState({
                    isLoaded: true,
                    count: aggregatedArray
                });
            });
    }

    render() {

        const { error, isLoaded, count } = this.state;

        if (isLoaded) {

            return (
                <div>
                    <Row>
                        <Col>
                            <h3>One <strong>BILLION</strong> pulls from <a href="https://hub.docker.com/u/linuxserver/" target="_blank">Docker Hub</a>!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            A huge thank you to everyone that has made this possible!
                        </Col>
                    </Row>
                    <Row className="pull-stat-numbers">
                        <Col>
                            {
                                count.map((numberValue, index) => renderNumber(numberValue, index))
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Our commitment is to the community and our users. Over the years, we have worked hard to build a name that resonates with home server enthusiasts and newcomers. Our images are for everyone, and always will be.</p>
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
