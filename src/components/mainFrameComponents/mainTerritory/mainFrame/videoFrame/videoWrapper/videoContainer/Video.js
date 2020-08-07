import React from 'react';
import styled from 'styled-components';
import Loading from './video/Loading';

const Video = styled.video`
    width: 100%;
    z-index: -200;
    opacity: ${props => props.videoEnded || !props.loaded ? 0 : 1};
`;

export default class extends React.Component {
    state = {
        loaded: false
    };

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

    loadingIsOver = e => {
        this.setState({ loaded: true });
        this.props.getDuration(e);
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
        };
        if (!this.props.autoPlay) {
            this.props.activateRecommend();
        }
        this.props.pauseVideo();
    };

    render() {
        const {
            getCurrent,
            videoEnded,
            contentData
        } = this.props;
        const {
            loaded
        } = this.state;
        return (
            <React.Fragment>
                <Video
                    autoplay
                    className="video"
                    ref={ref => this.videoRef = ref}
                    onLoadedData={this.loadingIsOver}
                    onTimeUpdate={getCurrent}
                    onEnded={this.videoEnded}
                    loaded={loaded}
                    videoEnded={videoEnded}
                    src={contentData.videoUrl}
                />
                {loaded
                    ? null
                    : <Loading />}
            </React.Fragment>
        )
    }
}