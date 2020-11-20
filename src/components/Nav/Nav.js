import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link to="/" className="navbar-brand">myMDB</Link>
                    </div>
                    <ul class="nav navbar-nav">
                        <Link to="/movies" className="navbar-brand">Movies</Link>
                        <Link to="/shows" className="navbar-brand">TV Shows</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;