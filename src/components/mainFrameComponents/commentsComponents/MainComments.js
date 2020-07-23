import React from 'react';
import styled from 'styled-components';
import CommentHeader from './mainComments/CommentHeader';
import CommentContents from './mainComments/CommentContents';

const CommentsWrapper = styled.section`
    background-color: white;
    width: 100%;
    height: max-content;
    padding-bottom: 125px;
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                <CommentHeader></CommentHeader>
                <CommentContents></CommentContents>
            </CommentsWrapper>
        )
    }
}