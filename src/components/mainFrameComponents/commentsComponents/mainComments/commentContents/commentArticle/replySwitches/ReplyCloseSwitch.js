import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from '../ReplySwitches';
import ReplyContents from './replyCloseSwitch/ReplyContents';

const ReplySwitchToInvisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: auto;
    margin-left: 56px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const { closeReplies, replyItems } = this.props;
        return (
            <ReplySwitchToInvisibleWrapper>
                <ReplySwitchBox onClick={closeReplies}>
                    <ReplySwitchIcon><i class="fas fa-caret-up"></i></ReplySwitchIcon>
                    <ReplySwitchText>{`답글 ${replyItems.length}개 숨기기`}</ReplySwitchText>
                </ReplySwitchBox>
                {replyItems.map(replyItem => {
                    return (
                        <ReplyContents replyItem={replyItem}></ReplyContents>
                    )
                })}
            </ReplySwitchToInvisibleWrapper>
        )
    }
}