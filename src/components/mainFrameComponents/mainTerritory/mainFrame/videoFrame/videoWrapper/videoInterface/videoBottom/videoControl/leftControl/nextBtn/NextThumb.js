import React from 'react';
import styled from 'styled-components';
import VideoSummary from '../../../../../../../../../../DB/VideoSummary';

const NextVideoPopUpWrapper = styled.div`
    background: rgba(0, 0, 0, 0.75);
    width: max-content;
    height: max-content;
    padding: 2px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    left: 0;
    display: flex;
    visibility: ${props => props.hovering ? 'visible' : 'hidden'};
`;

const InfoPopUpBox = styled.div`
    width: 168px;
    height: 94px;
    padding: 0px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoPopUp = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: gray;
`;

const NextVideoTitle = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: white;
`;

const NextVideoThumbnailBox = styled.div`
    background: gray;
    width: 168px;
    height: 94px;
    position: relative;
    margin-right: 8px;
    cursor: pointer;
`;

const VidDurationBox = styled.div`
    background: rgba(0, 0, 0, 0.75);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 4px;
    right: 4px;
`;

const VidDuration = styled.span`
    font-size: 12px;
    font-weight: 500; 
    letter-spacing: 0.5px;
    color: white;
`;

const NextVidThumbnail = styled.img`
    width: 100%;
`;

export default class extends React.Component {
    parseTime = num => {
        const min = num / 60 >= 10 ? parseInt(num / 60) : `0${parseInt(num / 60)}`;
        const sec = num % 60 >= 10 ? num % 60 : `0${num % 60}`;
        return `${min}:${sec}`;
    };

    getNextVideos = () => {
        const { contentData } = this.props;
        const thisVideo = VideoSummary.filter(video => video.pageUrl === contentData.pageUrl)[0];
        const thisVidIdx = VideoSummary.indexOf(thisVideo);
        const nextVidIdx = thisVidIdx >= VideoSummary.length - 1 ? 0 : thisVidIdx + 1;
        const nextVid = VideoSummary[nextVidIdx];
        return nextVid;
    };

    render() {
        const {
            hovering,
        } = this.props;
        const nextVideo = this.getNextVideos();
        const {
            title,
            thumbnailUrl,
            duration
        } = nextVideo;
        return (
            <NextVideoPopUpWrapper
                hovering={hovering}
            >
                <NextVideoThumbnailBox>
                    <NextVidThumbnail
                        src={thumbnailUrl}
                    />
                    <VidDurationBox>
                        <VidDuration>
                            {this.parseTime(duration)}
                        </VidDuration>
                    </VidDurationBox>
                </NextVideoThumbnailBox>
                <InfoPopUpBox>
                    <InfoPopUp>
                        다음(SHIFT+N)
                    </InfoPopUp>
                    <NextVideoTitle>
                        {title}
                    </NextVideoTitle>
                </InfoPopUpBox>
            </NextVideoPopUpWrapper>
        )
    }
};