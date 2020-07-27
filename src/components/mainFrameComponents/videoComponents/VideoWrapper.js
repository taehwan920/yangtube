import React from 'react';
import VideoContainer from './videoFrame/VideoContainer';
import VideoInterFace from './videoFrame/VideoInterFace';
import KeyAni from './KeyAni';

export default class extends React.Component {
    state = {
        currentTime: 0,
        muted: false,
        keyPressed: false,
        keyState: {
            upDown: [false, { upArrow: false }],
            leftRight: [false, { rightArrow: false }],
            mute: [false, { muteOn: false }]
        },
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

    updateByArrow = e => {
        const { currentTime, volume } = this.state;
        const leftArrow = 37;
        const upArrow = 38;
        const rightArrow = 39;
        const downArrow = 40;
        const spacebar = 32;
        const m = 77;
        const t = 84;

        let newCurrent;
        if (e.keyCode === leftArrow) {
            e.preventDefault();
            newCurrent = currentTime - 5;
            this.vidRef.current.videoRef.currentTime = newCurrent;
            this.setState({
                currentTime: newCurrent,
                keyPressed: true,
                keyState: {
                    upDown: [false, { upArrow: false }],
                    leftRight: [true, { rightArrow: false }],
                    mute: [false, { muteOn: false }],
                }
            })
        }
        if (e.keyCode === rightArrow) {
            e.preventDefault();
            newCurrent = currentTime + 5;
            this.vidRef.current.videoRef.currentTime = newCurrent;
            this.setState({
                currentTime: newCurrent,
                keyPressed: true,
                keyState: {
                    upDown: [false, { upArrow: false }],
                    leftRight: [true, { rightArrow: true }],
                    mute: [false, { muteOn: false }]
                }
            })
        }
        if (e.keyCode === spacebar) {
            e.preventDefault();
            this.props.PauseAndEvent();
        }
        let newVolume;
        if (e.keyCode === upArrow) {
            e.preventDefault();
            newVolume = volume + 0.05 > 1 ? 1 : volume + 0.05;
            this.setState({
                volume: newVolume,
                keyPressed: true,
                keyState: {
                    upDown: [true, { upArrow: true }],
                    leftRight: [false, { rightArrow: false }],
                    mute: [false, { muteOn: false }]
                }
            });
        }
        if (e.keyCode === downArrow) {
            e.preventDefault();
            newVolume = volume - 0.05 < 0 ? 0 : volume - 0.05;
            this.setState({
                volume: newVolume,
                keyPressed: true,
                keyState: {
                    upDown: [true, { upArrow: false }],
                    leftRight: [false, { rightArrow: false }],
                    mute: [false, { muteOn: false }]
                }
            });
        }
        if (e.keyCode === m) {
            e.preventDefault();
            this.setState({
                muted: !this.state.muted,
                keyPressed: true,
                keyState: {
                    upDown: [false, { upArrow: false }],
                    leftRight: [false, { rightArrow: false }],
                    mute: [true, { muteOn: !this.state.keyState.mute[1].muteOn }]
                }
            });
        }
        if (e.keyCode === t) {
            e.preventDefault();
            this.props.toggleTheater();
        }
    };

    arrowAniEnd = () => {
        this.setState({ keyPressed: false })
    }

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

    componentDidMount() {
        document.addEventListener('keydown', this.updateByArrow);
    }

    render() {
        const {
            theaterMode,
            toggleFullVF,
            toggleTheater,
            pauseVideo,
            videoActivated,
            videoPaused
        } = this.props;
        const {
            currentTime,
            keyPressed,
            keyState,
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
                    pauseVideo={pauseVideo}
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
                    toggleFullVF={toggleFullVF}
                    toggleMute={this.toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoPaused={videoPaused}
                    videoActivated={videoActivated}
                    volume={volume}
                    updateCurrent={this.updateCurrent}
                />
                <KeyAni
                    arrowAniEnd={this.arrowAniEnd}
                    keyPressed={keyPressed}
                    keyState={keyState}
                />
            </React.Fragment>
        )
    }
}