import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

class MediaList extends Component {
    render() {
        const linksToMedia = this.props.media.map(item => (
            <div key={item.id}>
                <p><Link to={`/${this.props.properties.linkWord}/` + item.id}>{item[this.props.properties.titleWord]}</Link></p>
            </div>
        ))

        return (
            <div>
                <SearchBar name="titleSearch" title="Title Search:" properties={this.props.properties} />
                <SearchBar name="upcSearch" title="UPC Search:" properties={this.props.properties} />
                {linksToMedia}
            </div>
        );
    }
}

export default MediaList;