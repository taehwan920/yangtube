import React from 'react';
import styled from 'styled-components';

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
    font-size: 16px;
`;

const ReplayButton = styled(PlayButton)``;


export default class extends React.Component {
    judgeIcon = () => {
        const { pauseVideo, videoEnded, videoPaused } = this.props;
        if (videoPaused && videoEnded) {
            return (
                <ReplayButton
                    onClick={pauseVideo}
                >
                    <i class="fas fa-undo"></i>
                </ReplayButton>
            )
        }
        if (videoPaused) {
            return (
                <PlayButton
                    onClick={pauseVideo}
                >
                    <i class="fas fa-play"></i>
                </PlayButton>
            )
        } else {
            return (
                <PauseButton
                    onClick={pauseVideo}
                >
                    <i class="fas fa-pause"></i>
                </PauseButton>
            )
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.judgeIcon()}
            </React.Fragment>
        )
    }
};