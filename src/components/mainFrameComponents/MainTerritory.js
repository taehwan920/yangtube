import React from 'react';
import styled from 'styled-components';
import MainTitleAndDesc from './titleAndDescComponents/MainTitleAndDesc';
import MainComments from './commentsComponents/MainComments';
import VideoFrame from './videoComponents/VideoFrame';
import VideoNavNonPC from './videoNavComponents/VideoNavNonPC';
import VideoNavPC from './videoNavComponents/VideoNavPC';


const MainTerritory = styled.div`
    background-color: inherit;
    top: 56px;
    position: relative;
    display: flex;
    z-index: 1;
`;

const MainFrameWrapper = styled.div`
    width: ${props => props.theaterMode ? '100%' : 'max-content'};
    height: 100%;
    background: inherit;
    padding-left: ${props => props.theaterMode ? '0' : '56'}px;
    @media(max-width: 767px) {
        width: 100%;
    }
    @media(max-width: 1023px) {
        padding-left: 0px;
    }
`;

const MainFrameContainer = styled.div`
    width: max-content;
    height: 100%;
    background: inherit;
    margin-left: ${props => props.theaterMode ? '0px' : '24px'};
    padding-top: ${props => props.theaterMode ? '0px' : '24px'};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.theaterMode ? 'center' : 'flex-start'};
    @media(max-width: 767px) {
        width: ${props => props.theaterMode ? 'max-content' : '100%'};
    }
`;

const VideoInfoOuterWrapper = styled.div`
    width: max-content;
    background: inherit;
    margin-left: ${props => props.theaterMode ? '82px' : '0px'};
    display: flex;
    

    @media(min-width: 1024px) {
        width: ${props => props.theaterMode ? 'min-content' : 'max-content'};
    }

    @media(max-width: 1023px) {
        margin-left: ${props => props.theaterMode ? '24px' : '0px'};
        margin-right: ${props => props.theaterMode ? '24px' : '0px'};
    }

    @media(max-width: 500px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`;

const VideoInfoInnerWrapper = styled.div`
    background: inherit;
    width: ${props => props.theaterMode ? '52vw' : '68.45vw'};
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1023px) {
        width: 95.1vw;
        height: calc(95.1vw / 16 * 9);
    }
`;

export default class extends React.Component {
    state = {
        theaterMode: true
    }
    render() {
        const { theaterMode } = this.state;
        return (
            <MainTerritory>
                <MainFrameWrapper theaterMode={theaterMode}>
                    <MainFrameContainer theaterMode={theaterMode}>
                        <VideoFrame theaterMode={theaterMode}></VideoFrame>
                        <VideoInfoOuterWrapper theaterMode={theaterMode}>
                            <VideoInfoInnerWrapper
                                theaterMode={theaterMode}
                            >
                                <MainTitleAndDesc></MainTitleAndDesc>
                                <VideoNavNonPC></VideoNavNonPC>
                                <MainComments></MainComments>
                            </VideoInfoInnerWrapper>
                            {theaterMode
                                ? <VideoNavPC></VideoNavPC>
                                : null}
                        </VideoInfoOuterWrapper>
                    </MainFrameContainer>
                </MainFrameWrapper>
                {theaterMode
                    ? null
                    : <VideoNavPC></VideoNavPC>}
            </MainTerritory>
        )
    }
}