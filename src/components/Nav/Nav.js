import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">myMDB</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <Link to="/movies" className="navbar-brand">Movies</Link>
                        <Link to="/shows" className="navbar-brand">TV Shows</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;