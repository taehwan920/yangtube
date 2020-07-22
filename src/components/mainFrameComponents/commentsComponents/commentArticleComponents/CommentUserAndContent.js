import React from 'react';
import styled from 'styled-components';
import CommentUserIcon from './CommentUserIcon';
import CommentUserAndTime from './CommentUserAndTime';
import CommentContent from './CommentContent';
import LikeAndReply from './likeAndReplyInputComponents/LikeAndReply';
import ReportBtn from './ReportBtn';

const CommentUserAndContentWrapper = styled.div`
    width: 100%;
    display: flex;
`;

const UserAndContentWrapper = styled.div`
    width: calc(100% - 40px - 56px);
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {
    state = {
        hovering: false
    }
    render() {
        const { commentItem } = this.props;
        const { content, iconColor, userName, timestamp } = commentItem.main;
        const { hovering } = this.state;
        return (
            <CommentUserAndContentWrapper
                onMouseOver={() => this.setState({ hovering: true })}
                onMouseOut={() => this.setState({ hovering: false })}
            >
                <CommentUserIcon
                    iconColor={iconColor}
                    userName={userName}
                ></CommentUserIcon>
                <UserAndContentWrapper>
                    <CommentUserAndTime
                        userName={userName}
                        timestamp={timestamp}
                    ></CommentUserAndTime>
                    <CommentContent
                        content={content}
                    ></CommentContent>
                    <LikeAndReply
                        item={commentItem.main}
                    ></LikeAndReply>
                </UserAndContentWrapper>
                <ReportBtn hovering={hovering}></ReportBtn>
            </CommentUserAndContentWrapper>
        )
    }
}