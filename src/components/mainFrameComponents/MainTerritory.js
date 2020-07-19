import React from 'react';
import styled from 'styled-components';
import MainDescription from './MainDescription';
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
    width: 100%;
    background: peru;
`;

const VideoInfoOuterWrapper = styled.div`
    background: steelblue;
    margin: 0px 58px;
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
                <MainFrameWrapper>
                    <VideoFrame theaterMode={theaterMode}></VideoFrame>
                    <VideoInfoOuterWrapper>
                        <VideoInfoInnerWrapper>
                            <MainDescription></MainDescription>
                            {mobileEnv
                                ? <VideoNavPC></VideoNavPC>
                                : null}
                            <MainComments></MainComments>
                        </VideoInfoInnerWrapper>
                        <VideoNavPC></VideoNavPC>
                    </VideoInfoOuterWrapper>
                </MainFrameWrapper>
                {/* <VideoNavPC></VideoNavPC> */}
            </MainTerritory>
        )
    }
}