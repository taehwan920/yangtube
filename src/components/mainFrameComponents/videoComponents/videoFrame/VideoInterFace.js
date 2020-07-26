import React from 'react';
import VideoGradient from './videoInterface/VideoGradient';
import VideoBottom from './videoInterface/VideoBottom';

export default class extends React.Component {
    render() {
        const { theaterMode, toggleTheater, pauseVideo, videoActivated, videoPaused } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
                <VideoBottom
                    theaterMode={theaterMode}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    videoActivated={videoActivated}
                    videoPaused={videoPaused}
                />
            </React.Fragment>
        )
    }
}