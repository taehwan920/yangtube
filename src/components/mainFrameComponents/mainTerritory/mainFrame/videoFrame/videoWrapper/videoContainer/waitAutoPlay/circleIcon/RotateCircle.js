import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotationContainer = styled.div`
    width: 64px;
    height: 64px;
    position: absolute;
`;

const RotateBox = styled.div`
    width: 32px;
    height: 64px;
    position: absolute;
    top:0;
    overflow: hidden;
`;

const RotateRightBox = styled(RotateBox)`
    right: 0;
`;

const RotateLeftBox = styled(RotateBox)`
    left: 0;
`;

const RotateCircle = styled.div`
    width: 64px;
    height: 64px;
    border: 3px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    transform: rotate(-135deg);
`;

const CircleRight = keyframes`
    0% {
        transform: rotate(-135deg);
    }
    50%,
    100%{
        transform: rotate(45deg);
    }
`;

const RotateRightCircle = styled(RotateCircle)`
    border-top: 3px solid white;
    border-right: 3px solid white;
    right: 0.5px;
    animation: ${CircleRight} 5s linear forwards;
`;

const CircleLeft = keyframes`
    0%,
    50% {
        transform: rotate(-135deg);
    }
    100%{
        transform: rotate(45deg);
    }
`;

const RotateLeftCircle = styled(RotateCircle)`
    border-bottom: 3px solid white;
    border-left: 3px solid white;
    left: 0.5px;
    animation: ${CircleLeft} 5s linear forwards;
`;

export default class extends React.Component {
    render() {
        return (
            <RotationContainer>
                <RotateRightBox>
                    <RotateRightCircle />
                </RotateRightBox>
                <RotateLeftBox>
                    <RotateLeftCircle />
                </RotateLeftBox>
            </RotationContainer>
        )
    }
};