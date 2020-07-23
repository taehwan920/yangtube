import React from 'react';
import styled from 'styled-components';

const NotificationIcon = styled.span`
    width: 40px;
    height: 40px;
    padding: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    position: relative;
`;

const SubsClickEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 8px;
    left: 8px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export default class extends React.Component {
    render() {
        return (
            <NotificationIcon>
                <i class="far fa-bell"></i>
                <SubsClickEffect></SubsClickEffect>
            </NotificationIcon>
        )
    }
}