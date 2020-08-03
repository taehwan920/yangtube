import React from 'react';
import styled from 'styled-components';

const OneLineWrapper = styled.div`
    width: max-content;
    height: max-content;
`;

const NormalTxt = styled.span``;

const TimestampTxt = styled.span`
    color: #065FD4;
    cursor: pointer;
`;

export default class extends React.Component {
    shouldComponentUpdate() {
        return false;
    };

    divideByBlank = str => {
        return str.split(' ')
    };

    isNumber = str => {
        if (String(Number(str)) === "NaN") {
            return false;
        };
        return true;
    };

    isTimestamp = str => {
        if (!str.includes(':')) return false;
        const dividedByColon = str.split(':');
        let result = true;
        dividedByColon.forEach(item => {
            if (!this.isNumber(item) || item.length > 2) {
                result = false;
            };
        });
        return result;
    };

    parseTimestamp = str => {
        const dividedByColon = str.split(':').map(item => Number(item));
        let seconds = dividedByColon[0] * 60 + dividedByColon[1];
        return seconds
    };

    goToThatTime = str => () => {
        const video = document.querySelector('.video');
        const directedTime = this.parseTimestamp(str);
        video.currentTime = directedTime;
        window.scrollTo(0, 0);
    };

    render() {
        const {
            content,
        } = this.props;
        const divideToLines = content.split('\n');
        const divideToWords = divideToLines.map(line => this.divideByBlank(line));
        return (
            <React.Fragment>
                {divideToWords.map(item => {
                    return (
                        <OneLineWrapper>
                            {item.map(word => {
                                if (this.isTimestamp(word)) {
                                    return (
                                        <TimestampTxt
                                            onClick={this.goToThatTime(word)}
                                        >
                                            {`${word} `}
                                        </TimestampTxt>
                                    )
                                } else {
                                    return (
                                        <NormalTxt>
                                            {`${word} `}
                                        </NormalTxt>
                                    )
                                }
                            })}
                        </OneLineWrapper>
                    )
                })}
            </React.Fragment>
        )
    }
};