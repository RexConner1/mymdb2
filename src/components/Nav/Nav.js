import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Navbar } from 'react-bootstrap';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">myMDB</Link>
                    </div>
                    <ul className="nav">
                        <Link to="/movies" className="navbar-brand">Movies</Link>
                        <Link to="/shows" className="navbar-brand">TV Shows</Link>
                        <Link to="/owned/movies" className="navbar-brand">My Collection</Link>
                        <Link to="/wish/movies" className="navbar-brand">Wish List</Link>
                    </ul>
                </div>
            </nav>

            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <Navbar.Brand href="/">myMDB</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav>
            //             <Nav.Link href="/movies">Movies</Nav.Link>
            //             <Nav.Link href="/shows">TV Shows</Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        );
    }
}

export default Nav;