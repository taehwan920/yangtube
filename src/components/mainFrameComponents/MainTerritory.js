import React from 'react';
import styled, { css } from 'styled-components';
import VideoNavPC from './videoNavComponents/VideoNavPC';
import MainFrame from './MainFrame';


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
        theaterMode: false
    };

    toggleTheater = () => {
        this.setState({ theaterMode: !this.state.theaterMode });
    }

    getSize = () => {
        const nowWidth = window.innerWidth;
        let newWidth = nowWidth - 1755;
        if (newWidth < 0) { newWidth = 0; }
        this.setState({
            newMargin: newWidth / 2
        });
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

    render() {
        const { queryStr } = this.props;
        const { newMargin, theaterMode } = this.state;
        return (
            <MainTerritory
                newMargin={newMargin}
                theaterMode={theaterMode}>
                <MainFrame
                    newMargin={newMargin}
                    theaterMode={theaterMode}
                    toggleTheater={this.toggleTheater}
                    queryStr={queryStr}
                />
                {theaterMode
                    ? null
                    : <VideoNavPC />}
            </MainTerritory>
        )
    }
}