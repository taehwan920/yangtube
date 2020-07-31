import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
    width: 100%;
    z-index: -100;
    opacity: ${props => props.videoEnded ? 0 : 1};
`;

export default class extends React.Component {
    componentDidUpdate() {
        this.changeVolume();
        this.setPlaySpeed();
        this.toggleMuteVideo();
        this.playPause();
    };

    componentDidMount() {
        this.videoRef.currentTime = this.props.currentTime;
    };

    changeVolume = () => {
        this.videoRef.volume = this.props.volume;
    };



    playPause = () => {
        this.props.videoPaused
            ? this.videoRef['pause']()
            : this.videoRef['play']();
    };

    setPlaySpeed = () => {
        this.videoRef.playbackRate = this.props.playSpeed;
    };

    toggleMuteVideo = () => {
        this.props.muted
            ? this.videoRef['muted'] = true
            : this.videoRef['muted'] = false;
    };

    videoEnded = () => {
        if (this.props.repeatPlay) return;
        if (!this.props.videoEnded) {
            this.props.endVideo();
        }
        this.props.pauseVideo();
    };

    render() {
        const {
            getCurrent,
            getDuration,
            videoEnded,
            contentData
        } = this.props;
        return (
            <Video
                onLoadedData={getDuration}
                onTimeUpdate={getCurrent}
                onEnded={this.videoEnded}
                videoEnded={videoEnded}
                ref={ref => this.videoRef = ref}
                src={contentData.videoUrl}
            />
        )
    }
}