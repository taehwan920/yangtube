import React from 'react';
import styled from 'styled-components';
import { timestampTxt } from '../../../../../DB';

const NextVideoItemWrapper = styled.article`
    background-color: inherit;
    width: 100%;
    height: 94px;
    margin-bottom: 8px;
    display: flex;
`;

const NextVideoThumbnailBox = styled.a`
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

const NextVidThumbnail = styled.img`
    width: 100%;
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
        hoverOnThumb: false
    }
    getTimeStamp = (num, lang) => {
        const now = new Date().getTime();
        const sec = 1000;
        const min = sec * 60;
        const hour = min * 60;
        const day = hour * 24;
        const week = day * 7;
        const month = week * 4;
        const year = month * 12;
        const timeGap = now - num;
        if (Math.round(timeGap / year) > 0) {
            return [Math.round(timeGap / year), timestampTxt[lang].year];
        } else if (Math.round(timeGap / month) > 0) {
            return [Math.round(timeGap / month), timestampTxt[lang].month];
        } else if (Math.round(timeGap / week) > 0) {
            return [Math.round(timeGap / week), timestampTxt[lang].week];
        } else if (Math.round(timeGap / day) > 0) {
            return [Math.round(timeGap / day), timestampTxt[lang].day];
        } else if (Math.round(timeGap / hour) > 0) {
            return [Math.round(timeGap / hour), timestampTxt[lang].hour];
        } else if (Math.round(timeGap / min) > 0) {
            return [Math.round(timeGap / min), timestampTxt[lang].min];
        } else {
            return [Math.round(timeGap / sec), timestampTxt[lang].sec]
        }
    };

    parseDecimal = (num, divider) => {
        let parsed;
        num / divider / 10 > 100
            ? parsed = parseInt(num / divider) / 10
            : parsed = parseInt(num / divider);
        return parsed;
    };

    parseNum = (num, lang) => {
        if (lang === 'kr') {
            if (num / 10 ** 8 > 1) {
                return [this.parseDecimal(num, 10 ** 8), '억'];
            } else if (num / 10 ** 4 > 1) {
                return [this.parseDecimal(num, 10 ** 4), '만'];
            } else if (num / 10 ** 3 > 1) {
                return [this.parseDecimal(num, 10 ** 3), '천'];
            } else {
                return num
            }
        }
    };

    parseTime = num => {
        const min = num / 60 >= 10 ? parseInt(num / 60) : `0${parseInt(num / 60)}`;
        const sec = num % 60 >= 10 ? num % 60 : `0${num % 60}`;
        return `${min}:${sec}`;
    };

    render() {
        const {
            video,
            themeColor
        } = this.props;
        const {
            hoverOnThumb
        } = this.state;
        return (
            <NextVideoItemWrapper>
                <NextVideoThumbnailBox
                    href={video.pageUrl}
                    onMouseOver={() => this.setState({ hoverOnThumb: true })}
                    onMouseLeave={() => this.setState({ hoverOnThumb: false })}
                >
                    <NextVidThumbnail
                        src={video.thumbnailUrl}
                    />
                    <VidDurationBox>
                        <VidDuration>
                            {this.parseTime(video.duration)}
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
                            조회수 {this.parseNum(video.views, 'kr')}회
                        </InfoViewNums>
                        <InfoDot>
                            ·
                        </InfoDot>
                        <InfoTimestamp>
                            {this.getTimeStamp(video.timestamp, 'kr')}
                        </InfoTimestamp>
                    </InfoNumberBox>
                </NextVideoInfoBox>
            </NextVideoItemWrapper>
        )
    }
};