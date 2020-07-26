import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ToggKF = keyframes`
    from{
        transform: scale(1);
        opacity: 1;
    }
    to{
        transform: scale(2);
        opacity: 0;
    }
`;

const ToggleIcon = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 45%;
    color: white;
    opacity: 0;
    ${props => props.clicked > 0 && css`
        animation: ${ToggKF} 0.2s ease-out;
        `}
    
`;

export default class extends React.Component {
    render() {
        const { videoPaused, clicked } = this.props;
        return (
            <React.Fragment>
                <ToggleIcon
                    clicked={clicked}>
                    {videoPaused
                        ? <i class="fas fa-play"></i>
                        : <i class="fas fa-pause"></i>}
                </ToggleIcon>
            </React.Fragment>

        )
    }
}