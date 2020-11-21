import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class MediaList extends Component {
    searchForTitle = async() => {
        const response = await axios.get('https://api.themoviedb.org/3/search/tv?api_key=66b22cb2598318b06f69e25cb751c2ad&query=Lost')
        console.log(response.data.results);
    }

    searchForUPC = async(upcNumber='786936858136') => {
        const response = await axios.get(`https://api.upcdatabase.org/product/786936858136?apikey=2F1653F46E6223E30135DB3D80B8C22D`)
        console.log(response.data);
    }

    render() {
        const media = this.props.movies ? this.props.movies : this.props.shows
        const linksToMedia = media.map(item => {
            const linkWords = this.props.movies ? ['movie', 'title'] : ['show', 'name'];
            return (
                <div key={item.id}>
                    <p><Link to={`/${linkWords[0]}/` + item.id}>{item[linkWords[1]]}</Link></p>
                </div>
            )
        })

        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.searchForTitle()
                }}>
                    <label htmlFor="titleSearch">Title Search:</label>
                    <input name="titleSearch" id="titleSearch" />
                    <button>Submit</button>
                </form>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.searchForUPC()
                }}>
                    <label htmlFor="upcSearch">UPC Search:</label>
                    <input name="upcSearch" id="upcSearch" />
                    <button>Submit</button>
                </form>
                {linksToMedia}
            </div>
        );
    }
}

export default MediaList;