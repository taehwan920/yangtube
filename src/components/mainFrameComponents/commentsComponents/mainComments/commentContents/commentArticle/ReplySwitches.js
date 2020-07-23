import React from 'react';
import styled from 'styled-components';
import ReplyOpenSwitch from './replySwitches/ReplyOpenSwitch';
import ReplyCloseSwitch from './replySwitches/ReplyCloseSwitch';

export const ReplySwitchBox = styled.div`
    width: max-content;
    height: 32px;
    padding-top: 2px;
    padding-bottom: 10px;
    display: flex;
`;

export const ReplySwitchIcon = styled.span`
    width: 20px;
    height: 20px;
    font-size: 14px;
    text-align: center;
    color: #065FD4;
`;

export const ReplySwitchText = styled.span`
    width: auto;
    height: 16px;
    margin-left: 8px;
    font-size: 14px;
    color: #065FD4;
`;

export default class extends React.Component {
    state = {
        replyVisible: false
    }

    openReplies = () => {
        this.setState({ replyVisible: true })
    }

    closeReplies = () => {
        this.setState({ replyVisible: false })
    }
    render() {
        const { replyItems } = this.props;
        const { replyVisible } = this.state;
        return (
            <React.Fragment>
                {replyVisible
                    ? null
                    : <ReplyOpenSwitch
                        replyLength={replyItems.length}
                        openReplies={this.openReplies}></ReplyOpenSwitch>}
                {replyVisible
                    ? <ReplyCloseSwitch
                        replyItems={replyItems}
                        closeReplies={this.closeReplies}></ReplyCloseSwitch>
                    : null}
            </React.Fragment>
        )
    }
};