import React from 'react';
import VideoContainer from './videoFrame/VideoContainer';
import VideoInterFace from './videoFrame/VideoInterFace';
import ArrowAni from './ArrowAni';

export default class extends React.Component {
    state = {
        currentTime: 0,
        muted: false,
        keyPressed: false,
        rightArrow: false,
        vidDuration: 1,
        volume: 1,
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

    updateByArrow = e => {
        let newCurrent;
        if (e.keyCode === 37) {
            newCurrent = this.state.currentTime - 5;
            this.vidRef.current.videoRef.currentTime = newCurrent;
            this.setState({
                currentTime: newCurrent,
                keyPressed: true,
                rightArrow: false
            })
        }
        else if (e.keyCode === 39) {
            newCurrent = this.state.currentTime + 5;
            this.vidRef.current.videoRef.currentTime = newCurrent;
            this.setState({
                currentTime: newCurrent,
                keyPressed: true,
                rightArrow: true
            })
        } else if (e.keyCode === 32) {
            e.preventDefault();
            this.props.PauseAndEvent();
        }
    };

    arrowAniEnd = () => {
        this.setState({ keyPressed: false })
    }

    updateCurrent = (ref, du) => e => {
        const newCurrent = (e.nativeEvent.offsetX / ref.offsetWidth) * du;
        this.vidRef.current.videoRef.currentTime = newCurrent;
        this.setState({ currentTime: newCurrent });
    };

    componentDidMount() {
        document.addEventListener('keydown', this.updateByArrow);
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
            keyPressed,
            muted,
            rightArrow,
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
                <ArrowAni
                    arrowAniEnd={this.arrowAniEnd}
                    keyPressed={keyPressed}
                    rightArrow={rightArrow}
                />
            </React.Fragment>
        )
    }
}