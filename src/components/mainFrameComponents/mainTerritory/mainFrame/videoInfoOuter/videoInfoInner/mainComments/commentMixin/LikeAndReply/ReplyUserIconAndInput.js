import React from 'react';
import styled from 'styled-components';
import ReplyUserIcon from './userIconAndInput/ReplyUserIcon';
import ReplyInput from './userIconAndInput/ReplyInput';

const ReplyInputAndIconWrapper = styled.div`
    width: 100%;
    min-height: 71.5px;
    height: auto;
    display: flex;
`;

export default class extends React.Component {
    render() {
        const {
            lang,
            toggleReply,
            themeColor,
        } = this.props;
        return (
            <ReplyInputAndIconWrapper>
                <ReplyUserIcon />
                <ReplyInput
                    lang={lang}
                    toggleReply={toggleReply}
                    themeColor={themeColor}
                />
            </ReplyInputAndIconWrapper>
        )
    }
}