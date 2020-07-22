import React from 'react';
import styled from 'styled-components';
import CommentUserAndContent from './CommentUserAndContent';
import ReplySwitches from './replySwitchComponents/ReplySwitches';

const CommentArticleWrapper = styled.article`
    width: 100%;
    margin-bottom: 16px;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentArticleWrapper>
                <CommentUserAndContent></CommentUserAndContent>
                <ReplySwitches></ReplySwitches>
            </CommentArticleWrapper>
        )
    };
};