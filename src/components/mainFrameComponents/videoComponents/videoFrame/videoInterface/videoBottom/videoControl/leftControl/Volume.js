import React from 'react';
import styled from 'styled-components';

const VolumeSlideBox = styled.div`
    background: transparent;
    width: ${props => props.hoverOnVol ? '57px' : '0px'};
    opacity: ${props => props.hoverOnVol ? 1 : 0};
    height: 36px;
    padding: 0px 5px;
    position: relative;
    display: flex;
    align-items: center;
    transition: width 0.2s ease-out;
`;

const VolumeRange = styled.input`
    -webkit-appearance: none;
    background: transparent;
    width: 100%;
    height: 100%;
    z-index: 26;

    &::-webkit-slider-runnable-track{
        background: transparent;
        width: 100%;
        cursor: pointer;
    }

    &::-webkit-slider-thumb{
        background: white;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        cursor:pointer;
        -webkit-appearance: none;
        
    }
`;

const VolumeSlide = styled.div`
    background: gray;
    width: calc(100% - 10px);
    height: 3px;
    position: absolute;
    bottom: calc(50% - 1px);
    cursor: pointer;
`;

const VolumeCurrentSlide = styled.div`
    background: white;
    width: ${props => props.volume * 100}%;
    height: 3px;
    position: absolute;
    bottom: calc(50% - 1px);
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const { getVol, volume, hoverOnVol } = this.props;
        return (
            <VolumeSlideBox
                hoverOnVol={hoverOnVol}
            >
                <VolumeRange
                    onChange={getVol}
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                />
                <VolumeSlide>
                    <VolumeCurrentSlide
                        volume={volume}
                    />
                </VolumeSlide>
            </VolumeSlideBox>
        )
    }
}