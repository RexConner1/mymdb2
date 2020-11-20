import React, { Component } from "react"; 

class DetailPage extends Component {
    render(){
// let DetailPage = props => {
//     let details 

//     let posterUrl = ''
//     let backdropUrl = ''

    // if (movie.id){
    //     details =(

    //     )

    // } 
    // if (tvShow.id){
    //     details =(

    //     )

    // } else {
    //     details =(

    //     )
    // }
    let media = this.props.movies ? this.props.movies : this.props.shows
    media = media.find(info => info.id == this.props.match.params.id)

    return (
        <div className='film-details'>
            <h1>DETAILS</h1>
            <h2>{this.props.movies ? media.title : media.name}</h2>
            {/* {details} */}
        </div>
    )
}
}

export default DetailPage; 

