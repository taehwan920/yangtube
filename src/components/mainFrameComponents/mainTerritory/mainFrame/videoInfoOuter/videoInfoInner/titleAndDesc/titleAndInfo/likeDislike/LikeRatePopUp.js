import React from 'react';
import styled from 'styled-components';

const RatePopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: max-content;
    height: max-content;
    padding: 4px 10px;
    border-radius: 2px;
    position: absolute;
    bottom: 115%;
    left: 10%;
    opacity: ${props => props.rateHovering ? 1 : 0};
    font-size: 12px;
    color: white;
    transition: opacity 0.2s ease-out;
    cursor: default;
`;

export default class extends React.Component {
    addComma = num => {
        const numToStr = String(num);
        if (numToStr.length > 3) return num;
        const reversed = numToStr.split('').reverse();
        const newArr = [];
        let cnt = 0;
        for (let i = 0; i < numToStr.length; i++) {
            if (cnt === 2 && i !== numToStr.length - 1) {
                cnt = 0;
                newArr.push(reversed[i]);
                newArr.push(',');
            } else {
                newArr.push(reversed[i]);
                cnt++
            }
        };
        const result = newArr.reverse();
        console.log(result);
        return result.join('');
    };

    render() {
        const {
            rateHovering,
            contentData
        } = this.props;
        const likes = this.addComma(contentData.likes);
        const dislikes = this.addComma(contentData.dislikes);
        return (
            <RatePopUpBox
                rateHovering={rateHovering}
            >
                {likes} / {dislikes}
            </RatePopUpBox>
        )
    }
};