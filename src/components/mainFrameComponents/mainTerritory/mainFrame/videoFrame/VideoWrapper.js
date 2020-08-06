import React from 'react';
import VideoContainer from './videoWrapper/VideoContainer';
import VideoInterFace from './videoWrapper/VideoInterFace';
import KeyAni from './videoWrapper/KeyAni';
import RecommendVideos from './videoWrapper/RecommendVideos';

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
        playSpeed: 1.0,
        recommendVideos: false,
        vidDuration: 1,
        volume: 1,
    };

    vidRef = React.createRef();

    componentDidMount() {
        const startPoint = parseInt(this.props.queryStr.start);
        this.setCurrentByQS(startPoint);
    };

    activateRecommend = () => {
        this.setState({ recommendVideos: true });
    };

    arrowAniEnd = () => {
        this.setState({ keyPressed: false })
    };

    getCurrent = e => {
        this.setState({ currentTime: e.target.currentTime });
    };

    getDuration = e => {
        this.setState({
            vidDuration: e.target.duration
        });
    };

    getPlaySpeed = num => {
        this.setState({ playSpeed: num });
    };

    getVol = e => {
        this.setState({ volume: e.target.value });
    };

    goToNextPage = () => {
        window.location.replace(`${window.location.origin}${this.props.contentData.nextUrl}`);
    };

    toggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };

    shiftDown = false;
    updateByKey = e => {
        const { currentTime, volume } = this.state;
        const leftArrow = 37;
        const upArrow = 38;
        const rightArrow = 39;
        const downArrow = 40;
        const spacebar = 32;
        const m = 77;
        const t = 84;
        const shiftKey = 16;
        const n = 78;

        this.props.moveOnVideo();

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
        const changeAmount = 0.05
        if (e.keyCode === upArrow) {
            e.preventDefault();
            newVolume = volume + changeAmount > 1 ? 1 : volume + changeAmount;
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
            newVolume = volume - changeAmount < 0 ? 0 : volume - changeAmount;
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
        if (e.keyCode === shiftKey) {
            e.preventDefault();
            this.shiftDown = true;
        }
        if (e.keyCode === n && this.shiftDown) {
            e.preventDefault();
            this.goToNextPage();
        }
    };

    scrubCurrent = (ref, du, e) => {
        const newCurrent = (e.nativeEvent.offsetX / ref.offsetWidth) * du;
        this.vidRef.current.videoRef.currentTime = newCurrent;
        this.setState({ currentTime: newCurrent });
    };

    setCurrentByQS = num => {
        const video = this.vidRef.current.videoRef;
        if (!num || num < 0 || num > video.duration) return;
        video.currentTime = num;
        this.setState({ currentTime: num });
    };

    shiftKeyUp = e => {
        const shiftKey = 16;
        if (e.keyCode === shiftKey) {
            e.preventDefault();
            this.shiftDown = false;
        }
    };

    updateCurrent = (ref, du) => e => {
        const newCurrent = (e.nativeEvent.offsetX / ref.offsetWidth) * du;
        this.vidRef.current.videoRef.currentTime = newCurrent;
        this.setState({ currentTime: newCurrent });
    };

    render() {
        const {
            autoPlay,
            contentData,
            endVideo,
            lang,
            langState,
            theaterMode,
            toggleAutoPlay,
            toggleFullVF,
            toggleTheater,
            pauseVideo,
            repeatPlay,
            videoActivated,
            videoEnded,
            videoPaused,
        } = this.props;
        const {
            currentTime,
            keyPressed,
            keyState,
            muted,
            playSpeed,
            recommendVideos,
            vidDuration,
            volume
        } = this.state;
        return (
            <React.Fragment>
                <VideoContainer
                    autoPlay={autoPlay}
                    activateRecommend={this.activateRecommend}
                    contentData={contentData}
                    currentTime={currentTime}
                    endVideo={endVideo}
                    getCurrent={this.getCurrent}
                    getDuration={this.getDuration}
                    lang={lang}
                    muted={muted}
                    theaterMode={theaterMode}
                    pauseVideo={pauseVideo}
                    playSpeed={playSpeed}
                    recommendVideos={recommendVideos}
                    repeatPlay={repeatPlay}
                    videoEnded={videoEnded}
                    videoPaused={videoPaused}
                    vidRef={this.vidRef}
                    volume={volume}
                />
                <VideoInterFace
                    autoPlay={autoPlay}
                    contentData={contentData}
                    currentTime={currentTime}
                    getPlaySpeed={this.getPlaySpeed}
                    getVol={this.getVol}
                    lang={lang}
                    muted={muted}
                    scrubCurrent={this.scrubCurrent}
                    theaterMode={theaterMode}
                    toggleAutoPlay={toggleAutoPlay}
                    toggleFullVF={toggleFullVF}
                    toggleMute={this.toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    videoActivated={videoActivated}
                    videoEnded={videoEnded}
                    vidDuration={vidDuration}
                    videoPaused={videoPaused}
                    volume={volume}
                    updateCurrent={this.updateCurrent}
                />
                <KeyAni
                    arrowAniEnd={this.arrowAniEnd}
                    keyPressed={keyPressed}
                    keyState={keyState}
                    volume={volume}
                />
                {videoEnded && recommendVideos
                    ?
                    <RecommendVideos
                        contentData={contentData}
                        theaterMode={theaterMode}
                        lang={lang}
                        langState={langState}
                    />
                    : null}
            </React.Fragment>
        )
    }
}