import React from 'react';
import styled from 'styled-components';
import LikeReplyBtns from './LikeAndReply/LikeReplyBtns';
import ReplyUserIconAndInput from './LikeAndReply/ReplyUserIconAndInput';

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
        const { item } = this.props;
        const { like } = item;
        const { replyActive } = this.state;
        return (
            <CommentLikeAndReplyBox>
                <LikeReplyBtns
                    like={like}
                    toggleReply={this.toggleReply}
                ></LikeReplyBtns>
                {replyActive
                    ? <ReplyUserIconAndInput
                        toggleReply={this.toggleReply}
                    ></ReplyUserIconAndInput>
                    : null}
            </CommentLikeAndReplyBox>
        )
    }
};