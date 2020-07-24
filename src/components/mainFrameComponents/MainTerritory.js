import React from 'react';
import styled from 'styled-components';
import MainTitleAndDesc from './titleAndDescComponents/MainTitleAndDesc';
import MainComments from './commentsComponents/MainComments';
import VideoFrame from './videoComponents/VideoFrame';
import VideoNavNonPC from './videoNavComponents/VideoNavNonPC';
import VideoNavPC from './videoNavComponents/VideoNavPC';


const MainTerritory = styled.div`
    background-color: pink;
    top: 56px;
    position: relative;
    display: flex;
    z-index: 1;
`;

const MainFrameWrapper = styled.div`
    width: ${props => props.theaterMode ? '100%' : 'max-content'};
    background: peru;
    padding-left: 56px;
    @media(max-width: 767px) {
        width: 100%;
    }
    @media(max-width: 1023px) {
        padding-left: 0px;
    }
`;

const MainFrameContainer = styled.div`
    width: ${props => props.theaterMode ? '100%' : 'max-content'};
    background: inherit;
    margin-left: 24px;
    padding-top: 24px;
    @media(max-width: 767px) {
        width: 100%;
    }
`;

const VideoInfoOuterWrapper = styled.div`
    width: max-content;
    background: inherit;
    margin-left: 82px;
    margin-left: 0px;
    display: flex;
`;

const VideoInfoInnerWrapper = styled.div`
    background: inherit;
    width: 68.45vw;
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
        theaterMode: false
    }
    render() {
        const { theaterMode } = this.state;
        return (
            <MainTerritory>
                <MainFrameWrapper theaterMode={theaterMode}>
                    <MainFrameContainer>
                        <VideoFrame theaterMode={theaterMode}></VideoFrame>
                        <VideoInfoOuterWrapper>
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