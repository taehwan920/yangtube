import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from './ReplySwitch';

const ReplySwitchToVisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: 100%;
    margin-left: 56px;
    color: #065FD4;
`;

export default class extends React.Component {
    render() {
        return (
            <ReplySwitchToVisibleWrapper>
                <ReplySwitchBox>
                    <ReplySwitchIcon><i class="fas fa-caret-down"></i></ReplySwitchIcon>
                    <ReplySwitchText>답글 n개 보기</ReplySwitchText>
                </ReplySwitchBox>
            </ReplySwitchToVisibleWrapper>
        )
    }
}