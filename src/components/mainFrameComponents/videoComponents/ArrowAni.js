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
    ${props => props.keyPressed && css`
        animation: ${ToggKF} 0.2s ease-out;
    `}
`;

const ToggleArrowIcon = styled.span`
    position: absolute;
    top: 15%;
    left: 20%;
    font-size: 42px;
`;

const ToggleText = styled.span`
    position: absolute;
    top: 45%;
    left: 45%;
    font-size: 12px;
`;

export default class extends React.Component {
    render() {
        const { arrowAniEnd, keyPressed, rightArrow } = this.props;
        return (
            <React.Fragment>
                {rightArrow
                    ? <ToggleIcon
                        keyPressed={keyPressed}
                        onAnimationEnd={arrowAniEnd}
                    >
                        <ToggleArrowIcon>
                            <i class="fas fa-redo"></i>
                        </ToggleArrowIcon>
                        <ToggleText>
                            5
                        </ToggleText>
                    </ToggleIcon>
                    : <ToggleIcon
                        keyPressed={keyPressed}
                        onAnimationEnd={arrowAniEnd}
                    >
                        <ToggleArrowIcon>
                            <i class="fas fa-undo"></i>
                        </ToggleArrowIcon>
                        <ToggleText>
                            5
                        </ToggleText>
                    </ToggleIcon>}
            </React.Fragment>
        )
    }
};