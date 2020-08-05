import React from 'react';
import styled from 'styled-components';
import VideoNavPC from '../../videoNavComponents/VideoNavPC';
import VideoInfoInner from './videoInfoOuter/VideoInfoInner';

const VideoInfoOuterWrapper = styled.div`
    background: inherit;
    width: max-content;
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
            contentData,
            lang,
            langState,
            newMargin,
            theaterMode,
            themeColor,
            toggleAutoPlay,
        } = this.props;
        return (
            <VideoInfoOuterWrapper
                newMargin={newMargin}
                theaterMode={theaterMode}
            >
                <VideoInfoInner
                    autoPlay={autoPlay}
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    newMargin={newMargin}
                    theaterMode={theaterMode}
                    themeColor={themeColor}
                    toggleAutoPlay={toggleAutoPlay}
                />
                {theaterMode
                    ?
                    <VideoNavPC
                        autoPlay={autoPlay}
                        contentData={contentData}
                        lang={lang}
                        langState={langState}
                        themeColor={themeColor}
                        toggleAutoPlay={toggleAutoPlay}
                    />
                    : null}
            </VideoInfoOuterWrapper>
        )
    }
};