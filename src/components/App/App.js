import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Nav from '../Nav/Nav'
import MediaList from '../MediaList/MediaList'
import DetailPage from '../DetailPage/DetailPage'
import MyList from '../MyList/MyList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfMovies: [
        {
          id: 24428,
          title: "The Avengers",
          poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
          backdrop_path: "/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
          releaseDate: "2012-04-25",
          overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
          vote_average: 7.7,
        },
        {
          id: 2,
          title: "Avengers: Age of Ultron",
          poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
          backdrop_path: "/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
          releaseDate: "2012-04-25",
          overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
          vote_average: 7.7,
        },        {
          id: 3,
          title: "Avengers: Infinity War",
          poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
          backdrop_path: "/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
          releaseDate: "2012-04-25",
          overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
          vote_average: 7.7,
        }
      ],
      listOfTvShows: [
        {
          id: 4607,
          name: "Lost",
          first_air_date: "2004-09-22",
          poster_path: "/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg",
          backdrop_path: "/qpZ7dcM5yDyBDP4JSQr9LRUIBRm.jpg",
          overview: "Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.",
          vote_average: 7.9,
        },    
      ],
      popularMovies: [],
      popularTvShows: [],
      // showMyList: false,
    }
  }

  componentDidMount = async() => {
    await this.getPopularMovies()
    await this.getPopularTvShows()
    // console.log(this.state.popularMovies)
    // console.log(this.state.popularTvShows)
  }

  getPopularMovies = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=66b22cb2598318b06f69e25cb751c2ad&sort_by=popularity.desc`)
    this.setState({
      popularMovies: response.data.results
    })
  }

  getPopularTvShows = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=66b22cb2598318b06f69e25cb751c2ad&sort_by=popularity.desc`)
    this.setState({
      popularTvShows: response.data.results
    })
  }

  addToMyMovies = (movie) => {
    const tempList = this.state.listOfMovies
    tempList.push(movie)

    this.setState({
      listOfMovies: tempList
    })
  }

  addToMyShows = (show) => {
    const tempList = this.state.listOfTvShows
    tempList.push(show)

    this.setState({
      listOfTvShows: tempList
    })
  }

  // lookAtMyList = (bool) => {
  //   this.setState({
  //     showMyList: bool
  //   })
  // }

  render() {
    // const movies = this.state.showMyList ? this.state.listOfMovies : this.state.popularMovies
    // const shows = this.state.showMyList ? this.state.listOfTvShows : this.state.popularTvShows

    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/movies" render={(routerProps) => <MediaList {...routerProps} movies={this.state.popularMovies} /> }/>
            <Route path="/shows" render={(routerProps) => <MediaList {...routerProps} shows={this.state.popularTvShows} /> }/>

            <Route path="/movie/:id" render={(routerProps) => <DetailPage {...routerProps} movies={this.state.popularMovies} /> }/>
            <Route path="/show/:id" render={(routerProps) => <DetailPage {...routerProps} shows={this.state.popularTvShows} /> }/>

            <Route path="/mymovies" render={(routerProps) => <MyList {...routerProps} movies={this.state.listOfMovies} /> }/>
            <Route path="/myshows" render={(routerProps) => <MyList {...routerProps} shows={this.state.listOfTvShows} /> }/>

            <Route path="/mymovie/:id" render={(routerProps) => <DetailPage {...routerProps} movies={this.state.listOfMovies} /> }/>
            <Route path="/myshow/:id" render={(routerProps) => <DetailPage {...routerProps} shows={this.state.listOfTvShows} /> }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
