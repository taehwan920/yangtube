import React from 'react';
import VideoContainer from './videoFrame/VideoContainer';
import VideoInterFace from './videoFrame/VideoInterFace';

export default class extends React.Component {
    state = {
        currentTime: 0,
        vidDuration: 1,
        volume: 1,
        muted: false
    }

    toggleMute = () => {
        console.log('aaa')
        this.setState({ muted: !this.state.muted });
    }

    getVol = e => {
        this.setState({ volume: e.target.value });
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
            videoPaused
        } = this.props;
        const {
            currentTime,
            muted,
            vidDuration,
            volume
        } = this.state;
        return (
            <React.Fragment>
                <VideoContainer
                    getCurrent={this.getCurrent}
                    getDuration={this.getDuration}
                    muted={muted}
                    theaterMode={theaterMode}
                    videoPaused={videoPaused}
                    volume={volume}
                />
                <VideoInterFace
                    currentTime={currentTime}
                    getVol={this.getVol}
                    muted={muted}
                    theaterMode={theaterMode}
                    toggleMute={this.toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoPaused={videoPaused}
                    videoActivated={videoActivated}
                    volume={volume}
                />
            </React.Fragment>
        )
    }
}