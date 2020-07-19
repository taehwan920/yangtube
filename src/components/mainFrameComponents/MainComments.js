import React from 'react';
import styled from 'styled-components';

const CommentsWrapper = styled.section`
    background-color: lightgreen;
    width: 80%;
    height: 1500px;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                댓글
            </CommentsWrapper>
        )
    }
}