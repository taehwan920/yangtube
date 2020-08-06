import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingWrapper = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

const spin = keyframes`
    0% {transform: rotate(0deg);}
    30% {transform: rotate(60deg);}
    70% {transform: rotate(300deg);}
    100% {transform: rotate(360deg);}
`;

const Loader = styled.div`
    border: 2px solid transparent;
    border-top: 2px solid #909090;
    border-right: 2px solid #909090;
    border-bottom: 2px solid #909090;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: ${spin} 1s linear infinite;
`;

export default class extends React.Component {
    render() {
        return (
            <LoadingWrapper>
                <Loader />
            </LoadingWrapper>
        )
    }
};