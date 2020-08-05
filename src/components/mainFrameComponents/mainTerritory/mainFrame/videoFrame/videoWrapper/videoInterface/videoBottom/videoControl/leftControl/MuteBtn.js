import React from 'react';
import styled from 'styled-components';
import Volume from './muteBtn/Volume';
import MuteIcon from './muteBtn/MuteIcon';

const MuteButton = styled.div`
    width: max-content;
    height: 36px;
    padding-left: 5px;
    position: relative;
    display: flex;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const {
            getVol,
            hoverOnVol,
            lang,
            muted,
            mouseOnVol,
            mouseOutVol,
            toggleMute,
            volume
        } = this.props;
        return (
            <MuteButton
                onMouseOver={mouseOnVol}
                onMouseLeave={mouseOutVol}
            >
                <MuteIcon
                    lang={lang}
                    muted={muted}
                    toggleMute={toggleMute}
                    volume={volume}
                />
                <Volume
                    getVol={getVol}
                    hoverOnVol={hoverOnVol}
                    volume={volume}
                />
            </MuteButton>
        )
    }
};