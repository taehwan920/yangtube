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
        animation: ${ToggKF} 0.4s ease-out;
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
    LRAni = () => {
        const { arrowAniEnd, keyPressed, keyState } = this.props;
        if (keyState.leftRight[0]) {
            return (
                <React.Fragment>
                    {keyState.leftRight[1].rightArrow
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
                        </ToggleIcon>
                    }
                </React.Fragment>
            )
        }
    };

    UDAni = () => {
        const { arrowAniEnd, keyPressed, keyState } = this.props;
        if (keyState.upDown[0]) {
            return (
                <React.Fragment>
                    {keyState.upDown[1].upArrow
                        ? <ToggleIcon
                            keyPressed={keyPressed}
                            onAnimationEnd={arrowAniEnd}
                        >
                            <ToggleArrowIcon>
                                <i class="fas fa-volume-up"></i>
                            </ToggleArrowIcon>
                        </ToggleIcon>
                        : <ToggleIcon
                            keyPressed={keyPressed}
                            onAnimationEnd={arrowAniEnd}
                        >
                            <ToggleArrowIcon>
                                <i class="fas fa-volume-down"></i>
                            </ToggleArrowIcon>
                        </ToggleIcon>
                    }
                </React.Fragment>
            )
        }
    };

    muteAni = () => {
        const { arrowAniEnd, keyPressed, keyState } = this.props;
        if (keyState.mute[0]) {
            return (
                <React.Fragment>
                    {keyState.mute[1].muteOn
                        ? <ToggleIcon
                            keyPressed={keyPressed}
                            onAnimationEnd={arrowAniEnd}
                        >
                            <ToggleArrowIcon>
                                <i class="fas fa-volume-mute"></i>
                            </ToggleArrowIcon>
                        </ToggleIcon>
                        : <ToggleIcon
                            keyPressed={keyPressed}
                            onAnimationEnd={arrowAniEnd}
                        >
                            <ToggleArrowIcon>
                                <i class="fas fa-volume-up"></i>
                            </ToggleArrowIcon>
                        </ToggleIcon>
                    }
                </React.Fragment>
            )
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.LRAni()}
                {this.UDAni()}
                {this.muteAni()}
            </React.Fragment>
        )
    }
};