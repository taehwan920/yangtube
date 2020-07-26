import React from 'react';
import VideoContainer from './videoFrame/VideoContainer';
import VideoInterFace from './videoFrame/VideoInterFace';

export default class extends React.Component {
    state = {
        currentTime: 0,
        vidDuration: 1
    }

    getDuration = e => {
        this.setState({
            vidDuration: e.target.duration
        });
    };

    getCurrent = e => {
        this.setState({
            currentTime: e.target.currentTime
        })
    }

    render() {
        const {
            theaterMode,
            toggleTheater,
            pauseVideo,
            videoActivated,
            videoPaused } = this.props;
        const { currentTime, vidDuration } = this.state;
        return (
            <React.Fragment>
                <VideoContainer
                    getCurrent={this.getCurrent}
                    getDuration={this.getDuration}
                    theaterMode={theaterMode}
                    videoPaused={videoPaused}
                />
                <VideoInterFace
                    currentTime={currentTime}
                    vidDuration={vidDuration}
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