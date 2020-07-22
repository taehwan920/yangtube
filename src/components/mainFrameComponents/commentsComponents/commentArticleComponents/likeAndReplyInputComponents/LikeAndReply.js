import React from 'react';
import styled from 'styled-components';
import LikeReplyBtns from './LikeReplyBtns';
import ReplyInput from './ReplyInput';

const CommentLikeAndReplyBox = styled.div`
    width: 100%;
    min-height: 33px;
    height: auto;
    margin-top: 4px;
    display: flex;
    flex-direction: column;
`;

const ReplyInputAndIconWrapper = styled.div`
    width: 100%;
    min-height: 71.5px;
    height: auto;
    display: flex;
`;

const ReplyUserIconBox = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 16px;
`;

const ReplyUserIcon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #AA47BC;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 26px;
`;



export default class extends React.Component {
    render() {
        return (
            <CommentLikeAndReplyBox>
                <LikeReplyBtns></LikeReplyBtns>
                <ReplyInputAndIconWrapper>
                    <ReplyUserIconBox>
                        <ReplyUserIcon draggable="true">
                            G
                        </ReplyUserIcon>
                    </ReplyUserIconBox>
                    <ReplyInput></ReplyInput>
                </ReplyInputAndIconWrapper>
            </CommentLikeAndReplyBox>
        )
    }
}