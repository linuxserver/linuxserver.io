import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

const DonatePage = () => (
    <div>
        <TitleAndMetaTags title="Donations - LinuxServer" />
        <Container className="donate">
            <Row>
                <Col>
                    <h1>Donations</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        We do not advertise on our site, or through our images, so the upkeep of our services is funded directly out of the kind donations from you, our users! We are very proud of the service we provide, but we can't do it alone. If you can spare it, please consider donating so we can keep the lights on for another month.
                    </p>
                    <p>Thank you, from everyone at LinuxServer.</p>
                    <p>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                            <input type="hidden" name="cmd" value="_s-xclick"/>
                            <input type="hidden" name="hosted_button_id" value="PVYA74KK8C9D2"/>
                            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"/>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                        </form>
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default DonatePage
