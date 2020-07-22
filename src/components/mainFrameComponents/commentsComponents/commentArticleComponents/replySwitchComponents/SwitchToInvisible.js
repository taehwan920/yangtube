import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from './ReplySwitch';

const ReplySwitchToInvisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: auto;
    margin-left: 56px;
    color: #065FD4;
`;

const ReplyListWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-left: 56px;
    display: flex;
`;

export default class extends React.Component {
    render() {
        return (
            <ReplySwitchToInvisibleWrapper>
                <ReplySwitchBox>
                    <ReplySwitchIcon><i class="fas fa-caret-up"></i></ReplySwitchIcon>
                    <ReplySwitchText>답글 n개 숨기기</ReplySwitchText>
                </ReplySwitchBox>
                <ReplyListWrapper>
                </ReplyListWrapper>
            </ReplySwitchToInvisibleWrapper>
        )
    }
}