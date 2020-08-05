import React from 'react';
import styled from 'styled-components';
import LeftControl from './videoControl/LeftControl';
import RightControl from './videoControl/RightControl';

const VideoControlBox = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: auto;
`;

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            currentTime,
            getPlaySpeed,
            getVol,
            lang,
            muted,
            theaterMode,
            toggleAutoPlay,
            toggleFullVF,
            toggleMute,
            toggleTheater,
            pauseVideo,
            vidDuration,
            videoEnded,
            videoPaused,
            volume,
            contentData
        } = this.props;
        return (
            <VideoControlBox>
                <LeftControl
                    contentData={contentData}
                    currentTime={currentTime}
                    getVol={getVol}
                    lang={lang}
                    muted={muted}
                    toggleMute={toggleMute}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoEnded={videoEnded}
                    videoPaused={videoPaused}
                    volume={volume}
                />
                <RightControl
                    autoPlay={autoPlay}
                    getPlaySpeed={getPlaySpeed}
                    lang={lang}
                    theaterMode={theaterMode}
                    toggleAutoPlay={toggleAutoPlay}
                    toggleFullVF={toggleFullVF}
                    toggleTheater={toggleTheater}
                />
            </VideoControlBox>
        )
    }
}