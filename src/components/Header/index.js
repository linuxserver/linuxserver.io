import React from 'react'
import Link from 'gatsby-link'

import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import GitHubIcon from '@fortawesome/fontawesome-free-brands/faGithub'
import PayPalIcon from '@fortawesome/fontawesome-free-brands/faPaypal'
import HomeIcon from '@fortawesome/fontawesome-free-solid/faHome'

export default class Header extends React.Component {

    constructor(props) {

        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<div>
                <Navbar className="main-nav" expand="md">
                    <Container>
                        <NavbarBrand href="/">LinuxServer</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/"><FontAwesomeIcon icon={HomeIcon} /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://blog.linuxserver.io">Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Link to="/our-images" className="nav-link" activeClassName="active">Images</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/docs" className="nav-link" activeClassName="active">Docs</Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/linuxserver"><FontAwesomeIcon icon={GitHubIcon} /> Github</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Link to="/donate" className="nav-link" activeClassName="active"><FontAwesomeIcon icon={PayPalIcon} /> Donate</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
        </div>);
    }
}
