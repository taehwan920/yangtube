import React from 'react';
import styled from 'styled-components';
import { ReplySwitchBox, ReplySwitchIcon, ReplySwitchText } from '../ReplySwitches';

const ReplySwitchToVisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: 100%;
    margin-left: 56px;
    color: #065FD4;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const {
            lang,
            openReplies,
            replyLength,
            themeColor,
        } = this.props;
        return (
            <ReplySwitchToVisibleWrapper>
                <ReplySwitchBox
                    onClick={openReplies}
                >
                    <ReplySwitchIcon
                        themeColor={themeColor}
                    >
                        <i class="fas fa-caret-down"></i>
                    </ReplySwitchIcon>
                    <ReplySwitchText
                        themeColor={themeColor}
                    >
                        {lang.comment.replyNum}{replyLength}{lang.comment.replyMeasure}
                    </ReplySwitchText>
                </ReplySwitchBox>
            </ReplySwitchToVisibleWrapper>
        )
    }
}