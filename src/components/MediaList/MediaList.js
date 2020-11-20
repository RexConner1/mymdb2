import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MediaList extends Component {
    render() {
        const media = this.props.movies ? this.props.movies : this.props.shows
        const linksToMedia = media.map(item => {
            return (
                <div key={item.id}>
                    <p><Link to={"/movie/" + item.id}>{item.title}</Link></p>
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