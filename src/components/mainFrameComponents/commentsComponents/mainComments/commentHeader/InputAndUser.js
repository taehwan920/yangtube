import React from 'react';
import styled from 'styled-components';
import InputPart from './inputAndUser/InputPart';

const CommentInputAndUserWrapper = styled.div`
    width: 100%;
    min-height: 40px;
    display: flex;
`;

const CommentInputUserIcon = styled.div`
    background-color: #AA47BC;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 50%;
    color: white;
    font-size: 22px;
    text-align: center;
    line-height: 42px;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentInputAndUserWrapper>
                <CommentInputUserIcon draggable="true">
                    G
                </CommentInputUserIcon>
                <InputPart />
            </CommentInputAndUserWrapper>
        )
    }
};