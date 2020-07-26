import React from 'react';
import styled from 'styled-components';
import PlayPause from './leftControl/PlayPause';
import Volume from './leftControl/Volume';

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
    cursor: pointer
`;

const NextButton = styled(CommonBtn)`
`;

const MuteButton = styled(CommonBtn)`
`;

const TimeDisplay = styled.div`
    width: max-content;
    height: 36px;
    padding: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeTextBox = styled.div`
    color: white;
    font-size: 14px;
`;

export default class extends React.Component {
    render() {
        const { pauseVideo, videoPaused } = this.props;
        return (
            <LeftControlBox>
                <PlayPause
                    pauseVideo={pauseVideo}
                    videoPaused={videoPaused}
                />
                <NextButton><i class="fas fa-step-forward"></i></NextButton>
                <MuteButton><i class="fas fa-volume-up"></i></MuteButton>
                <Volume />
                <TimeDisplay>
                    <TimeTextBox>
                        0:00 / 1:51
                    </TimeTextBox>
                </TimeDisplay>
            </LeftControlBox>
        )
    }
}