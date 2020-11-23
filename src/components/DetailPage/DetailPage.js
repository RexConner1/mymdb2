import React, { Component } from "react"; 

class DetailPage extends Component {
    render(){

    let media = this.props.movies ? this.props.movies : this.props.shows
    media = media.find(info => info.id == this.props.match.params.id)

    return (
        <div className='film-details'>
            <h1>DETAILS</h1>
            <h2>{this.props.movies ? media.title : media.name}</h2>
            <p>{this.props.movies ? media.releaseDate : media.first_air_date}</p>
            <h3>{this.props.movies ? media.overview : media.overview}</h3>
            
            {/* {details} */}
        </div>
    )
}
}

export default DetailPage; 

