import React from 'react';
import styled from 'styled-components';
import CommentUserIcon from '../../../../commentMixin/CommentUserIcon';
import CommentUserAndTime from '../../../../commentMixin/CommentUserAndTime';
import CommentContent from '../../../../commentMixin/CommentContent';
import LikeAndReply from '../../../../commentMixin/LikeAndReply';
import ReportBtn from '../../../../commentMixin/ReportBtn';

const ReplyListWrapper = styled.div`
    width: 100%;
    height: max-content;
    margin: 12px 0px;
    display: flex;
`;

const UserAndReplyWrapper = styled.div`
    width: calc(100% - 40px - 56px);
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {
    state = {
        hovering: false
    }
    render() {
        const {
            replyItem
        } = this.props;
        const {
            content,
            iconColor,
            likes,
            name,
            timestamp
        } = replyItem;
        const { hovering } = this.state;
        return (
            <ReplyListWrapper
                onMouseOver={() => this.setState({ hovering: true })}
                onMouseOut={() => this.setState({ hovering: false })}
            >
                <CommentUserIcon
                    iconColor={iconColor}
                    name={name}
                />
                <UserAndReplyWrapper>
                    <CommentUserAndTime
                        name={name}
                        timestamp={timestamp}
                    />
                    <CommentContent
                        content={content}
                    />
                    <LikeAndReply
                        likes={likes}
                    />
                </UserAndReplyWrapper>
                <ReportBtn
                    hovering={hovering}
                />
            </ReplyListWrapper>
        )
    }
}