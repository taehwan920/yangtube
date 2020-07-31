import React from 'react';
import VideoItem from './makeVideoItems/VideoItem';

export default class extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { doubleRest } = this.props;
        return (
            <React.Fragment>
                {doubleRest.map(video => {
                    return (
                        <VideoItem
                            video={video}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};