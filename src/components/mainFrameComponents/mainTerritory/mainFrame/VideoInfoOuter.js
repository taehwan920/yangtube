import React from 'react';
import styled from 'styled-components';
import VideoNavPC from '../../videoNavComponents/VideoNavPC';
import VideoInfoInner from './videoInfoOuter/VideoInfoInner';

const VideoInfoOuterWrapper = styled.div`
    width: max-content;
    background: inherit;
    padding: 0px ${props => props.theaterMode ? '24px' : '0px'};
    display: flex;
    z-index: 2;

    @media(min-width: 1024px) {
        width: ${props => props.theaterMode ? 'min-content' : 'max-content'};
    }

    @media(min-width: 1755px) {
        margin: 0px ${props => {
        if (props.theaterMode) {
            return props.newMargin
        }
    }}px;
    }

    @media(max-width: 1754px) {
        margin: 0px ${props => {
        if (props.theaterMode) {
            return 0
        }
    }}px;
    }

    @media(max-width: 1023px) {
        width: 100%;
    }

    @media(max-width: 500px) {
        padding-right: 0px;
    }
`;

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            newMargin,
            theaterMode,
            toggleAutoPlay,
            contentData,
            themeColor,
        } = this.props;
        return (
            <VideoInfoOuterWrapper
                newMargin={newMargin}
                theaterMode={theaterMode}>
                <VideoInfoInner
                    autoPlay={autoPlay}
                    newMargin={newMargin}
                    theaterMode={theaterMode}
                    toggleAutoPlay={toggleAutoPlay}
                    contentData={contentData}
                    themeColor={themeColor}
                />
                {theaterMode
                    ?
                    <VideoNavPC
                        autoPlay={autoPlay}
                        toggleAutoPlay={toggleAutoPlay}
                        contentData={contentData}
                        themeColor={themeColor}
                    />
                    : null}
            </VideoInfoOuterWrapper>
        )
    }
};