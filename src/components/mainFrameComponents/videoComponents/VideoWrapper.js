import React from 'react';
import VideoContainer from './videoFrame/VideoContainer';
import VideoInterFace from './videoFrame/VideoInterFace';

export default class extends React.Component {
    render() {
        const { theaterMode, pauseVideo, videoActivated, videoPaused } = this.props;
        return (
            <React.Fragment>
                <VideoContainer
                    theaterMode={theaterMode} />
                <VideoInterFace
                    videoPaused={videoPaused}
                    pauseVideo={pauseVideo}
                    videoActivated={videoActivated}
                />
            </React.Fragment>
        )
    }
}