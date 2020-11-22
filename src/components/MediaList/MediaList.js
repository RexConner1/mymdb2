import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

class MediaList extends Component {
    assignMediaVariables = () => {
        let media = []
        let linkWords = []
        if (this.props.movies) {
            media = this.props.movies
            linkWords = ['movie', 'title']
        } else {
            media = this.props.shows
            linkWords = ['movie', 'name']
        }
        return [media, linkWords]
    }

    render() {
        const variables = this.assignMediaVariables()
        const media = variables[0]
        const linkWords = variables[1]

        const linksToMedia = media.map(item => {
            return (
                <div key={item.id}>
                    <p><Link to={`/${linkWords[0]}/` + item.id}>{item[linkWords[1]]}</Link></p>
                </div>
            )
        })

        return (
            <div>
                <SearchBar name="titleSearch" title="Title Search:" value={linkWords[0]} />
                <SearchBar name="upcSearch" title="UPC Search:" value={linkWords[1]} />
                {linksToMedia}
            </div>
        );
    }
}

export default MediaList;