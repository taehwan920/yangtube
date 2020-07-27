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

    vidRef = React.createRef();

    getVol = e => {
        this.setState({ volume: e.target.value });
    };

    getDuration = e => {
        this.setState({
            vidDuration: e.target.duration
        });
    };

    getCurrent = e => {
        this.setState({ currentTime: e.target.currentTime });
    };

    toggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };

    scrubCurrent = (ref, du, e) => {
        const newCurrent = (e.nativeEvent.offsetX / ref.offsetWidth) * du;
        this.vidRef.current.videoRef.currentTime = newCurrent;
        this.setState({ currentTime: newCurrent });
    };

    updateCurrent = (ref, du) => e => {
        const newCurrent = (e.nativeEvent.offsetX / ref.offsetWidth) * du;
        this.vidRef.current.videoRef.currentTime = newCurrent;
        this.setState({ currentTime: newCurrent });
    };

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
                    currentTime={currentTime}
                    getCurrent={this.getCurrent}
                    getDuration={this.getDuration}
                    muted={muted}
                    theaterMode={theaterMode}
                    videoPaused={videoPaused}
                    vidRef={this.vidRef}
                    volume={volume}
                />
                <VideoInterFace
                    currentTime={currentTime}
                    getVol={this.getVol}
                    muted={muted}
                    scrubCurrent={this.scrubCurrent}
                    theaterMode={theaterMode}
                    toggleMute={this.toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoPaused={videoPaused}
                    videoActivated={videoActivated}
                    volume={volume}
                    updateCurrent={this.updateCurrent}
                />
            </React.Fragment>
        )
    }
}