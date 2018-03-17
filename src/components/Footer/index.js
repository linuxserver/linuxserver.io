import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer font-small blue pt-4 mt-4">
                <Container>
                    <Row>

                        <Col md="6">

                        </Col>

                        <Col md="6">

                        </Col>
                    </Row>
                </Container>

                <div className="footer-copyright py-3 text-center">
                    &copy; 2018 Copyright: LinuxServer
                </div>

            </footer>
        );
    }
}
