import React from 'react';
import styled, { css } from 'styled-components';

const VideoWrapper = styled.div`
    background-color: beige;

    ${props => props.theaterMode && css`
        min-width: 450px;
        min-height: 253px;

        @media(min-width: 1380px) {
            width: ${props => props.viewHeight * 0.8211 / 9 * 16}px;
            height: 100%;
        }

        @media(min-width: 850px) and (max-width: 1379px) {
            width: 100%;
            height: 100%;
        }

        @media(max-width: 849px) {
            width: 100%;
            height: ${props.viewWidth / 16 * 9}px;
        }
    `}

    ${props => !props.theaterMode && css`
        width: 100%;
        height: 100%;
        max-width: inherit;
        max-height: inherit;
        min-width: 427px;
        min-height: 240px;
    `}
`;

export default class extends React.Component {
    render() {
        const { theaterMode } = this.props;
        const viewHeight = window.innerHeight, viewWidth = window.innerWidth;
        return (
            <VideoWrapper
                theaterMode={theaterMode}
                viewHeight={viewHeight}
                viewWidth={viewWidth}>
            </VideoWrapper>
        )
    }
}