import React from 'react';
import styled from 'styled-components';
import VideoFrame from './mainFrame/VideoFrame';
import VideoInfoOuter from './mainFrame/VideoInfoOuter';

// width: max-content;
const MainFrameWrapper = styled.div`
    width: ${props => props.theaterMode ? '100%' : 'max-content'};
    
    background: inherit;
    
    @media(max-width: 767px) {
        width: 100%;
    }
`;

const MainFrameContainer = styled.div`
    width: max-content;
    height: max-content;
    background: inherit;
    margin-left: ${props => props.theaterMode ? '0px' : '24px'};
    padding-top: ${props => props.theaterMode ? '0px' : '24px'};
    display: flex;
    flex-direction: column;
    
    @media(max-width: 767px) {
        width: ${props => props.theaterMode ? 'max-content' : '100%'};
    }

    @media(max-width: 1023px) {
        padding-right: 24px;
    }
`;

export default class extends React.Component {
    state = {
        videoEnded: false,
    };

    startVideo = () => {
        this.setState({ videoEnded: false });
    };

    endVideo = () => {
        this.setState({ videoEnded: true });
    };

    render() {
        const {
            autoPlay,
            newMargin,
            theaterMode,
            toggleAutoPlay,
            toggleTheater,
            queryStr,
            contentData
        } = this.props;
        const {
            videoEnded
        } = this.state;
        return (
            <MainFrameWrapper
                theaterMode={theaterMode}
            >
                <MainFrameContainer
                    theaterMode={theaterMode}
                >
                    <VideoFrame
                        autoPlay={autoPlay}
                        newMargin={newMargin}
                        endVideo={this.endVideo}
                        startVideo={this.startVideo}
                        theaterMode={theaterMode}
                        toggleAutoPlay={toggleAutoPlay}
                        toggleTheater={toggleTheater}
                        videoEnded={videoEnded}
                        queryStr={queryStr}
                        contentData={contentData}
                    />
                    <VideoInfoOuter
                        autoPlay={autoPlay}
                        newMargin={newMargin}
                        theaterMode={theaterMode}
                        toggleAutoPlay={toggleAutoPlay}
                        contentData={contentData}
                    />
                </MainFrameContainer>
            </MainFrameWrapper>
        )
    }
};