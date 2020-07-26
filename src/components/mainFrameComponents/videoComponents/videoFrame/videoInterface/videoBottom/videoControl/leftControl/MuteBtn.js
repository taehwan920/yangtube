import React from 'react';
import styled from 'styled-components';

const MuteButton = styled.div`
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const MuteSlashBox = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    transform-origin: center;
    transform: rotate(45deg);
    
`;

const MuteSlash = styled.div`
    background: white;
    width: ${props => props.muted ? '32px' : '0px'};
    height: 2.5px;
    position: absolute;
    top: 15px;
    transition: width 0.2s linear;
`;

export default class extends React.Component {
    render() {
        const { muted, toggleMute } = this.props;
        return (
            <MuteButton
                onClick={toggleMute}>
                <i class="fas fa-volume-up"></i>
                <MuteSlashBox>
                    <MuteSlash muted={muted} />
                </MuteSlashBox>
            </MuteButton>
        )
    }
};