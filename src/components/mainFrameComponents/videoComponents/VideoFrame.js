import React from 'react';
import styled, { css } from 'styled-components';
import VideoContainer from './videoFrame/VideoContainer';

const VideoFrame = styled.div`
    background: black;
    min-width: 450px;
    min-height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${props => props.viewHeight * 0.8212}px;
    ${props => props.theaterMode && css`
        width: 100vw;

        @media(min-width: 1380px) {
            height: ${props => props.frameHeight ? props.frameHeight * 0.8212 : props.viewHeight * 0.8212}px;
        }

        @media(min-width: 850px) and (max-width: 1379px) {
            height: ${props => props.frameWidth ? props.frameWidth / 16 * 9 : props.viewWidth / 16 * 9}px;
        }

        @media(max-width: 849px) {
            height: 480px;
        }
    `}
    
    ${props => !props.theaterMode && css`
        max-width: 1280px;
        max-height: 720px;

        @media(max-width: 1023px) {
            width: calc(${props => props.viewWidth}px - 24px);
            height: calc((${props => props.viewWidth}px - 24px) / 16 * 9);
        }
    
        @media(min-width: 1024px) and (max-width: 1754px) {
            width: calc(${props => props.viewWidth}px - 24px - 450px);
            height: calc((${props => props.viewWidth}px - 24px - 450px) / 16 * 9);
        }
    
        @media(min-width: 1755px) {
            width: calc(${props => props.viewWidth - props.newMargin * 2}px - 24px - 450px);
            height: calc((${props => props.viewWidth - props.newMargin * 2}px - 24px - 450px) / 16 * 9);
        }
    `}
`;

export default class extends React.Component {
    state = {
        frameHeight: null,
        frameWidth: null
    }
    getHeight = () => {
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;
        this.setState({
            frameHeight: newHeight,
            frameWidth: newWidth
        });
    }
    componentDidMount() {
        window.addEventListener('resize', this.getHeight)
    }
    render() {
        const { theaterMode, newMargin } = this.props;
        const { frameHeight, frameWidth } = this.state;
        const viewHeight = window.innerHeight, viewWidth = window.innerWidth;
        return (
            <VideoFrame
                newMargin={newMargin}
                frameHeight={frameHeight}
                frameWidth={frameWidth}
                viewWidth={viewWidth}
                viewHeight={viewHeight}
                theaterMode={theaterMode}>
                <VideoContainer
                    theaterMode={theaterMode}>
                </VideoContainer>
            </VideoFrame>
        )
    }
}