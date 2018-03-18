import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ExclamationIcon from '@fortawesome/fontawesome-free-solid/faExclamationCircle'

const NotFoundPage = () => (
    <div>
        <TitleAndMetaTags title="404 - LinuxServer" />
        <Container className="not-found">
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
    </div>
)

export default NotFoundPage
