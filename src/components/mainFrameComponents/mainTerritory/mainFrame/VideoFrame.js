import React from 'react';
import styled, { css } from 'styled-components';
import VideoWrapper from './videoFrame/VideoWrapper';
import PlayToggleAni from './videoFrame/PlayToggleAni';
import VideoCtxMenu from './videoFrame/VideoCtxMenu';
import URLCopyAni from './videoFrame/URLCopyAni';


const VideoFrame = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:focus {
        outline: none;
    }

    ${props => props.theaterMode && css`
        width: 100vw;
        min-width: 450px;
        min-height: 480px;

        @media(min-width: 1380px) {
            height: ${props => props.frameHeight ? props.frameHeight * 0.8212 : props.viewHeight * 0.8212}px;
        }

        @media(min-width: 850px) and (max-width: 1379px) {
            height: ${props => props.frameWidth ? props.frameWidth / 16 * 9 : props.viewWidth / 16 * 9}px;
        }

        @media(max-width: 849px) {
            height: 480px;
        }
    `}
    
    
    ${props => !props.theaterMode && css`
        @media(max-width: 1023px) {
            width: calc(${props => props.viewWidth}px - 48px);
            height: calc((${props => props.viewWidth}px - 48px) / 16 * 9);
        }
    
        @media(min-width: 1024px) and (max-width: 1754px) {
            width: calc(${props => props.viewWidth}px - 24px - 450px);
            height: calc((${props => props.viewWidth}px - 24px - 450px) / 16 * 9);
        }
    
        @media(min-width: 1755px) {
            width: calc(${props => props.viewWidth - props.newMargin * 2}px - 24px - 450px);
            height: calc((${props => props.viewWidth - props.newMargin * 2}px - 24px - 450px) / 16 * 9);
        }
    `}
`;



export default class extends React.Component {
    state = {
        animationTriggered: false,
        frameHeight: null,
        frameWidth: null,
        repeatPlay: false,
        urlCopied: false,
        videoActivated: false,
        videoCtxMenu: false,
        videoPaused: false,
    };

    videoWrapperRef = React.createRef();

    componentDidMount() {
        window.addEventListener('resize', this.getHeight);
    };

    aniEnd = () => {
        this.setState({ animationTriggered: false });
    };

    closeCtxMenu = () => {
        this.setState({
            videoCtxMenu: false
        });
    };

    getHeight = () => {
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;
        this.setState({
            frameHeight: newHeight,
            frameWidth: newWidth
        });
    };

    keyEvent = e => {
        this.toggleFullscreenByKey(e);
        this.videoWrapperRef.current.updateByKey(e);
    };

    onVideo = () => {
        if (this.state.videoPaused) return;
        this.setState({ videoActivated: true });
    };

    outVideo = () => {
        clearTimeout(this.timeout);
        this.timeout = null;
        if (this.state.videoPaused) return;
        this.setState({
            videoActivated: false
        })
    };

    openCtxMenu = e => {
        if (this.state.videoCtxMenu) return;
        e.preventDefault();
        this.setState({
            videoCtxMenu: true,
        });
    };

    toggleFullscreenByKey = e => {
        const fKeyCode = 70;
        if (e.keyCode === fKeyCode) {
            this.toggleFullVF();
        }
    };

    toggleFullVF = () => {
        if (document.fullscreenElement) {
            this.setState({ isFullscreen: false });
            document.exitFullscreen();
        } else {
            this.setState({ isFullscreen: true });
            this.videoFrameRef.requestFullscreen();
        }
    };

    toggleRepeatPlay = () => {
        this.setState({ repeatPlay: !this.state.repeatPlay });
        this.closeCtxMenu();
    };

    timeout;
    moveOnVideo = () => {
        clearTimeout(this.timeout);
        this.timeout = null;
        if (this.state.videoPaused) return;
        this.setState({ videoActivated: true });
        this.timeout = setTimeout(this.outVideo, 3000);
    };

    mouseMoved = e => {
        !this.state.videoActivated
            ? this.onVideo()
            : this.moveOnVideo();
    };

    PauseAndEvent = () => {
        this.pauseVideo();
        this.setState({ animationTriggered: true });
    };

    pauseVideo = () => {
        if (this.props.videoEnded) {
            this.videoWrapperRef.current.vidRef.current.videoRef.currentTime = 0;
            this.props.startVideo();
        }
        this.setState({
            videoActivated: true,
            videoPaused: !this.state.videoPaused
        });

    };

    urlAniEnd = () => {
        this.setState({ urlCopied: false });
    };

    urlCopyClicked = () => {
        this.setState({
            urlCopied: true
        });
    };

    render() {
        const {
            autoPlay,
            endVideo,
            newMargin,
            theaterMode,
            toggleAutoPlay,
            toggleTheater,
            videoEnded,
            queryStr,
            contentData
        } = this.props;
        const {
            animationTriggered,
            frameHeight,
            frameWidth,
            repeatPlay,
            urlCopied,
            videoActivated,
            videoCtxMenu,
            videoPaused,
        } = this.state;
        const viewHeight = window.innerHeight, viewWidth = window.innerWidth;
        return (
            <VideoFrame
                ref={ref => this.videoFrameRef = ref}
                className="video-frame"
                onClick={this.PauseAndEvent}
                onContextMenu={this.openCtxMenu}
                onKeyDown={this.keyEvent}
                onMouseLeave={this.outVideo}
                onMouseEnter={this.onVideo}
                onMouseMove={this.mouseMoved}
                frameHeight={frameHeight}
                frameWidth={frameWidth}
                newMargin={newMargin}
                tabIndex="0"
                theaterMode={theaterMode}
                viewWidth={viewWidth}
                viewHeight={viewHeight}
            >
                <VideoWrapper
                    ref={this.videoWrapperRef}
                    autoPlay={autoPlay}
                    endVideo={endVideo}
                    moveOnVideo={this.moveOnVideo}
                    theaterMode={theaterMode}
                    toggleAutoPlay={toggleAutoPlay}
                    toggleFullVF={this.toggleFullVF}
                    toggleTheater={toggleTheater}
                    PauseAndEvent={this.PauseAndEvent}
                    pauseVideo={this.pauseVideo}
                    repeatPlay={repeatPlay}
                    queryStr={queryStr}
                    videoActivated={videoActivated}
                    videoEnded={videoEnded}
                    videoFrameRef={this.videoFrameRef}
                    videoPaused={videoPaused}
                    contentData={contentData}
                />
                <PlayToggleAni
                    aniEnd={this.aniEnd}
                    animationTriggered={animationTriggered}
                    videoPaused={videoPaused} />
                <URLCopyAni
                    aniEnd={this.aniEnd}
                    urlAniEnd={this.urlAniEnd}
                    urlCopied={urlCopied}
                />
                <VideoCtxMenu
                    closeCtxMenu={this.closeCtxMenu}
                    toggleRepeatPlay={this.toggleRepeatPlay}
                    repeatPlay={repeatPlay}
                    urlCopyClicked={this.urlCopyClicked}
                    videoCtxMenu={videoCtxMenu}
                    videoWrapperRef={this.videoWrapperRef}
                />
            </VideoFrame>
        )
    }
};
