import React from 'react';
import styled from 'styled-components';
import CommentSort from './headerHeader/CommentSort';


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


export default class extends React.Component {
    render() {
        const { contentData } = this.props;
        return (
            <CommentHeaderHeader>
                <CommentNumber>
                    댓글 {contentData.comments.length}개
                </CommentNumber>
                <CommentSort />
            </CommentHeaderHeader>
        )
    }
};