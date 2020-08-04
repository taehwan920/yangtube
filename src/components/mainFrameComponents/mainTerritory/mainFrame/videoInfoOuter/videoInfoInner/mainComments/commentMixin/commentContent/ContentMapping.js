import React from 'react';
import styled from 'styled-components';

const OneLineWrapper = styled.div`
    width: max-content;
    height: max-content;
`;

const NormalTxt = styled.span`
    color: ${props => props.themeColor.normalFont};
`;

const TimestampTxt = styled.span`
    color: ${props => props.themeColor.main.pointerColor};
    cursor: pointer;
`;

export default class extends React.Component {
    shouldComponentUpdate(prevProps) {
        if (prevProps.themeColor.normalFont === this.props.themeColor.normalFont) {
            return false;
        }
        return true;
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
        let result = false;
        dividedByColon.forEach(item => {
            if (this.isNumber(item) && item.length <= 2 && item.length > 0) {
                result = true;
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
            themeColor,
        } = this.props;
        const divideToLines = content.split('\n');
        const divideToWords = divideToLines.map(line => this.divideByBlank(line));
        console.log(themeColor);
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
                                            themeColor={themeColor}
                                        >
                                            {`${word} `}
                                        </TimestampTxt>
                                    )
                                } else {
                                    return (
                                        <NormalTxt
                                            themeColor={themeColor}
                                        >
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