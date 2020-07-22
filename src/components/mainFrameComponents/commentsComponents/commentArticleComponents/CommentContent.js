import React from 'react';
import styled from 'styled-components';
import { commentItems } from '../CommentContents';

const CommentContentWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const CommentContent = styled.div`
    width: 100%;
    height: auto;
    min-height: 20px;
    font-size: 14px;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: '';
`;

const CommentShowMore = styled.div`
    height: 16px;
    margin-top: 4px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`;

export default class extends React.Component {
    render() {
        return (
            <CommentContentWrapper>
                <CommentContent>
                    {commentItems.main.content}
                </CommentContent>
                <CommentShowMore>
                    자세히 보기
                </CommentShowMore>
            </CommentContentWrapper>
        )
    }
}