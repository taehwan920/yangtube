import React from 'react';
import styled from 'styled-components';
import VideoFrame from './mainFrame/VideoFrame';
import VideoInfoOuter from './mainFrame/VideoInfoOuter';


const MainFrameWrapper = styled.div`
    width: ${props => props.theaterMode ? '100%' : 'max-content'};
    width: max-content;
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
            newMargin,
            theaterMode,
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
                        newMargin={newMargin}
                        endVideo={this.endVideo}
                        startVideo={this.startVideo}
                        theaterMode={theaterMode}
                        toggleTheater={toggleTheater}
                        videoEnded={videoEnded}
                        queryStr={queryStr}
                        contentData={contentData}
                    />
                    <VideoInfoOuter
                        newMargin={newMargin}
                        theaterMode={theaterMode}
                        contentData={contentData}
                    />
                </MainFrameContainer>
            </MainFrameWrapper>
        )
    }
};