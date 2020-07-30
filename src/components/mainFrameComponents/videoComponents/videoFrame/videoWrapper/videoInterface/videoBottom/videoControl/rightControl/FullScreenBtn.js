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

const InfoPopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    right: 0;
    display: ${props => props.hovering ? 'flex' : 'none'};
`;

const InfoPopUp = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: white;
`;

export default class extends React.Component {
    state = {
        hovering: false
    };

    isHovering = e => {
        this.setState({ hovering: true })
    };
    notHovering = e => {
        this.setState({ hovering: false })
    };

    toggleFullSc = () => {
        this.props.toggleFullVF();
    }

    render() {
        const {
            hovering
        } = this.state;
        return (
            <FullscreenBtn
                onClick={this.toggleFullSc}
                onMouseOver={this.isHovering}
                onMouseOut={this.notHovering}
            >
                {document.fullscreenElement
                    ? <FullscreenIcon>
                        <i class="fas fa-compress"></i>
                    </FullscreenIcon>
                    : <FullscreenIcon>
                        <i class="fas fa-expand"></i>
                    </FullscreenIcon>}
                {document.fullscreenElement
                    ?
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            전체 화면 종료(f)
                        </InfoPopUp>
                    </InfoPopUpBox>
                    :
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            전체 화면(f)
                        </InfoPopUp>
                    </InfoPopUpBox>
                }
            </FullscreenBtn>
        )
    }
}