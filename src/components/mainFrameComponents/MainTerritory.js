import React from 'react';
import styled from 'styled-components';
import MainTitleAndDesc from './titleAndDescComponents/MainTitleAndDesc';
import MainComments from './MainComments';
import VideoFrame from './videoComponents/VideoFrame';
import VideoNavPC from '../videoNavComponents/VideoNavPC';


const MainTerritory = styled.div`
    background-color: pink;
    top: 56px;
    position: relative;
    display: flex;
    z-index: 1;
`;

const MainFrameWrapper = styled.div`
    width: ${props => props.theaterMode ? '100%' : '1362px'};
    background: peru;
`;

const VideoInfoOuterWrapper = styled.div`
    background: steelblue;
    margin-left: 58px;
    display: flex;
`;

const VideoInfoInnerWrapper = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 24px;
    background: salmon;
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
                        <VideoInfoInnerWrapper>
                            <MainTitleAndDesc></MainTitleAndDesc>
                            {mobileEnv
                                ? <VideoNavPC></VideoNavPC>
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