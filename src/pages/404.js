import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ExclamationIcon from '@fortawesome/fontawesome-free-solid/faExclamationCircle'

const NotFoundPage = () => (
    <Container className="notFound">
        <Row>
            <Col>
                <h3>Not Found</h3>
                <p>
                    The page you were looking for doesn't exist.
                </p>
                <p>
                    <FontAwesomeIcon icon={ExclamationIcon} style={{color: 'red', fontSize: '5rem'}} />
                </p>
            </Col>
        </Row>
    </Container>
)

export default NotFoundPage
