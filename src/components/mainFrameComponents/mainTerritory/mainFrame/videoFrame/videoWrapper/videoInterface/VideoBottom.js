import React from 'react';
import styled from 'styled-components';
import ProgressBar from './videoBottom/ProgressBar';
import VideoControl from './videoBottom/VideoControl';

const VideoBottomWrapper = styled.div`
    width: calc(100% - 24px);
    height: 39px;
    padding-top: 3px;
    position: absolute;
    bottom: 0px;
    left: 12px;
    z-index: 26;
    opacity: ${props => props.videoActivated ? 1 : 0};
`;

export default class extends React.Component {

    clickVideoBottom = e => {
        e.stopPropagation();
    };

    render() {
        const {
            autoPlay,
            contentData,
            currentTime,
            getPlaySpeed,
            getVol,
            lang,
            muted,
            scrubCurrent,
            theaterMode,
            toggleAutoPlay,
            toggleFullVF,
            toggleMute,
            toggleTheater,
            pauseVideo,
            videoActivated,
            vidDuration,
            videoEnded,
            videoPaused,
            volume,
            updateCurrent,
        } = this.props;
        return (
            <VideoBottomWrapper
                videoActivated={videoActivated}
                isFullscreen={document.fullscreenElement}
                onClick={this.clickVideoBottom}>
                <ProgressBar
                    currentTime={currentTime}
                    scrubCurrent={scrubCurrent}
                    vidDuration={vidDuration}
                    updateCurrent={updateCurrent}
                />
                <VideoControl
                    autoPlay={autoPlay}
                    contentData={contentData}
                    currentTime={currentTime}
                    getPlaySpeed={getPlaySpeed}
                    getVol={getVol}
                    lang={lang}
                    muted={muted}
                    theaterMode={theaterMode}
                    toggleAutoPlay={toggleAutoPlay}
                    toggleFullVF={toggleFullVF}
                    toggleMute={toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoEnded={videoEnded}
                    videoPaused={videoPaused}
                    volume={volume}
                />
            </VideoBottomWrapper>
        )
    }
}