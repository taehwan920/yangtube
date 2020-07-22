import React from 'react';
import styled from 'styled-components';

const CommentUserIconWrapper = styled.div`
    width: 56px;
    height: 100%;
`;

const CommentUserIconBox = styled.div`
    width: 100%;
    height: 43px;
`;

const CommentUserIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #EC407A;
    border-radius: 50%;
    font-size: 22px;
    text-align: center;
    line-height: 42px;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentUserIconWrapper>
                <CommentUserIconBox>
                    <CommentUserIcon>
                        V
                    </CommentUserIcon>
                </CommentUserIconBox>
            </CommentUserIconWrapper>
        )
    }
}