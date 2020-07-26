import React from 'react';
import styled from 'styled-components';
import ProgressBar from './videoBottom/ProgressBar';
import VideoControl from './videoBottom/VideoControl';

const VideoBottomWrapper = styled.div`
    width: calc(100% - 24px);
    height: 39px;
    padding-top: 3px;
    position: absolute;
    bottom: 0px;
    left: 12px;
`;

export default class extends React.Component {
    render() {
        const { pauseVideo, videoPaused } = this.props;
        return (
            <VideoBottomWrapper>
                <ProgressBar />
                <VideoControl
                    pauseVideo={pauseVideo}
                    videoPaused={videoPaused}
                />
            </VideoBottomWrapper>
        )
    }
}