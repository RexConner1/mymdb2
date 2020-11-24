import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            // <nav className="navbar navbar-inverse">
            //     <div className="container-fluid">
            //         <div className="navbar-header">
            //             <Link to="/" className="navbar-brand">myMDB</Link>
            //         </div>
            //         <ul className="nav">
            //             <Link to="/movies" className="navbar-brand">Movies</Link>
            //             <Link to="/shows" className="navbar-brand">TV Shows</Link>
            //             <Link to="/owned/movies" className="navbar-brand">My Collection</Link>
            //             <Link to="/wish/movies" className="navbar-brand">Wish List</Link>
            //         </ul>
            //     </div>
            // </nav>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">myMDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Movies" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/movies" onClick={(e) => {
                                e.preventDefault()
                                console.log(e.target)}}>
                                Movies
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/shows">TV Shows</NavDropdown.Item>
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