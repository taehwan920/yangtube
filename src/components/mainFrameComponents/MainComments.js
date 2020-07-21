import React from 'react';
import styled from 'styled-components';
import CommentHeader from './commentsComponents/CommentHeader';

const CommentsWrapper = styled.section`
    background-color: lightgreen;
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
`;



export default class extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                <CommentHeader></CommentHeader>
                <section>

                </section>
            </CommentsWrapper>
        )
    }
}