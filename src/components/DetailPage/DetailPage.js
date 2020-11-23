import React, { Component } from "react"; 

class DetailPage extends Component {
    render(){

    let media = this.props.movies ? this.props.movies : this.props.shows
    media = media.find(info => info.id == this.props.match.params.id)

    let poster = this.props.movies ? media.poster_path : media.poster_path;
    let posterURL = "https://image.tmdb.org/t/p/w780/" + poster; 
    

    console.log(this.props)
    console.log(posterURL)

    return (

        <div className='film-details'>
            <h1>DETAILS</h1>
            <h2>{this.props.movies ? media.title : media.name}</h2>
            <p>{this.props.movies ? media.release_date : media.first_air_date}</p>
            <h3>{this.props.movies ? media.overview : media.overview}</h3> 
            {/* <p>{this.props.movies ? media.poster_path : media.poster_path}</p> */}

            <img src={posterURL} alt="Poster Image"/>
            
            {/* {details} */}
        </div>
    )
}
}

export default DetailPage; 

