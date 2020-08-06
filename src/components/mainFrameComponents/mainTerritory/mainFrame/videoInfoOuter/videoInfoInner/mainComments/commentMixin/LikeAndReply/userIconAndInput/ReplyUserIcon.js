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
    background-color: ${props => props.iconColor || '#AA47BC'};
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 26px;
`;

export default class extends React.Component {
    getInitial = str => str.slice(0, 1);
    render() {
        const myInitial = this.getInitial('GUEST');
        return (
            <ReplyUserIconBox>
                <ReplyUserIcon
                    draggable="true"
                    iconColor="#AA47BC"
                >
                    {myInitial}
                </ReplyUserIcon>
            </ReplyUserIconBox>
        )
    }
};