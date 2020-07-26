import React from 'react';
import styled from 'styled-components';
import PlayPause from './leftControl/PlayPause';

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

const VolumeSlideBox = styled.div`
    width: 52px;
    height: 36px;
    padding: 0px 5px;
    position: relative;
`;

const VolumeSlide = styled.div`
    background: white;
    width: calc(100% - 10px);
    height: 3px;
    position: absolute;
    bottom: calc(50% - 1.5px);
    cursor: pointer;
`;

const VolumeHandle = styled.div`
    background: white;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    bottom: -4.5px;
    right: 0px;
    cursor: pointer;
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
                <VolumeSlideBox>
                    <VolumeSlide>
                        <VolumeHandle></VolumeHandle>
                    </VolumeSlide>
                </VolumeSlideBox>
                <TimeDisplay>
                    <TimeTextBox>
                        0:00 / 1:51
                    </TimeTextBox>
                </TimeDisplay>
            </LeftControlBox>
        )
    }
}