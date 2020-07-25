import React from 'react';
import styled, { css } from 'styled-components';

const VideoFrame = styled.div`
    background: gray;
    width: 100vw;
    height: ${props => props.viewPort / 235 * 100}px;
    max-height: 720px;

    ${props => !props.theaterMode && css`
        max-width: 1280px;
        max-height: 720px;

        @media(max-width: 1023px) {
            width: calc(${props => props.viewPort}px - 24px);
            height: calc((${props => props.viewPort}px - 24px) / 16 * 9);
        }
    
        @media(min-width: 1024px) and (max-width: 1754px) {
            width: calc(${props => props.viewPort}px - 24px - 450px);
            height: calc((${props => props.viewPort}px - 24px - 450px) / 16 * 9);
        }
    
        @media(min-width: 1755px) {
            width: calc(${props => props.viewPort - props.newMargin * 2}px - 24px - 450px);
            height: calc((${props => props.viewPort - props.newMargin * 2}px - 24px - 450px) / 16 * 9);
        }
    `}
`;

export default class extends React.Component {
    render() {
        const { theaterMode, newMargin, viewPort } = this.props;
        return (
            <VideoFrame
                newMargin={newMargin}
                viewPort={viewPort}
                theaterMode={theaterMode}>
                동영상자리
            </VideoFrame>
        )
    }
}