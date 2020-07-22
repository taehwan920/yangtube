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

const CommentNameAndContentWrapper = styled.div`
    width: calc(100% - 40px - 56px);
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentUserAndContentWrapper>
                <CommentUserIcon></CommentUserIcon>
                <CommentNameAndContentWrapper>
                    <CommentUserAndTime></CommentUserAndTime>
                    <CommentContent></CommentContent>
                    <LikeAndReply></LikeAndReply>
                </CommentNameAndContentWrapper>
                <ReportBtn></ReportBtn>
            </CommentUserAndContentWrapper>
        )
    }
}