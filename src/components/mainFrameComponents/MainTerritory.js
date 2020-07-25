import React from 'react';
import styled, { css } from 'styled-components';
import MainTitleAndDesc from './titleAndDescComponents/MainTitleAndDesc';
import MainComments from './commentsComponents/MainComments';
import VideoFrame from './videoComponents/VideoFrame';
import VideoNavNonPC from './videoNavComponents/VideoNavNonPC';
import VideoNavPC from './videoNavComponents/VideoNavPC';


const MainTerritory = styled.div`
    background-color: inherit;
    width: max-content;
    height: 100vh;
    position: relative;
    display: flex;
    z-index: 1;
    
    
    margin: 0px ${props => {
        if (!props.theaterMode) {
            return props.newMargin
        } else {
            return `0`
        }
    }}px;
    margin-top: 56px;

    @media(max-width: 1754px) {
        ${props => {
        if (!props.theaterMode) {
            css`
                    margin: 0px;
                    margin-top: 56px;        
                `
        }
    }}
    }
`;

const MainFrameWrapper = styled.div`
    width: ${props => props.theaterMode ? '100%' : 'max-content'};
    width: max-content;
    background: inherit;
    
    @media(max-width: 767px) {
        width: 100%;
    }
`;

const MainFrameContainer = styled.div`
    width: max-content;
    height: max-content;
    background: inherit;
    margin-left: ${props => props.theaterMode ? '0px' : '24px'};
    padding-top: ${props => props.theaterMode ? '0px' : '24px'};
    display: flex;
    flex-direction: column;
    
    @media(max-width: 767px) {
        width: ${props => props.theaterMode ? 'max-content' : '100%'};
    }
`;



const VideoInfoOuterWrapper = styled.div`
    width: max-content;
    background: inherit;
    padding: 0px ${props => props.theaterMode ? '24px' : '0px'};
    display: flex;

    @media(min-width: 1024px) {
        width: ${props => props.theaterMode ? 'min-content' : 'max-content'};
        width: max-content;
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
        width: max-content;
    }

    @media(max-width: 500px) {
        padding-right: 0px;
    }

`;
// width: 68.45vw;
const VideoInfoInnerWrapper = styled.div`
    background: inherit;
    max-width: 1280px;
    min-width: 426px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1023px) {
        width: calc(${props => props.viewPort}px - 24px);
    }

    @media(min-width: 1024px) and (max-width: 1754px) {
        width: calc(${props => props.viewPort}px - 24px - 450px);
    }

    @media(min-width: 1755px) {
        width: calc(${props => props.viewPort - props.newMargin * 2}px - 24px - 450px)
    }
}
`;

export default class extends React.Component {
    state = {
        theaterMode: false,
        newMargin: null,
        viewPort: null
    }

    resetMargin1 = () => {
        const nowWidth = window.innerWidth;
        console.log(nowWidth);
        this.setState({ viewPort: nowWidth });
        if (nowWidth < 1755) { return; }
        let result = nowWidth - 1755;
        this.setState({ newMargin: result / 2 });
    }

    resetMargin = () => {
        const nowWidth = window.innerWidth;
        let result = nowWidth - 1755;
        if (result < 0) { result = 0; }
        this.setState({
            newMargin: result / 2,
            viewPort: nowWidth
        });
    }

    componentDidMount() {
        if (this.state.viewPort === null) {
            const nowWidth = window.innerWidth;
            this.setState({ viewPort: nowWidth });
        }
        if (this.state.newMargin === null) {
            const nowWidth = window.innerWidth;
            nowWidth >= 1755
                ? this.setState({ newMargin: (nowWidth - 1755) / 2 })
                : this.setState({ newMargin: 0 });
        };

        window.addEventListener('resize', this.resetMargin);
    };

    render() {
        const { theaterMode, newMargin, viewPort } = this.state;
        return (
            <MainTerritory
                newMargin={newMargin}
                theaterMode={theaterMode}>
                <MainFrameWrapper
                    theaterMode={theaterMode}>
                    <MainFrameContainer theaterMode={theaterMode}>
                        <VideoFrame
                            newMargin={newMargin}
                            viewPort={viewPort}
                            theaterMode={theaterMode}></VideoFrame>
                        <VideoInfoOuterWrapper
                            newMargin={newMargin}
                            theaterMode={theaterMode}>
                            <VideoInfoInnerWrapper
                                newMargin={newMargin}
                                viewPort={viewPort}
                                theaterMode={theaterMode}
                            >
                                <MainTitleAndDesc></MainTitleAndDesc>
                                <VideoNavNonPC></VideoNavNonPC>
                                <MainComments></MainComments>
                            </VideoInfoInnerWrapper>
                            {theaterMode
                                ? <VideoNavPC></VideoNavPC>
                                : null}
                        </VideoInfoOuterWrapper>
                    </MainFrameContainer>
                </MainFrameWrapper>
                {theaterMode
                    ? null
                    : <VideoNavPC></VideoNavPC>}
            </MainTerritory>
        )
    }
}