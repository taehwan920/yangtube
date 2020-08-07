import React from 'react';
import styled from 'styled-components';
import {
    getTimestamp,
    parseNum,
    parseTime
} from '../../../../../Mixin';
import NextThumb from './videoItem/NextThumb';

const NextVideoItemWrapper = styled.article`
    background-color: inherit;
    width: 100%;
    height: 94px;
    margin-bottom: 8px;
    display: flex;
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

const PlayIcon = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    opacity: ${props => props.hoverOnThumb ? 0.65 : 0};

`;

const NextVideoThumbnailBox = styled.a`
    background: gray;
    width: 168px;
    height: 94px;
    position: relative;
    margin-right: 8px;
    cursor: pointer;
`;

const NextVideoInfoBox = styled.div`
    width: 226px;
    height: 94px;
    display: flex;
    flex-direction: column;
`;

const InfoContent = styled.span`
    width: 100%;
    height: max-content;
    cursor: pointer;
`;

const InfoTitle = styled.a`
    width: 100%;
    height: max-content;
    cursor: pointer;
    padding-right: 20px;
    margin-bottom: 4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: '';
    color: ${props => props.themeColor.normalFont};
    font-size: 14px;
    font-weight: 500;
`;

const InfoUploader = styled(InfoContent)`
    font-size: 13px;
    margin-bottom: 3px;
    color: ${props => props.themeColor.grayFont};
`;

const InfoNumberBox = styled(InfoContent)`
    display: flex;
    align-items: center;
    color: ${props => props.themeColor.grayFont};
`;

const InfoNumberContent = styled.span`
    width: max-content;
    height: 18px;
    font-size: 13px;
    color: inherit;
`;

const InfoViewNums = styled(InfoNumberContent)``;

const InfoDot = styled(InfoNumberContent)`
    margin: 0px 4px;
`;

const InfoTimestamp = styled(InfoNumberContent)``;

export default class extends React.Component {
    state = {
        hoverOnThumb: false,
    };

    render() {
        const {
            lang,
            langState,
            themeColor,
            video,
        } = this.props;
        const {
            hoverOnThumb,
        } = this.state;
        return (
            <NextVideoItemWrapper>
                <NextVideoThumbnailBox
                    href={video.pageUrl}
                    onMouseOver={() => this.setState({ hoverOnThumb: true })}
                    onMouseLeave={() => this.setState({ hoverOnThumb: false })}
                >
                    <NextThumb
                        video={video}
                    />
                    <VidDurationBox>
                        <VidDuration>
                            {parseTime(video.duration)}
                        </VidDuration>
                    </VidDurationBox>
                    <PlayIcon
                        hoverOnThumb={hoverOnThumb}
                    >
                        <i class="fas fa-play"></i>
                    </PlayIcon>
                </NextVideoThumbnailBox>
                <NextVideoInfoBox>
                    <InfoTitle
                        href={video.pageUrl}
                        themeColor={themeColor}
                    >
                        {video.title}
                    </InfoTitle>
                    <InfoUploader
                        themeColor={themeColor}
                    >
                        {video.uploader}
                    </InfoUploader>
                    <InfoNumberBox
                        themeColor={themeColor}
                    >
                        <InfoViewNums>
                            {lang.videoNav.views}{parseNum(video.views, langState)}{lang.videoNav.viewMeasure}
                        </InfoViewNums>
                        <InfoDot>
                            ·
                        </InfoDot>
                        <InfoTimestamp>
                            {getTimestamp(video.timestamp, langState)}
                        </InfoTimestamp>
                    </InfoNumberBox>
                </NextVideoInfoBox>
            </NextVideoItemWrapper>
        )
    }
};