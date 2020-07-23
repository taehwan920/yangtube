import React from 'react';
import styled from 'styled-components';
import MainTitleAndDesc from './titleAndDescComponents/MainTitleAndDesc';
import MainComments from './commentsComponents/MainComments';
import VideoFrame from './videoComponents/VideoFrame';
import VideoNavPC from '../videoNavComponents/VideoNavPC';
import VideoNavNonPC from '../videoNavComponents/VideoNavNonPC';


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
`;

const VideoInfoOuterWrapper = styled.div`
    width: max-content;
    background: inherit;
    margin-left: 82px;
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
`;

export default class extends React.Component {
    state = {
        mobileEnv: false,
        theaterMode: false
    }
    render() {
        const { mobileEnv, theaterMode } = this.state;
        return (
            <MainTerritory>
                <MainFrameWrapper theaterMode={theaterMode}>
                    <VideoFrame theaterMode={theaterMode}></VideoFrame>
                    <VideoInfoOuterWrapper>
                        <VideoInfoInnerWrapper
                            theaterMode={theaterMode}
                        >
                            <MainTitleAndDesc></MainTitleAndDesc>
                            {mobileEnv
                                ? <VideoNavNonPC></VideoNavNonPC>
                                : null}
                            <MainComments></MainComments>
                        </VideoInfoInnerWrapper>
                        {theaterMode
                            ? <VideoNavPC></VideoNavPC>
                            : null}
                    </VideoInfoOuterWrapper>
                </MainFrameWrapper>
                {theaterMode
                    ? null
                    : <VideoNavPC></VideoNavPC>}
            </MainTerritory>
        )
    }
}