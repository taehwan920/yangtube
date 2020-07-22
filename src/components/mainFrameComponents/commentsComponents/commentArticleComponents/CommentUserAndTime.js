import React from 'react';
import styled from 'styled-components';

const CommentUserAndTimeWrapper = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 2px;
    font-size: 13px;
`;

const CommentUserName = styled.span`
    height: 18px;
    margin-right: 4px;
    margin-bottom: 2px;
`;

const CommentTimeStamp = styled.span`
    color: rgba(0, 0, 0, 0.6);
`;

export default class extends React.Component {
    render() {
        return (
            <CommentUserAndTimeWrapper>
                <CommentUserName>
                    Vienna Sausage
                </CommentUserName>
                <CommentTimeStamp>
                    1일 전
                </CommentTimeStamp>
            </CommentUserAndTimeWrapper>
        )
    }
}