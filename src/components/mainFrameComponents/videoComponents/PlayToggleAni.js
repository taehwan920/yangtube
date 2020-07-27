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
    font-size: 26px; 
    opacity: 0;
    ${props => props.clicked && css`
        animation: ${ToggKF} 0.4s ease-out;
    `}
`;

export default class extends React.Component {
    render() {
        const { aniEnd, clicked, videoPaused } = this.props;
        return (
            <React.Fragment>
                {videoPaused
                    ? <ToggleIcon
                        clicked={clicked}
                        onAnimationEnd={aniEnd}
                    ><i class="fas fa-pause"></i></ToggleIcon>
                    : <ToggleIcon
                        clicked={clicked}
                        onAnimationEnd={aniEnd}
                    ><i class="fas fa-play"></i></ToggleIcon>}
            </React.Fragment>
        )
    }
};