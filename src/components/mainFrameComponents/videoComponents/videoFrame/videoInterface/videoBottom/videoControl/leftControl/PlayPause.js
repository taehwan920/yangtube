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

export default class extends React.Component {
    render() {
        const { pauseVideo, videoPaused } = this.props;
        return (
            <React.Fragment>
                {videoPaused
                    ? <PlayButton
                        onClick={pauseVideo}
                    ><i class="fas fa-play"></i></PlayButton>
                    : <PauseButton
                        onClick={pauseVideo}
                    ><i class="fas fa-pause"></i></PauseButton>}
            </React.Fragment>
        )
    }
}