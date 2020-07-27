import React from 'react';
import styled from 'styled-components';
import PlayPause from './leftControl/PlayPause';
import MuteBtn from './leftControl/MuteBtn';
import TimeDisplay from './leftControl/TimeDisplay';

const LeftControlBox = styled.div`
    width: max-content;
    height: 36px;
    display: flex;
    align-items: center;
`;

const CommonBtn = styled.span`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const NextButton = styled(CommonBtn)`
`;

export default class extends React.Component {
    state = {
        hoverOnVol: false
    }

    mouseOnVol = () => {
        this.setState({ hoverOnVol: true });
    }
    mouseOutVol = () => {
        this.setState({ hoverOnVol: false });
    }

    render() {
        const {
            currentTime,
            getVol,
            muted,
            toggleMute,
            pauseVideo,
            vidDuration,
            videoPaused,
            volume
        } = this.props;
        const { hoverOnVol } = this.state;
        return (
            <LeftControlBox>
                <PlayPause
                    pauseVideo={pauseVideo}
                    videoPaused={videoPaused}
                />
                <NextButton><i class="fas fa-step-forward"></i></NextButton>
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
}