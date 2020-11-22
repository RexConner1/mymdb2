import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class MediaList extends Component {
    constructor() {
        super()
    }

    searchForTitle = async(title="Lost", media="movie", method="search") => {
        const response = await axios.get(`https://api.themoviedb.org/3/${method}/${media}?api_key=66b22cb2598318b06f69e25cb751c2ad&query=${title}`)
        console.log(response.data.results);
    }

    searchForUPC = async(upcNumber='786936858136') => {
        const response = await axios({
            method: 'get',
            url: 'https://api.upcdatabase.org/product/786936858136?apikey=2F1653F46E6223E30135DB3D80B8C22D',
            headers: { 
                "Access-Control-Allow-Origin": "*",
                'x-apikey': '2F1653F46E6223E30135DB3D80B8C22D',
                'Cookie': 'upcdatabaseorg=lkgb06nvf39jequ927ki6nkf9j',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
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
                    if (e.target.titleSearch.value) {
                        this.searchForTitle(e.target.titleSearch.value, this.props.movies ? "movie" : "tv")
                    }
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