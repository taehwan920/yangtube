import React from 'react';
import styled from 'styled-components';
import { player } from '../../../../../../DB';

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
        const myInitial = this.getInitial(player.name);
        return (
            <ReplyUserIconBox>
                <ReplyUserIcon
                    draggable="true"
                    iconColor={player.iconColor}>
                    {myInitial}
                </ReplyUserIcon>
            </ReplyUserIconBox>
        )
    }
};