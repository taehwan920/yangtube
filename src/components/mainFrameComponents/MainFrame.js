import React from 'react';
import styled from 'styled-components';
import VideoFrame from './videoComponents/VideoFrame';
import VideoInfoOuter from './VideoInfoOuter';


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
    render() {
        const {
            newMargin,
            theaterMode,
            toggleTheater,
            queryStr
        } = this.props;
        return (
            <MainFrameWrapper
                theaterMode={theaterMode}>
                <MainFrameContainer
                    theaterMode={theaterMode}>
                    <VideoFrame
                        newMargin={newMargin}
                        theaterMode={theaterMode}
                        toggleTheater={toggleTheater}
                        queryStr={queryStr}
                    />
                    <VideoInfoOuter
                        newMargin={newMargin}
                        theaterMode={theaterMode}
                    />
                </MainFrameContainer>
            </MainFrameWrapper>
        )
    }
};