import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Nav from '../Nav/Nav'
import MediaList from '../MediaList/MediaList'
import DetailPage from '../DetailPage/DetailPage'

class App extends Component {
  constructor() {
    super();

    this.movieProps = {
      displayWord: 'Movies',
      linkWord: '/movie',
      haveWord: '/owned',
      apiWord: 'movie',
      titleWord: 'title',
      setSearchResults: this.setMovieSearchResults,
    };
    this.showProps = {
      displayWord: 'TV Shows',
      linkWord: '/show',
      haveWord: '/owned',
      apiWord: 'tv',
      titleWord: 'name',
      setSearchResults: this.setShowSearchResults,
    };

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
      wishListMovies: [],
      wishListTvShows: [],
      movieSearchResults: [],
      showSearchResults: [],
    }
    this.addToMyMovies = this.addToMyMovies.bind(this)
  }

  componentDidMount = async() => {
    await this.setMovieSearchResults()
    await this.setShowSearchResults()
    // console.log(this.state.popularMovies)
    // console.log(this.state.popularTvShows)
  }

  setMovieSearchResults = async(response) => {
    if (!response) {
      response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=66b22cb2598318b06f69e25cb751c2ad&sort_by=popularity.desc`)
    }
    
    this.setState({
      movieSearchResults: response.data.results
    })
  }

  setShowSearchResults = async(response) => {
    if (!response) {
      response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=66b22cb2598318b06f69e25cb751c2ad&sort_by=popularity.desc`)
    }

    this.setState({
      showSearchResults: response.data.results
    })
  }

  addToMyMovies = (movie) => {
    const tempList = this.state.listOfMovies
    tempList.push(movie)
    console.log(tempList)
    this.setState({
      listOfMovies: tempList
    })
  }

  addToMyShows = (show) => {
    const tempList = this.state.listOfTvShows
    tempList.push(show)
    console.log(tempList)
    this.setState({
      listOfTvShows: tempList
    })
  }
  addToShowWishList =(show) => {
    const tempList =this.state.wishListTvShows
    tempList.push(show)
    console.log(tempList)
    this.setState({
      wishListTvShows: tempList
    })
  }
  addToMovieWishList =(movie) => {
    const tempList = this.state.wishListMovies
    tempList.push(movie)
    console.log(tempList)
    this.setState({
      wishListMovies: tempList
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/movies" render={(routerProps) => <MediaList {...routerProps} media={this.state.movieSearchResults} properties={this.movieProps} otherProps={this.showProps} /> }/>
            <Route path="/shows" render={(routerProps) => <MediaList {...routerProps} media={this.state.showSearchResults} properties={this.showProps} otherProps={this.movieProps} /> }/>

            <Route path="/movie/:id" render={(routerProps) => <DetailPage {...routerProps} movies={this.state.movieSearchResults} addMovieWishListClick={this.addToMovieWishList} addMovieListClick={this.addToMyMovies}/> }/>
            <Route path="/show/:id" render={(routerProps) => <DetailPage {...routerProps} shows={this.state.showSearchResults} addShowWishListClick={this.addToShowWishList} addShowListClick={this.addToMyShows}/> }/>

            <Route path="/owned/movies" render={(routerProps) => <MediaList {...routerProps} media={this.state.listOfMovies} properties={this.movieProps} otherProps={this.showProps} /> }/>
            <Route path="/owned/shows" render={(routerProps) => <MediaList {...routerProps} media={this.state.listOfTvShows} properties={this.showProps} otherProps={this.movieProps} /> }/>
            <Route path="/wish/movies" render={(routerProps) => <MediaList {...routerProps} media={this.state.wishListMovies} properties={this.movieProps} otherProps={this.showProps} /> }/>
            <Route path="/wish/shows" render={(routerProps) => <MediaList {...routerProps} media={this.state.wishListTvShows} properties={this.movieProps} otherProps={this.showProps} /> }/>

            <Route path="/owned/movie/:id" render={(routerProps) => <DetailPage {...routerProps} movies={this.state.listOfMovies} /> }/>
            <Route path="/owned/show/:id" render={(routerProps) => <DetailPage {...routerProps} shows={this.state.listOfTvShows} /> }/>
            <Route path="/wish/movie/:id" render={(routerProps) => <DetailPage {...routerProps} movies={this.state.wishListMovies} /> }/>
            <Route path="/wish/show/:id" render={(routerProps) => <DetailPage {...routerProps} shows={this.state.wishListTvShows} /> }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
