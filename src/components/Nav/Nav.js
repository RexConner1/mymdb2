import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        const media = this.props.media
        const properties = this.props.properties

        const updateMedia = (e) => {
            e.preventDefault()
            this.props.setMedia(e.target.innerHTML)
            this.props.setMedia(e.target.innerHTML === properties.movie.displayWord ? properties.movie : properties.show)
        }

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">myMDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title={media.displayWord} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/movies" onClick={(e) => updateMedia(e)}>{properties.movie.displayWord}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/shows" onClick={(e) => updateMedia(e)}>{properties.show.displayWord}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href={media.searchWord}>Search</Nav.Link>
                        <Nav.Link href={media.haveWord + media.searchWord}>My Collection</Nav.Link>
                        <Nav.Link eventKey={2} href={media.wantWord + media.searchWord}>Wish List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;