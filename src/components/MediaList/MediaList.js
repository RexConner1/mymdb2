import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MediaList extends Component {
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
                {linksToMedia}
            </div>
        );
    }
}

export default MediaList;