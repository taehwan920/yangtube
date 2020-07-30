import React from 'react';
import styled from 'styled-components';
import LeftControl from './videoControl/LeftControl';
import RightControl from './videoControl/RightControl';

const VideoControlBox = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    z-index: auto;
`;

export default class extends React.Component {
    render() {
        const {
            currentTime,
            getPlaySpeed,
            getVol,
            muted,
            theaterMode,
            toggleFullVF,
            toggleMute,
            toggleTheater,
            pauseVideo,
            vidDuration,
            videoEnded,
            videoPaused,
            volume
        } = this.props;
        return (
            <VideoControlBox>
                <LeftControl
                    currentTime={currentTime}
                    getVol={getVol}
                    muted={muted}
                    toggleMute={toggleMute}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoEnded={videoEnded}
                    videoPaused={videoPaused}
                    volume={volume}
                />
                <RightControl
                    getPlaySpeed={getPlaySpeed}
                    theaterMode={theaterMode}
                    toggleFullVF={toggleFullVF}
                    toggleTheater={toggleTheater}
                />
            </VideoControlBox>
        )
    }
}