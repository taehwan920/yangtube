import React from 'react';
import VideoGradient from './videoInterface/VideoGradient';
import VideoBottom from './videoInterface/VideoBottom';

export default class extends React.Component {
    render() {
        const { pauseVideo, videoActivated, videoPaused } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
                <VideoBottom
                    pauseVideo={pauseVideo}
                    videoActivated={videoActivated}
                    videoPaused={videoPaused}
                />
            </React.Fragment>
        )
    }
}