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
        const { theaterMode, toggleTheater, pauseVideo, videoPaused } = this.props;
        return (
            <VideoControlBox>
                <LeftControl
                    pauseVideo={pauseVideo}
                    videoPaused={videoPaused} />
                <RightControl
                    theaterMode={theaterMode}
                    toggleTheater={toggleTheater} />
            </VideoControlBox>
        )
    }
}