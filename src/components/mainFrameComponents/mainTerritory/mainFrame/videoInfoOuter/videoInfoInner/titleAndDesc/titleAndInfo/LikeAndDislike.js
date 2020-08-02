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
import LikePopUp from './likeDislike/LikePopUp';
import LikeRatePopUp from './likeDislike/LikeRatePopUp';

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
        disliked: false,
        likeHovering: false,
        rateHovering: false,
        isLike: null,
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

    onLikeBox = () => {
        this.setState({
            likeHovering: true,
            isLike: true
        });
    };

    onDislikeBox = () => {
        this.setState({
            likeHovering: true,
            isLike: false
        });
    };

    mouseOutOfLike = () => {
        this.setState({
            likeHovering: false
        });
    };

    mouseOnRate = () => {
        this.setState({
            rateHovering: true,
        });
    };

    mouseOutOfRate = () => {
        this.setState({
            rateHovering: false
        });
    };

    render() {
        const {
            contentData,
            parseNum
        } = this.props;
        const {
            liked,
            disliked,
            likeHovering,
            rateHovering,
            isLike,
        } = this.state;
        const likeNum = contentData.likes;
        const dislikeNum = contentData.dislikes;
        const total = likeNum + dislikeNum;
        const likeRate = parseInt(likeNum / total * 100).toString();
        const dislikeRate = parseInt(dislikeNum / total * 100).toString();
        const likeItem = parseNum(contentData.likes, 'kr');
        const dislikeItem = parseNum(contentData.dislikes, 'kr');
        return (
            <LikeAndDislikeBox>
                <LikeBox
                    liked={liked}
                    onClick={this.clickThumb('liked')}
                >
                    <LikeIcon
                        onMouseOver={this.onLikeBox}
                        onMouseLeave={this.mouseOutOfLike}
                    >
                        <i class="fas fa-thumbs-up"></i>
                        <LikeEffect />
                    </LikeIcon>
                    <LikeTexts>
                        {likeItem}
                    </LikeTexts>
                </LikeBox>
                <DislikeBox
                    disliked={disliked}
                    onClick={this.clickThumb('disliked')}
                >
                    <DislikeIcon
                        onMouseOver={this.onDislikeBox}
                        onMouseLeave={this.mouseOutOfLike}
                    >
                        <i class="fas fa-thumbs-up"></i>
                        <DislikeEffect />
                    </DislikeIcon>
                    <LikeTexts>
                        {dislikeItem}
                    </LikeTexts>
                </DislikeBox>
                <LikeRateChartBox
                    onMouseOver={this.mouseOnRate}
                    onMouseLeave={this.mouseOutOfRate}
                >
                    <LikeRate
                        likeRate={likeRate}
                        liked={liked}
                        disliked={disliked}
                    />
                    <DislikeRate
                        dislikeRate={dislikeRate}
                    ></DislikeRate>
                </LikeRateChartBox>
                <LikePopUp
                    likeHovering={likeHovering}
                    isLike={isLike}
                />
                <LikeRatePopUp
                    rateHovering={rateHovering}
                    contentData={contentData}
                />
            </LikeAndDislikeBox>
        )
    }
}