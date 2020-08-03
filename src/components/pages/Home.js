import React from 'react';
import styled from 'styled-components';
import Guide from '../guideComponents/Guide';
import Header from '../headerComponents/Header';
import MainTerritory from '../mainFrameComponents/MainTerritory';
import queryString from 'query-string';
import data from '../DB/diveDB';
import theme from '../themeColor';

const HomeDiv = styled.div`
    background-color: ${props => props.themeColor.main.BG};
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    z-index: 1;
    height: ${props => (props.guideIsON ? '100vh' : 'max-content')};
    overflow: ${props => (props.guideIsON ? 'hidden' : 'none')};
`;

export default class extends React.Component {
    state = {
        guideIsON: false,
        theaterMode: false,
        nightMode: false,
    };

    contentData = data;
    themeColor = theme.dayMode;

    componentDidMount() {
        this.state.nightMode
            ? this.themeColor = theme.nightMode
            : this.themeColor = theme.dayMode;
    };

    toggleNight = () => {
        this.setState({ nightMode: !this.state.nightMode });
    };

    toggleGuide = () => {
        this.setState({ guideIsON: !this.state.guideIsON });
    };

    toggleTheater = () => {
        this.setState({ theaterMode: !this.state.theaterMode });
    };

    render() {
        const {
            guideIsON,
            nightMode,
            theaterMode,
        } = this.state;
        const {
            contentData,
            themeColor
        } = this;
        const queryStr = queryString.parse(this.props.location.search);
        return (
            <HomeDiv
                ref={ref => this.homeRef = ref}
                guideIsON={guideIsON}
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                <Header
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    toggleGuide={this.toggleGuide}
                    contentData={contentData}
                    themeColor={theme}
                />
                <Guide
                    guideIsON={guideIsON}
                    toggleGuide={this.toggleGuide}
                    contentData={contentData}
                />
                <MainTerritory
                    theaterMode={theaterMode}
                    toggleTheater={this.toggleTheater}
                    queryStr={queryStr}
                    contentData={contentData}
                />
            </HomeDiv>
        )
    }
};
