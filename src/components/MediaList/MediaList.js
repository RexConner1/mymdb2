import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage'

class MediaList extends Component {
    render() {
        const media = this.props.movies.map(item => {
            return <DetailPage item={item} key={item.id} />
        })

        return (
            <div>
                {media}
            </div>
        );
    }
}

export default MediaList;