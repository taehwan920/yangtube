import React from 'react';
import styled, { css } from 'styled-components';
import { shortNum } from '../../../../../../../../DB';

const LikeAndReplyWrapper = styled.div`
    width: 100%;
    height: 33px;
    font-size: 14px;
    display: flex;
    align-items: center;
    
`;

const HoveringIcon = css`
    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`;

const LikeIcon = styled.div`
    width: 32px;
    height: 32px;
    padding: 8px;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.liked
        ? props.themeColor.main.pointerColor
        : props.themeColor.main.titleInfos};
    cursor: pointer;
    
    ${HoveringIcon}
    
`;

const DislikeIcon = styled(LikeIcon)`
    line-height: 25px;
    color: ${props => props.disliked
        ? props.themeColor.main.pointerColor
        : props.themeColor.main.titleInfos};
    cursor: pointer;

    ${HoveringIcon}
`;

const LikeNum = styled.div`
    min-width: 7.5px;
    height: 18px;
    margin-right: 8px;
    line-height: 22px;
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.liked
        ? props.themeColor.main.pointerColor
        : props.themeColor.grayFont};
    cursor: pointer;

    ${HoveringIcon}
`;

const ReplyBtn = styled.div`
    min-width: 67px;
    width: max-content;
    height: 33px;
    padding: 8px 16px;
    position: relative;
    color: ${props => props.themeColor.grayFont};
    text-align: center;
    cursor: pointer;
`;

const ClickEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.1s linear;
    
    &:active{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export default class extends React.Component {
    state = {
        liked: false,
        disliked: false
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked,
            disliked: false
        })
    }

    toggleDislike = () => {
        this.setState({
            liked: false,
            disliked: !this.state.disliked
        })
    }

    shortenNum = (num, lang) => {
        if (num === 0) { return [''] }
        if (num < 1000) { return [num] }
        const divider = shortNum[lang];
        for (let i in divider) {
            if (num / divider[i][0] >= 1) {
                let temp = parseInt(num / divider[i][0] * 10) / 10;
                return [temp, divider[i][1]];
            }
        };
    };

    render() {
        const {
            likes,
            toggleReply,
            themeColor,
        } = this.props;
        const {
            disliked,
            liked,
        } = this.state;
        const likedNumber = this.shortenNum(likes, 'kr');
        return (
            <LikeAndReplyWrapper>
                <LikeIcon
                    liked={liked}
                    onClick={this.toggleLike}
                    themeColor={themeColor}
                >
                    <i class="fas fa-thumbs-up"></i>
                </LikeIcon>
                <LikeNum
                    liked={liked}
                    onClick={this.toggleLike}
                    themeColor={themeColor}
                >
                    {likedNumber.length < 2
                        ? likedNumber[0]
                        : `${likedNumber[0]}${likedNumber[1]}`}
                </LikeNum>
                <DislikeIcon
                    disliked={disliked}
                    onClick={this.toggleDislike}
                    themeColor={themeColor}
                >
                    <i class="fas fa-thumbs-down"></i>
                </DislikeIcon>
                <ReplyBtn
                    draggable="true"
                    onClick={toggleReply}
                    themeColor={themeColor}
                >
                    답글
                    <ClickEffect />
                </ReplyBtn>
            </LikeAndReplyWrapper>
        )
    }
}