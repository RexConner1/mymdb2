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
    const movie = this.props.movies.find(movie => movie.id == this.props.match.params.id)

    return (
        <div className='film-details'>
            <h1>DETAILS</h1>
            <h2>{movie.title}</h2>
            {/* {details} */}
        </div>
    )
}
}

export default DetailPage; 

