import React from 'react';
import styled from 'styled-components';

const VolumeSlideBox = styled.div`
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

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track{
        background: transparent;
        width: 100%;
        height: 11px;
        cursor: pointer;
    }

    &::-webkit-slider-thumb{
        background: white;
        width: 12px;
        height: 12px;
        margin-bottom: 30px;
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
    bottom: calc(50% - 1.5px);
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        return (
            <VolumeSlideBox>
                <VolumeRange
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                />
                <VolumeSlide />
            </VolumeSlideBox>
        )
    }
}