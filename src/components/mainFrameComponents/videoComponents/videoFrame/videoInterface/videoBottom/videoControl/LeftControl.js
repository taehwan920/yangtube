import React from 'react';
import styled from 'styled-components';
import PlayPause from './leftControl/PlayPause';
import MuteBtn from './leftControl/MuteBtn';
import TimeDisplay from './leftControl/TimeDisplay';
import NextBtn from './leftControl/NextBtn';

const LeftControlBox = styled.div`
    width: max-content;
    height: 36px;
    display: flex;
    align-items: center;
`;

export default class extends React.Component {
    state = {
        hoverOnVol: false
    };

    mouseOnVol = () => {
        this.setState({ hoverOnVol: true });
    };
    mouseOutVol = () => {
        this.setState({ hoverOnVol: false });
    };

    render() {
        const {
            currentTime,
            getVol,
            muted,
            toggleMute,
            pauseVideo,
            vidDuration,
            videoEnded,
            videoPaused,
            volume,
            contentData
        } = this.props;
        const { hoverOnVol } = this.state;
        return (
            <LeftControlBox>
                <PlayPause
                    pauseVideo={pauseVideo}
                    videoPaused={videoPaused}
                    videoEnded={videoEnded}
                />
                <NextBtn
                    contentData={contentData}
                />
                <MuteBtn
                    getVol={getVol}
                    hoverOnVol={hoverOnVol}
                    muted={muted}
                    mouseOnVol={this.mouseOnVol}
                    mouseOutVol={this.mouseOutVol}
                    toggleMute={toggleMute}
                    volume={volume}
                />
                <TimeDisplay
                    currentTime={currentTime}
                    vidDuration={vidDuration}
                />
            </LeftControlBox>
        )
    }
};