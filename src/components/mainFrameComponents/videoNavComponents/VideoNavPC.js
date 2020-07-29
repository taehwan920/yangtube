import React from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from '../../Mixin';
import VideoItem from './VideoNavMixin/VideoItem';
import VideoSummary from '../../DB/VideoSummary';

const VideoNavPCWrapper = styled.nav`
    background-color: inherit;
    width: 402px;
    height: max-content;
    margin: 0px 24px;
    padding-top: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    @media (max-width: 1023px) {
        display: none;
    }
`;

const NextVideoSection = styled.section`
    width: 100%;
    heigth: 145px;
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
`;

const NextVideoHeader = styled.header`
    width: 100%;
    height: 22px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
`;

const NextVideoText = styled.div`
    width: max-content;
    height: 20px;
    font-size: 16px;
`;

const AutoPlayBox = styled.div`
    width: max-content;
    height: 22px;
    display: flex;
    align-items: center;
`;

const AutoPlayTxt = styled.span`
    width: max-content;
    height: 17px;
    margin-right: 8px;
    font-size: 13px;
`;

export default class extends React.Component {
    render() {
        const {
            contentData
        } = this.props;
        const thisVideo = VideoSummary.filter(video => video.pageUrl === contentData.pageUrl)[0];
        const thisVidIdx = VideoSummary.indexOf(thisVideo);
        const nextVidIdx = thisVidIdx >= VideoSummary.length ? 0 : thisVidIdx + 1;
        const nextVid = VideoSummary[nextVidIdx];
        const restOfVideos = VideoSummary.filter(video => VideoSummary.indexOf(video) !== thisVidIdx && VideoSummary.indexOf(video) !== nextVidIdx);
        const doubleRest = [...restOfVideos, ...restOfVideos];
        return (
            <VideoNavPCWrapper>
                <NextVideoSection>
                    <NextVideoHeader>
                        <NextVideoText>
                            다음 동영상
                        </NextVideoText>
                        <AutoPlayBox>
                            <AutoPlayTxt>
                                자동재생
                            </AutoPlayTxt>
                            <ToggleSwitch />
                        </AutoPlayBox>
                    </NextVideoHeader>
                    <VideoItem
                        video={nextVid}
                    />
                </NextVideoSection>
                {doubleRest.map(video => {
                    return (
                        <VideoItem
                            video={video}
                        />
                    )
                })}
            </VideoNavPCWrapper>
        )
    }
};