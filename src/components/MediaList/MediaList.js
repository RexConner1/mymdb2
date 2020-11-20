import React, { Component } from 'react';
import DetailPage from '../DetailPage/DetailPage'

class MediaList extends Component {
    render() {
        const media = this.props.media.map(item => {
            <DetailPage media={item} key={item.id} />
        })

        return (
            <div>
                {media}
            </div>
        );
    }
}

export default MediaList;