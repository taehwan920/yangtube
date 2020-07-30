import React from 'react';
import styled from 'styled-components';
import { CommentClickEffect } from '../CommentHeader';

const CommentHeaderHeader = styled.header`
    width: 100%;
    height: 24px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
`;

const CommentNumber = styled.div`
    width: auto;
    height: 100%;
    margin-right: 32px;
    font-size: 16px;
`;

const CommentSortBox = styled.div`
    width: auto;
    height: 100%;
    padding: 0px 4px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
`;

const CommentSortIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    line-height: 24px;
    font-size: 16px;
`;

const CommentSortText = styled.span`
    width: auto;
    height: auto;
    font-size: 14px;
`;

export default class extends React.Component {
    render() {
        const { contentData } = this.props;
        return (
            <CommentHeaderHeader>
                <CommentNumber>댓글 {contentData.comments.length}개</CommentNumber>
                <CommentSortBox>
                    <CommentSortIcon>
                        <i class="fas fa-sort-amount-down"></i>
                    </CommentSortIcon>
                    <CommentSortText>
                        정렬 기준
                    </CommentSortText>
                    <CommentClickEffect />
                </CommentSortBox>
            </CommentHeaderHeader>
        )
    }
}