import React from 'react';
import styled from 'styled-components';
import SwitchToVisible from './SwitchToVisible';
import SwitchToInvisible from './SwitchToInvisible';

export const ReplySwitchBox = styled.div`
    width: auto;
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
`;

export const ReplySwitchText = styled.span`
    width: auto;
    height: 16px;
    margin-left: 8px;
    font-size: 14px;
`;

export default class extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SwitchToVisible></SwitchToVisible>
                <SwitchToInvisible></SwitchToInvisible>
            </React.Fragment>
        )
    }
};