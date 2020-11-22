import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

class MediaList extends Component {
    assignMediaVariables = () => {
        let media = []
        let linkWords = []
        let apiValue = ""
        if (this.props.movies) {
            media = this.props.movies
            linkWords = ['movie', 'title']
            apiValue = 'movie'
        } else {
            media = this.props.shows
            linkWords = ['show', 'name']
            apiValue = 'tv'
        }
        return [media, linkWords, apiValue]
    }

    render() {
        const variables = this.assignMediaVariables()
        const media = variables[0]
        const linkWords = variables[1]
        const apiValue = variables[2]

        const linksToMedia = media.map(item => {
            return (
                <div key={item.id}>
                    <p><Link to={`/${linkWords[0]}/` + item.id}>{item[linkWords[1]]}</Link></p>
                </div>
            )
        })

        return (
            <div>
                <SearchBar name="titleSearch" title="Title Search:" value={apiValue} />
                <SearchBar name="upcSearch" title="UPC Search:" value={apiValue} />
                {linksToMedia}
            </div>
        );
    }
}

export default MediaList;