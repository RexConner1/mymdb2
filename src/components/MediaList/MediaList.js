import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

class MediaList extends Component {
    render() {
        const properties = this.props.properties
        
        let detail
        if (this.props.location.pathname.includes(properties.haveWord)) {
            detail = (
                <div>
                    <h1>My Collection</h1>
                    <h4><em><Link to={properties.haveWord + this.props.otherProps.linkWord + "s"}>(Go to {this.props.otherProps.displayWord})</Link></em></h4>
                </div>
            )
        } else {
            detail = (
                <div>
                    <h1>Search</h1>
                    <SearchBar name="titleSearch" title="Title Search:" properties={properties} />
                    <SearchBar name="upcSearch" title="UPC Search:" properties={properties} />
                </div>
            )
        }

        const linkAddress = this.props.location.pathname.includes(properties.haveWord) ? properties.haveWord + properties.linkWord : properties.linkWord
        const linksToMedia = this.props.media.map(item => (
            <div key={item.id}>
                <p><Link to={`${linkAddress}/` + item.id}>{item[properties.titleWord]}</Link></p>
            </div>
        ))

        return (
            <div>
                {detail}
                {linksToMedia}
            </div>
        );
    }
}

export default MediaList;