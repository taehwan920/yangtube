import React from 'react';
import styled, { css } from 'styled-components';
import Video from './videoContainer/Video';
import WaitAutoPlay from './videoContainer/WaitAutoPlay';

const VideoContainerBox = styled.div`
    position: relative;
    
    &:focus {
        outline: none;
    }
    background-color: ${props => {
        if (props.theaterMode) {
            return 'black'
        } else {
            if (props.isFullscreen) {
                return 'black'
            } else {
                return 'white'
            }
        }
    }};

    ${props => props.theaterMode && css`
        min-width: 450px;
        min-height: 253px;

        @media(min-width: 1380px) {
            width: ${props => {
            if (props.isFullscreen) {
                return `100%`
            } else {
                return `${props.viewHeight * 0.8235 / 9 * 16}px`
            }
        }};
            height: 100%;
        }

        @media(min-width: 850px) and (max-width: 1379px) {
            width: 100%;
            height: 100%;
        }

        @media(max-width: 849px) {
            width: 100%;
            height: ${props.viewWidth / 16 * 9}px;
        }
    `}

    ${props => !props.theaterMode && css`
        width: 100%;
        height: 100%;
        min-width: 427px;
        min-height: 240px;
    `}
`;

export default class extends React.Component {
    isFullscreen;
    componentDidUpdate() {
        this.isFullscreen = document.fullscreenElement;
    };

    componentDidMount() {
        const { autoPlay, videoEnded } = this.props;
        if (!autoPlay && videoEnded) {
            this.props.activateRecommend();
        }
    };

    render() {
        const {
            autoPlay,
            activateRecommend,
            contentData,
            currentTime,
            endVideo,
            getCurrent,
            getDuration,
            lang,
            muted,
            theaterMode,
            pauseVideo,
            playSpeed,
            recommendVideos,
            repeatPlay,
            videoEnded,
            videoPaused,
            vidRef,
            volume,
        } = this.props;
        const viewHeight = window.innerHeight, viewWidth = window.innerWidth;
        return (
            <VideoContainerBox
                isFullscreen={this.isFullscreen}
                theaterMode={theaterMode}
                viewHeight={viewHeight}
                viewWidth={viewWidth}
            >
                <Video
                    ref={vidRef}
                    activateRecommend={activateRecommend}
                    autoPlay={autoPlay}
                    contentData={contentData}
                    currentTime={currentTime}
                    getCurrent={getCurrent}
                    getDuration={getDuration}
                    muted={muted}
                    endVideo={endVideo}
                    pauseVideo={pauseVideo}
                    playSpeed={playSpeed}
                    repeatPlay={repeatPlay}
                    videoEnded={videoEnded}
                    videoPaused={videoPaused}
                    volume={volume}
                />
                {autoPlay && videoEnded && !recommendVideos
                    ?
                    <WaitAutoPlay
                        activateRecommend={activateRecommend}
                        contentData={contentData}
                        lang={lang}
                    />
                    : null}
            </VideoContainerBox>
        )
    }
}