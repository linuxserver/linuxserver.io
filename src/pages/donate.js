import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'
import ServerImage from '../images/server.png';
import UsersImage from '../images/users.png';

const DonatePage = () => (
    <div>
        <TitleAndMetaTags title="Donations - LinuxServer" />
        <Container className="donate">
            <Row>
                <Col>
                    <h1>Donate</h1>
                </Col>
            </Row>
        </Container>
        <Container className="showcase donate">
            <Row>
                <Col className="col mb-5" xs="12" sm="12" md="6">
                    <img src={ServerImage} alt="Server" className="showcase-image" style={{width: '40%'}} />
                </Col>
                <Col className="col mb-5" xs="12" sm="12" md="6" style={{display: 'flex'}}>
                    <div className="align-middle">
                        <h3>Help us keep the lights on!</h3>
                        <p>
                            The LinuxServer group has a hefty stack of build servers, web hosts, and domains - all of which cost money to maintain and renew. Even the smallest donation from you will help us keep everything up and running so we can continue to provide our great services.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col mb-5" xs="12" sm="12" md="6" style={{display: 'flex'}}>
                    <div className="align-middle">
                        <h3>Send us some love</h3>
                        <p>
                            Everyone at LinuxServer is a volunteer. We don't get paid to do this - we try our best to make the most of our free time to continue improving what we do. If you love what we do, why not drop us a bit of beer money to say thanks. Cheers!
                        </p>
                    </div>
                </Col>
                <Col className="col mb-5" xs="12" sm="12" md="6">
                    <img src={UsersImage} alt="The Team" className="showcase-image" style={{width: '40%'}} />
                </Col>
            </Row>
        </Container>
    </div>
)

export default DonatePage
