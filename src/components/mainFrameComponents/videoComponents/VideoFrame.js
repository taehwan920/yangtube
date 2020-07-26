import React from 'react';
import styled, { css } from 'styled-components';
import VideoWrapper from './VideoWrapper';


const VideoFrame = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

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
        max-width: 1280px;
        max-height: 720px;

        @media(max-width: 1023px) {
            width: calc(${props => props.viewWidth}px - 24px);
            height: calc((${props => props.viewWidth}px - 24px) / 16 * 9);
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
        frameHeight: null,
        frameWidth: null,
        videoActivated: false,
        videoPaused: false,
    };

    getHeight = () => {
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;
        this.setState({
            frameHeight: newHeight,
            frameWidth: newWidth
        });
    };

    componentDidMount() {
        window.addEventListener('resize', this.getHeight);
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
    }

    timeout;

    moveOnVideo = () => {
        clearTimeout(this.timeout);
        this.timeout = null;
        if (this.state.videoPaused) return;
        this.setState({ videoActivated: true });
        this.timeout = setTimeout(this.outVideo, 3000);
    }

    mouseMoved = () => {
        !this.state.videoActivated
            ? this.onVideo()
            : this.moveOnVideo();
    }

    pauseVideo = () => {
        this.setState({
            videoActivated: true,
            videoPaused: !this.state.videoPaused
        })
    }

    render() {
        const { theaterMode, newMargin } = this.props;
        const { frameHeight, frameWidth, videoPaused, videoActivated } = this.state;
        const viewHeight = window.innerHeight, viewWidth = window.innerWidth;
        return (
            <VideoFrame
                onClick={this.pauseVideo}
                onMouseLeave={this.outVideo}
                onMouseEnter={this.onVideo}
                onMouseMove={this.mouseMoved}
                newMargin={newMargin}
                frameHeight={frameHeight}
                frameWidth={frameWidth}
                viewWidth={viewWidth}
                viewHeight={viewHeight}
                theaterMode={theaterMode}>
                <VideoWrapper
                    theaterMode={theaterMode}
                    videoPaused={videoPaused}
                    pauseVideo={this.pauseVideo}
                    videoActivated={videoActivated} />
            </VideoFrame>
        )
    }
}
