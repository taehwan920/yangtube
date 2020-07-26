import React from 'react';
import styled from 'styled-components';

const VideoControlBox = styled.div`
    background: peru;
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
`;

const LeftControlBox = styled.div`
    background: skyblue;
    width: max-content;
    height: 36px;
    display: flex;
    align-items: center;
`;

const PlayButton = styled.span`
    width: 46px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
`;

const PauseButton = styled(PlayButton)`
    font-size: 18px;
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
    width: 100%;
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
    bottom: -4.95px;
    right: 0px;
    cursor: pointer;
`;

const TimeDisplay = styled.div`
    width: max-content;
    height: 36px;
    padding: 0px 5px;
`;

const RightControlBox = styled.div`
    background: pink;
    width: max-content;
    height: 36px;
    display: flex;
    align-items: center;
`;

export default class extends React.Component {
    render() {
        return (
            <VideoControlBox>
                <LeftControlBox>
                    <PlayButton><i class="fas fa-play"></i></PlayButton>
                    <PauseButton><i class="fas fa-pause"></i></PauseButton>
                    <NextButton><i class="fas fa-step-forward"></i></NextButton>
                    <MuteButton><i class="fas fa-volume-up"></i></MuteButton>
                    <VolumeSlideBox>
                        <VolumeSlide>
                            <VolumeHandle></VolumeHandle>
                        </VolumeSlide>
                    </VolumeSlideBox>
                    <TimeDisplay></TimeDisplay>
                </LeftControlBox>
                <RightControlBox>

                </RightControlBox>
            </VideoControlBox>
        )
    }
}