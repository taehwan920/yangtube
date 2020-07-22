import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from './ReplySwitches';

const ReplySwitchToVisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: 100%;
    margin-left: 56px;
    color: #065FD4;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const { openReplies } = this.props;
        return (
            <ReplySwitchToVisibleWrapper>
                <ReplySwitchBox onClick={openReplies}>
                    <ReplySwitchIcon><i class="fas fa-caret-down"></i></ReplySwitchIcon>
                    <ReplySwitchText>답글 n개 보기</ReplySwitchText>
                </ReplySwitchBox>
            </ReplySwitchToVisibleWrapper>
        )
    }
}