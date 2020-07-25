import React from 'react';
import {
    LikeAndDislikeBox,
    LikeRateChartBox,
    LikeBox,
    LikeIcon,
    LikeRate,
    DislikeBox,
    DislikeIcon,
    DislikeRate,
} from '../TitleAndInfo';
import styled from 'styled-components'
import { titleItems } from '../TitleAndInfo';

const LikeEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 6px;
    left: 6px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const DislikeEffect = styled(LikeEffect)`
    top: 7px;
    left: 5px;
`;

const LikeTexts = styled.span`
    height: 16px;
    font-size: 13px;
    line-height: 16px;
`;


export default class extends React.Component {
    state = {
        liked: false,
        disliked: false
    };
    compressNum = number => {
        const cutNum = number.toString().slice(0, 2);
        return Number(cutNum) / 10;
    };

    sanitize = picked => {
        const statesArr = Object.keys(this.state);
        const notPicked = statesArr.filter(state => state !== picked);
        return [picked, ...notPicked]
    }

    clickThumb = stateType => () => {
        const statesArr = this.sanitize(stateType);
        this.setState({
            [statesArr[0]]: !this.state[statesArr[0]],
            [statesArr[1]]: false
        })
    };
    render() {
        const { liked, disliked } = this.state;
        const likeNum = titleItems.pictograms.like[1];
        const dislikeNum = titleItems.pictograms.dislike[1];
        const total = likeNum + dislikeNum;
        const likeRate = parseInt(likeNum / total * 100).toString();
        const dislikeRate = parseInt(dislikeNum / total * 100).toString();
        return (
            <LikeAndDislikeBox>
                <LikeBox liked={liked} onClick={this.clickThumb('liked')}>
                    <LikeIcon>
                        {titleItems.pictograms.like[0]}
                        <LikeEffect></LikeEffect>
                    </LikeIcon>
                    <LikeTexts>
                        {this.compressNum(titleItems.pictograms.like[1])}{titleItems.pictograms.like[2]}
                    </LikeTexts>
                </LikeBox>
                <DislikeBox disliked={disliked} onClick={this.clickThumb('disliked')}>
                    <DislikeIcon>
                        {titleItems.pictograms.dislike[0]}
                        <DislikeEffect></DislikeEffect>
                    </DislikeIcon>
                    <LikeTexts>
                        {this.compressNum(titleItems.pictograms.dislike[1])}{titleItems.pictograms.dislike[2]}
                    </LikeTexts>
                </DislikeBox>
                <LikeRateChartBox>
                    <LikeRate
                        likeRate={likeRate}
                        liked={liked}
                        disliked={disliked}
                    ></LikeRate>
                    <DislikeRate
                        dislikeRate={dislikeRate}
                    ></DislikeRate>
                </LikeRateChartBox>
            </LikeAndDislikeBox>
        )
    }
}