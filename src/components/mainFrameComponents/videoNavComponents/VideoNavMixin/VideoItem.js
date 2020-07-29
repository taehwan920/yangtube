import React from 'react';
import styled from 'styled-components';
import { timestampTxt } from '../../../DB';

const NextVideoItemWrapper = styled.article`
    background-color: inherit;
    width: 100%;
    height: 94px;
    margin-bottom: 8px;
    display: flex;
`;

const NextVideoThumbnailBox = styled.div`
    background: gray;
    width: 168px;
    height: 94px;
    position: relative;
    margin-right: 8px;
    cursor: pointer;
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

const InfoTitle = styled(InfoContent)`
    font-size: 14px;
    margin-bottom: 4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: '';
`;

const InfoUploader = styled(InfoContent)`
    font-size: 13px;
    margin-bottom: 3px;
    color: rgba(0, 0, 0, 0.7);
`;

const InfoNumberBox = styled(InfoContent)`
    display: flex;
    align-items: center;
`;

const InfoNumberContent = styled.span`
    width: max-content;
    height: 18px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
`;

const InfoViewNums = styled(InfoNumberContent)``;

const InfoDot = styled(InfoNumberContent)`
    margin: 0px 4px;
`;

const InfoTimestamp = styled(InfoNumberContent)``;

export default class extends React.Component {
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

    render() {
        const { video } = this.props;
        return (
            <NextVideoItemWrapper>
                <NextVideoThumbnailBox>
                    <NextVidThumbnail
                        src={video.thumbnailUrl}
                    />
                </NextVideoThumbnailBox>
                <NextVideoInfoBox>
                    <InfoTitle>
                        {video.title}
                    </InfoTitle>
                    <InfoUploader>
                        {video.uploader}
                    </InfoUploader>
                    <InfoNumberBox>
                        <InfoViewNums>
                            {this.parseNum(video.views, 'kr')}회
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