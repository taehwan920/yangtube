import React from 'react';
import styled from 'styled-components';
import { getTimestamp } from '../../../../../../../Mixin';

const CommentUserAndTimeWrapper = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 2px;
    font-size: 13px;
    cursor: pointer;
`;

const CommentUserName = styled.span`
    height: 18px;
    margin-right: 4px;
    margin-bottom: 2px;
    color: ${props => props.themeColor.normalFont};
`;

const CommentTimeStamp = styled.span`
    color: ${props => props.themeColor.grayFont};
`;

export default class extends React.Component {
    render() {
        const {
            langState,
            name,
            timestamp,
            themeColor,
        } = this.props;
        const calculated = getTimestamp(timestamp, langState);
        return (
            <CommentUserAndTimeWrapper>
                <CommentUserName
                    themeColor={themeColor}
                >
                    {name}
                </CommentUserName>
                <CommentTimeStamp
                    themeColor={themeColor}
                >
                    {calculated[0]}{calculated[1]}
                </CommentTimeStamp>
            </CommentUserAndTimeWrapper>
        )
    }
}