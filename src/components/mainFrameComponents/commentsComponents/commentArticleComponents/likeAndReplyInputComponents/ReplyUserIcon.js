import React from 'react';
import styled from 'styled-components';

const ReplyUserIconBox = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 16px;
`;

const ReplyUserIcon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #AA47BC;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 26px;
`;

export default class extends React.Component {
    render() {
        return (
            <ReplyUserIconBox>
                <ReplyUserIcon draggable="true">
                    G
                </ReplyUserIcon>
            </ReplyUserIconBox>
        )
    }
};