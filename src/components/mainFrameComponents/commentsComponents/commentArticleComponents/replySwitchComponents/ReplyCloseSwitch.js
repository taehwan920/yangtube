import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from './ReplySwitches';
import ReplyContents from './ReplyContents';

const ReplySwitchToInvisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: auto;
    margin-left: 56px;
    
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const { closeReplies } = this.props;
        return (
            <ReplySwitchToInvisibleWrapper>
                <ReplySwitchBox onClick={closeReplies}>
                    <ReplySwitchIcon><i class="fas fa-caret-up"></i></ReplySwitchIcon>
                    <ReplySwitchText>답글 n개 숨기기</ReplySwitchText>
                </ReplySwitchBox>
                <ReplyContents></ReplyContents>
            </ReplySwitchToInvisibleWrapper>
        )
    }
}