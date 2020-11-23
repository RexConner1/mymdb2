import React, { Component } from "react"; 
import './DetailPage.css'

class DetailPage extends Component {
    render(){

    let media = this.props.movies ? this.props.movies : this.props.shows
    media = media.find(info => info.id == this.props.match.params.id)

    let poster = this.props.movies ? media.poster_path : media.poster_path;
    let posterURL = "https://image.tmdb.org/t/p/w780/" + poster; 
    

    console.log(this.props)
    console.log(posterURL)

    return (
        <div className="wrapper">
            <div className="card">
                <img src={posterURL} alt="Poster Image"/>
                <div className="descriptions">
                <h1>{this.props.movies ? media.title : media.name}</h1>
                <h7> Release Date : {this.props.movies ? media.release_date : media.first_air_date}</h7>
                <h2>Summary</h2>
                <p>{this.props.movies ? media.overview : media.overview}</p> 
                </div>
            {/* <p>{this.props.movies ? media.poster_path : media.poster_path}</p> */}
            </div>
        </div>

    )
}
}

export default DetailPage; 

