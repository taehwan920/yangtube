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

const InfoPopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    left: 0;
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

    render() {
        const {
            muted,
            toggleMute,
            volume
        } = this.props;
        const {
            hovering
        } = this.state;
        return (
            <IconBox
                onClick={toggleMute}
                onMouseOver={this.isHovering}
                onMouseOut={this.notHovering}
            >
                {volume > 0.5
                    ?
                    <MuteIcon>
                        <i class="fas fa-volume-up"></i>
                    </MuteIcon>
                    :
                    <MuteIcon>
                        <i class="fas fa-volume-down"></i>
                    </MuteIcon>
                }
                <MuteSlashBox>
                    <MuteSlash muted={muted} />
                </MuteSlashBox>
                {muted
                    ?
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            음소거 해제(m)
                    </InfoPopUp>
                    </InfoPopUpBox>
                    :
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            음소거(m)
                        </InfoPopUp>
                    </InfoPopUpBox>
                }
            </IconBox>
        )
    }
}