import React from 'react';
import styled from 'styled-components';
import LikeReplyBtns from './LikeReplyBtns';
import ReplyInputAndUser from './ReplyInputAndUser';

const CommentLikeAndReplyBox = styled.div`
    width: 100%;
    min-height: 33px;
    height: auto;
    margin-top: 4px;
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {
    state = {
        replyActive: false
    }
    toggleReply = () => {
        this.setState({
            replyActive: !this.state.replyActive
        })
    }
    render() {
        const { replyActive } = this.state;
        return (
            <CommentLikeAndReplyBox>
                <LikeReplyBtns
                    toggleReply={this.toggleReply}
                ></LikeReplyBtns>
                {replyActive
                    ? <ReplyInputAndUser></ReplyInputAndUser>
                    : null}
            </CommentLikeAndReplyBox>
        )
    }
};