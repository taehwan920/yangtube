import React from 'react';
import styled from 'styled-components';

const IconBox = styled.div`
    background: transparent;
    width: 36px;
    height: 36px;
    display: flex;
    position: relative;
`;

const MuteIcon = styled.span`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 3px;
    position: absolute;
    top: 15px;
    left: 3px;
    transition: width 0.2s linear;
`;

export default class extends React.Component {
    render() {
        const { muted, toggleMute, volume } = this.props;
        return (
            <IconBox onClick={toggleMute}>
                {volume > 0.5
                    ? <MuteIcon><i class="fas fa-volume-up"></i></MuteIcon>
                    : <MuteIcon><i class="fas fa-volume-down"></i></MuteIcon>}
                <MuteSlashBox>
                    <MuteSlash muted={muted} />
                </MuteSlashBox>
            </IconBox>
        )
    }
}