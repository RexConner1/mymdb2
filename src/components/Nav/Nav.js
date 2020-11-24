import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        const movies = "Movies"
        const shows = "TV Shows"

        const updateMedia = (e) => {
            e.preventDefault()
            this.props.setMedia(e.target.innerHTML)
        }

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">myMDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title={this.props.media} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/movies" onClick={(e) => updateMedia(e)}>{movies}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/shows" onClick={(e) => updateMedia(e)}>{shows}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/owned/movies">My Collection</Nav.Link>
                        <Nav.Link eventKey={2} href="/wish/movies">Wish List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;