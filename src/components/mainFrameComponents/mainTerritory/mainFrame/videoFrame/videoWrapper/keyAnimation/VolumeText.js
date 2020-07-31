import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ToggKF = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 1;
    }
`;

const VolumePercentBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 70px;
    height: 40px;
    position: absolute;
    top: 125px;
    right: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    ${props => props.keyPressed && css`
        animation: ${ToggKF} 1s ease-out;
    `}
    
`;

const VolumePercent = styled.span`
    width: max-content;
    height: max-content;
    font-size: 24px;
    color: white;
`;

export default class extends React.Component {
    calcValue = num => parseInt(num * 100);

    render() {
        const { volume, keyPressed } = this.props;
        return (
            <VolumePercentBox
                keyPressed={keyPressed}
            >
                <VolumePercent>
                    {this.calcValue(volume)} %
                </VolumePercent>
            </VolumePercentBox>
        )
    }
}