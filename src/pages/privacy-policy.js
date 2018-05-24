import React from 'react'

import { Container, Row, Col, Table } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'

const PrivacyPolicyPage = () => (
    <div>
        <TitleAndMetaTags title="Privacy Policy - LinuxServer" />
        <Container className="privacy-policy">
            <Row className="not-found">
                <Col>
                    <h3>Privacy Policy</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Overview</h4>
                    <p>
                        LinuxServer.io takes your privacy seriously, and as such, this document is designed to clearly outline what kind of data LinuxServer.io collects, and how it uses it. Personal information is any data with which a user (you) could be personally identified.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>General</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Who collects your data</h5>
                    <p>
                        All data collected on this website (linuxserver.io), its blog (blog.linuxserver.io) and its forum (discourse.linuxserver.io) is processed by LinuxServer's Data Protection Officer.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>What data is collected?</h5>
                    <p>
                        The level of data that LinuxServer.io collects is dependent on which site you visit. Some of this data is classified as Personally Identifiable Information - data that can be directly linked to you as a person or entity. Not all information logged or obtained by LinuxServer.io is personally identifiable.
                    </p>
                    <ol>
                        <li>
                            Website
                            <ul>
                                <li>None</li>
                            </ul>
                        </li>
                        <li>
                            Blog
                            <ul>
                                <li>Browser vendor and version</li>
                                <li>Operating System</li>
                                <li>Your Device - Model and Brand</li>
                                <li>Screen Resolution</li>
                                <li>IP Address (anonymised by removing the last two digits)</li>
                                <li>Referral Website</li>
                            </ul>
                        </li>
                        <li>
                            Forum
                            <ul>
                                <li>IP Address (Logging)</li>
                                <li>Your Name</li>
                                <li>Your Email Address</li>
                                <li>Your Username</li>
                            </ul>
                        </li>
                    </ol>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>How your data is used</h5>
                    <p>
                        The data collected by LinuxServer.io is used to help improve its services to its users. Details such as IP address (broad geolocation), referral websites, and device type helps LinuxServer.io understand on a broad basis where its readers/users are coming from, how long they stay, and what kind of content they gravitate to. If you sign up to the forum, the email address you provide will be used for login and password recovery purposes. No data collected by LinuxServer.io is used to tailor specific user journeys for any individual or entity. You data is not used for marketing purposes and will not be used to attempt to sell products to you.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>How your data is stored</h5>
                    <p>
                        All analytical data is stored on a privately hosted server provided by Hetzner in a secure database. Only the Data Protection Officer has direct access to this data via the database. The data is made available to select LinuxServer.io staff via its analytics web interface. Forum-related data is stored as part of the forum database, which is secured and rendered inaccessible to those without the required credentials.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Third-party access to your data</h5>
                    <p>
                        None of the data collected and used by LinuxServer.io is accessible by any third party. We do not sell your data to any third-party. We never will.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Third-party data used by LinuxServer.io</h5>
                    <p>
                        LinuxServer.io provides an API that retrieves the pull count of Docker images hosted on Docker Hub. This data is anonymous and can not be used to identify an individual user.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Data Collection Methods</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Server Log Files</h5>
                    <p>
                        When browsing to any site owned by LinuxServer.io, a web access log is generated by the underlying web server and/or software running in it. These logs contain information such as:
                    </p>
                    <ul>
                        <li>Request access time</li>
                        <li>IP address</li>
                        <li>Referal URL/address</li>
                        <li>Operating sytem</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Cookies</h5>
                    <p>
                        Cookies are small pieces of data that reside in your web browser. LinuxServer.io uses analytical cookies to identify you as a "session user" in order for your journey to be tracked when you browse the LinuxServer.io blog. The content of this cookie does not contain any personally identifiable information. It does, however, link your page views to your anonymised IP address.
                    </p>
                    <Table>
                        <thead>
                            <tr>
                                <th>Cookie Name</th>
                                <th>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>_pk_id</td>
                                <td>A unique identifer randomly generated which is used by the analytics to track your journey through the blog.</td>
                            </tr>
                            <tr>
                                <td>_pk_ses</td>
                                <td>A session identifier - used in conjunction with your analytics identifier.</td>
                            </tr>
                            <tr>
                                <td>_pk_ref</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>_pk_cvar</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Managing your data</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Revocation of consent</h5>
                    <p>
                         As part of the registration process for the forum, express consent must be given by you before completion allowing LinuxServer.io to use the data you provide to contact you if required. You may at any time revoke consent for LinuxServer.io to contact you regarding updates to its services.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Your rights regarding the data LinuxServer.io holds about you</h5>
                    <p>
                        You have the right to request some or all of the data that LinuxServer.io holds about you. You can do this by contacting LinuxServer.io's Data Protection Officer (outlined below). LinuxServer.io will ensure to provide you with any personally identifiable information held about you. This does not include analytical data used for blog tracking as all analytical data is anonymised. LinuxServer.io holds very little personally identifiable information about its users - if you request this data, you should expect to receive a relatively small amount of data back.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Contacting the Data Protection Officer</h5>
                    <p>
                        In accordance with the General Data Protection Regulation (GDPR), LinuxServer.io processes all data as both a Processor and as a Controller. If you wish to contact LinuxServer.io's Data Protection Officer regarding your data, you can email them at: <a href="mailto:dataprotectionofficer@linuxserver.io">dataprotectionofficer@linuxserver.io</a>. Contact can be made in order to:
                    </p>
                    <ul>
                        <li>Request access to any personally identifiable information that LinuxServer.io has about you. This data can then be used by you fur your own purposes.</li>
                        <li>Correct any personally identifiable information that LinuxServer.io has about you.</li>
                        <li>Request that any part of or all personally identifiable information held by LinuxServer.io about you be removed permanently.</li>
                        <li>Restrict, suppress or block processing of your personally identifiable information - doing so may restrict your ability to access the forum.</li>
                        <li>Gain further understanding of any information LinuxServer.io holds about you.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Payment service providers</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>PayPal</h5>
                    <p>
                        LinuxServer.io provides a means for its users to donate via PayPal. The provider of this service is PayPal (Europe) S.à.r.l & Cie, S.C.A. (22-24 Boulevard Royal, L-2449 Luxembourg. Any donations/payments made to LinuxServer.io will include the payment data supplied to PayPal. As part of internal book keeping, LinuxServer.io stores in part, some information pertaining to any transaction made by you via PayPal. You maintain the right to request this data at any time.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default PrivacyPolicyPage
