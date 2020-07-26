import React from 'react';
import VideoGradient from './videoInterface/VideoGradient';
import VideoBottom from './videoInterface/VideoBottom';

export default class extends React.Component {
    render() {
        const { videoActivated } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
                {videoActivated ? <VideoBottom /> : null}
            </React.Fragment>
        )
    }
}