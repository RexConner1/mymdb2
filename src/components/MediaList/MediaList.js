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
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Hi')
                }}>
                    <label htmlFor="titleSearch">Title Search:</label>
                    <input name="titleSearch" id="titleSearch" />
                    <button>Submit</button>
                </form>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Hello')
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