import React from 'react';
import VideoContainer from './videoFrame/VideoContainer';
import VideoInterFace from './videoFrame/VideoInterFace';

export default class extends React.Component {
    state = {
        paused: false
    }
    render() {
        const { theaterMode, toggleTheater, pauseVideo, videoActivated, videoPaused } = this.props;
        return (
            <React.Fragment>
                <VideoContainer
                    theaterMode={theaterMode} />
                <VideoInterFace
                    theaterMode={theaterMode}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    videoPaused={videoPaused}
                    videoActivated={videoActivated}
                />
            </React.Fragment>
        )
    }
}