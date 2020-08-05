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
        replyActive: false,
        replyClicked: false
    };

    clickAniEnd = () => {
        this.setState({ replyClicked: false });
    }

    toggleReply = () => {
        this.setState({
            replyActive: !this.state.replyActive,
            replyClicked: true,
        })
    };
    render() {
        const {
            lang,
            langState,
            likes,
            themeColor,
        } = this.props;
        const {
            replyActive,
            replyClicked
        } = this.state;
        return (
            <CommentLikeAndReplyBox>
                <LikeReplyBtns
                    lang={lang}
                    langState={langState}
                    likes={likes}
                    toggleReply={this.toggleReply}
                    themeColor={themeColor}
                />
                {replyActive
                    ?
                    <ReplyUserIconAndInput
                        clickAniEnd={this.clickAniEnd}
                        lang={lang}
                        themeColor={themeColor}
                        toggleReply={this.toggleReply}
                        replyClicked={replyClicked}
                    />
                    : null}
            </CommentLikeAndReplyBox>
        )
    }
};