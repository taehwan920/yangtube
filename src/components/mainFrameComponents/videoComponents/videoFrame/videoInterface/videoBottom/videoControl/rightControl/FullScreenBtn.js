import React from 'react';
import styled, { keyframes } from 'styled-components';


const FullscreenBtn = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const FullAni = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
`;

const FullscreenIcon = styled.span`
    width: max-content;
    height: max-content;
    font-size: 18px;
    color: 18px;
    
    &:hover{
        animation: ${FullAni} 0.3s ease-in;
    }
`;

export default class extends React.Component {
    toggleFullSc = () => {
        this.props.toggleFullVF();
    }

    render() {
        return (
            <FullscreenBtn
                onClick={this.toggleFullSc}
            >
                {document.fullscreenElement
                    ? <FullscreenIcon>
                        <i class="fas fa-compress"></i>
                    </FullscreenIcon>
                    : <FullscreenIcon>
                        <i class="fas fa-expand"></i>
                    </FullscreenIcon>}
            </FullscreenBtn>
        )
    }
}