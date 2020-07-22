import React from 'react';
import styled from 'styled-components';
import ReplyInput from './ReplyInput';
import ReplyUserIcon from './ReplyUserIcon';

const ReplyInputAndIconWrapper = styled.div`
    width: 100%;
    min-height: 71.5px;
    height: auto;
    display: flex;
`;

export default class extends React.Component {
    render() {
        return (
            <ReplyInputAndIconWrapper>
                <ReplyUserIcon></ReplyUserIcon>
                <ReplyInput></ReplyInput>
            </ReplyInputAndIconWrapper>
        )
    }
}