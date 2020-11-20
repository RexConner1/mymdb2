import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

import './App.css';
import Nav from '../Nav/Nav'
import MediaList from '../MediaList/MediaList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfMovies: [],
      listOfTvShows: []
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/movies" render={() => <MediaList movies={this.state.listOfMovies} /> }/>
            <Route path="/shows" render={() => <MediaList show={this.state.listOfTvShows} /> }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
