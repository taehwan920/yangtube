import React from 'react';
import styled, { css } from 'styled-components';
import VideoNavPC from './videoNavComponents/VideoNavPC';
import MainFrame from './mainTerritory/MainFrame';


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

export default class extends React.Component {
    state = {
        newMargin: null,
        theaterMode: false,
        autoPlay: true,
    };

    componentDidMount() {
        if (this.state.newMargin === null) {
            const nowWidth = window.innerWidth;
            nowWidth >= 1755
                ? this.setState({ newMargin: (nowWidth - 1755) / 2 })
                : this.setState({ newMargin: 0 });
        };
        window.addEventListener('resize', this.getSize);
    };

    getSize = () => {
        const nowWidth = window.innerWidth;
        let newWidth = nowWidth - 1755;
        if (newWidth < 0) { newWidth = 0; }
        this.setState({
            newMargin: newWidth / 2
        });
    };

    toggleAutoPlay = () => {
        this.setState({ autoPlay: !this.state.autoPlay });
    };

    toggleTheater = () => {
        this.setState({ theaterMode: !this.state.theaterMode });
    };

    render() {
        const {
            queryStr,
            contentData
        } = this.props;
        const {
            autoPlay,
            newMargin,
            theaterMode
        } = this.state;
        return (
            <MainTerritory
                newMargin={newMargin}
                theaterMode={theaterMode}>
                <MainFrame
                    autoPlay={autoPlay}
                    newMargin={newMargin}
                    theaterMode={theaterMode}
                    toggleAutoPlay={this.toggleAutoPlay}
                    toggleTheater={this.toggleTheater}
                    queryStr={queryStr}
                    contentData={contentData}
                />
                {theaterMode
                    ? null
                    : <VideoNavPC
                        autoPlay={autoPlay}
                        toggleAutoPlay={this.toggleAutoPlay}
                        contentData={contentData}
                    />}
            </MainTerritory>
        )
    }
}