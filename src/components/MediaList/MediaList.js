import React, { Component } from 'react';

class MediaList extends Component {
    render() {
        const media = this.props.media.map(singleMedia => {
            <DetailPage media={singleMedia} key={singleMedia.id} />
        })

        return (
            <div>
                <p>MediaList</p>
            </div>
        );
    }
}

export default MediaList;