import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

export default class DockerPullStats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Let the numbers speak for themselves</h3>
                    </Col>
                </Row>
                <Row className="pullStatNumbers">
                    <Col>
                        <div className="pullStatNumber">3</div>
                        <div className="pullStatNumber">5</div>
                        <div className="pullStatNumber">5</div>
                        <div className="pullStatNumber">8</div>
                        <div className="pullStatNumber">4</div>
                        <div className="pullStatNumber">3</div>
                        <div className="pullStatNumber">2</div>
                        <div className="pullStatNumber">5</div>
                        <div className="pullStatNumber">0</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>We pride ourselves on the commitment we make to the community and our users. Over the years, we have worked hard to build a name that resonates with home server enthusiasts and newcomers. Our images are for everyone, and always will be.</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
