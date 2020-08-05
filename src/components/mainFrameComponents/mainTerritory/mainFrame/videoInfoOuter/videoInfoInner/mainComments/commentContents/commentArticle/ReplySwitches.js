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
    color: ${props => props.themeColor.main.pointerColor};
`;

export const ReplySwitchText = styled.span`
    width: auto;
    height: 16px;
    margin-left: 8px;
    font-size: 14px;
    color: ${props => props.themeColor.main.pointerColor};
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
        const {
            lang,
            langState,
            replyItems,
            themeColor,
        } = this.props;
        const {
            replyVisible
        } = this.state;
        return (
            <React.Fragment>
                {replyVisible
                    ? null
                    : <ReplyOpenSwitch
                        lang={lang}
                        openReplies={this.openReplies}
                        replyLength={replyItems.length}
                        themeColor={themeColor}
                    />
                }
                {replyVisible
                    ? <ReplyCloseSwitch
                        closeReplies={this.closeReplies}
                        lang={lang}
                        langState={langState}
                        replyItems={replyItems}
                        replyLength={replyItems.length}
                        themeColor={themeColor}
                    />
                    : null}
            </React.Fragment>
        )
    }
};