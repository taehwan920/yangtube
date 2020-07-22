import React from 'react';
import styled from 'styled-components';
import CommentUserAndContent from './CommentUserAndContent';
import ReplySwitches from './replySwitchComponents/ReplySwitches';

const CommentArticleWrapper = styled.article`
    width: 100%;
    margin-bottom: 16px;
`;

export default class extends React.Component {
    render() {
        const { commentItem } = this.props;
        const replyItems = commentItem.reply;
        console.log(commentItem);
        return (
            <CommentArticleWrapper>
                <CommentUserAndContent commentItem={commentItem}></CommentUserAndContent>
                <ReplySwitches replyItems={replyItems}></ReplySwitches>
            </CommentArticleWrapper>
        )
    };
};