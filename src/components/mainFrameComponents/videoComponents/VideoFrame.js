import React from 'react';
import styled, { css } from 'styled-components';

const VideoFrame = styled.div`
    background: gray;
    width: 100vw;
    height: calc(100vw / 235 * 100);

    ${props => !props.theaterMode && css`
        width: 1280px;
        height: 720px;
        margin-left: 82px;
        margin-top: 24px;
    `}
`;

export default class extends React.Component {
    render() {
        const { theaterMode } = this.props;
        return (
            <VideoFrame theaterMode={theaterMode}>
            </VideoFrame>
        )
    }
}