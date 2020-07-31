import React from 'react';
import styled from 'styled-components';
import { timestampTxt } from '../../../../../../../DB';

const CommentUserAndTimeWrapper = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 2px;
    font-size: 13px;
    cursor: pointer;
`;

const CommentUserName = styled.span`
    height: 18px;
    margin-right: 4px;
    margin-bottom: 2px;
`;

const CommentTimeStamp = styled.span`
    color: rgba(0, 0, 0, 0.6);
`;

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

    render() {
        const { name, timestamp } = this.props;
        const calculated = this.getTimeStamp(timestamp, 'kr');
        return (
            <CommentUserAndTimeWrapper>
                <CommentUserName>
                    {name}
                </CommentUserName>
                <CommentTimeStamp>
                    {`${calculated[0]}${calculated[1]}` || '1일 전'}
                </CommentTimeStamp>
            </CommentUserAndTimeWrapper>
        )
    }
}