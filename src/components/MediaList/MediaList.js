import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

    createLinksToMedia = (media, destination, title) => {
        return media.map(item => (
            <div key={item.id}>
                <p><Link to={`/${destination}/` + item.id}>{item[title]}</Link></p>
            </div>
        ))
    } 
 
    render() {
        const variables = this.assignMediaVariables()
        const media = variables[0]
        const linkWords = variables[1]
        const apiValue = variables[2]
        const linksToMedia = this.createLinksToMedia(media, linkWords[0], linkWords[1])

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