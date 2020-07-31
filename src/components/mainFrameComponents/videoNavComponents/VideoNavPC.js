import React from 'react';
import styled from 'styled-components';
import NavInners from './VideoNavMixin/NavInners';
import VideoSummary from '../../DB/VideoSummary';
import { shuffle } from '../../Mixin';

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

export default class extends React.Component {
    getNextAndRestVideos = () => {
        const { contentData } = this.props;
        const thisVideo = VideoSummary.filter(video => video.pageUrl === contentData.pageUrl)[0];
        const thisVidIdx = VideoSummary.indexOf(thisVideo);
        const nextVidIdx = thisVidIdx >= VideoSummary.length - 1 ? 0 : thisVidIdx + 1;
        const nextVid = VideoSummary[nextVidIdx];
        const restOfVideos = VideoSummary.filter(video => VideoSummary.indexOf(video) !== thisVidIdx && VideoSummary.indexOf(video) !== nextVidIdx);
        return [nextVid, restOfVideos];
    };

    render() {
        const getVideos = this.getNextAndRestVideos();
        const nextVideo = getVideos[0];
        const restOfVideos = getVideos[1];
        const doubleRest = shuffle([...restOfVideos, ...restOfVideos]);
        return (
            <VideoNavPCWrapper>
                <NavInners
                    nextVideo={nextVideo}
                    doubleRest={doubleRest}
                />
            </VideoNavPCWrapper>
        )
    }
};