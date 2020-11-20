import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MediaList extends Component {
    render() {
        const test = this.props.movies ? this.props.movies : this.props.shows
        const media = test.map(item => {
            return (
                <div key={item.id}>
                    <p><Link to={"/movies/" + item.id}>{item.title}</Link></p>
                </div>
            )
        })

        return (
            <div>
                {media}
            </div>
        );
    }
}

export default MediaList;