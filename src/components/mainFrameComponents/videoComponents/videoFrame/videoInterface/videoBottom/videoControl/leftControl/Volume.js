import React from 'react';
import styled from 'styled-components';

const VolumeSlideBox = styled.div`
    background: transparent;
    width: 57px;
    height: 36px;
    padding: 0px 5px;
    position: relative;
    display: flex;
    align-items: center;
`;

const VolumeRange = styled.input`
    -webkit-appearance: none;
    background: transparent;
    width: 100%;
    height: 100%;

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
    background: white;
    width: calc(100% - 10px);
    height: 3px;
    position: absolute;
    bottom: calc(50% - 1px);
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const { getVol, volume } = this.props;
        return (
            <VolumeSlideBox>
                <VolumeRange
                    onChange={getVol}
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                />
                <VolumeSlide />
            </VolumeSlideBox>
        )
    }
}