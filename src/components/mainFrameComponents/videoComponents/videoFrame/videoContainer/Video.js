import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
    width: 100%;
    z-index: -100;
`;

export default class extends React.Component {
    playPause = () => {
        this.props.videoPaused
            ? this.videoRef['pause']()
            : this.videoRef['play']();
    }

    changeVolume = () => {
        this.videoRef.volume = this.props.volume;
    }

    setPlaySpeed = () => {
        this.videoRef.playbackRate = this.props.playSpeed;
    }

    toggleMuteVideo = () => {
        this.props.muted
            ? this.videoRef['muted'] = true
            : this.videoRef['muted'] = false;
    };

    componentDidUpdate() {
        this.changeVolume();
        this.setPlaySpeed();
        this.toggleMuteVideo();
        this.playPause();

    };

    componentDidMount() {
        this.videoRef.currentTime = this.props.currentTime;
    }

    render() {
        const { getCurrent, getDuration, pauseVideo } = this.props;
        return (
            <Video
                onLoadedData={getDuration}
                onTimeUpdate={getCurrent}
                onEnded={pauseVideo}
                ref={ref => this.videoRef = ref}
                src="./videos/dive.mp4" />
        )
    }
}