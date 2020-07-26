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
            currentTime,
            getVol,
            muted,
            theaterMode,
            toggleMute,
            toggleTheater,
            pauseVideo,
            vidDuration,
            videoActivated,
            videoPaused,
            volume
        } = this.props;
        return (
            <VideoBottomWrapper
                videoActivated={videoActivated}
                onClick={this.clickVideoBottom}>
                <ProgressBar
                    currentTime={currentTime}
                    vidDuration={vidDuration}
                />
                <VideoControl
                    currentTime={currentTime}
                    getVol={getVol}
                    muted={muted}
                    theaterMode={theaterMode}
                    toggleMute={toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoPaused={videoPaused}
                    volume={volume}
                />
            </VideoBottomWrapper>
        )
    }
}