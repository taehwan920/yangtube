import React from 'react';
import styled from 'styled-components';
import Guide from '../guideComponents/Guide';
import Header from '../headerComponents/Header';
import MainTerritory from '../mainFrameComponents/MainTerritory';
import queryString from 'query-string';
import data from '../DB/diveDB';

import Theme from '../ThemeColor';
import Language from '../DB/langDB/Language';

const HomeDiv = styled.div`
    background-color: ${props => props.themeColor.main.BG};
    width: max-content;
    height: max-content;
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
        gotLocation: false,
        langState: null,
    };

    contentData = data;
    themeOriginal = Theme;

    componentDidMount = async () => {
        if (!this.state.gotLocation) {
            await this.getLocation();
        }
    };

    getLocation = async () => {
        const data = await fetch('https://ipapi.co/json/')
            .then(response => response.json());
        if (data.country_code === 'KR') {
            this.setState({
                gotLocation: true,
                langState: 'KR'
            });
        } else if (data.country_code === 'JP') {
            this.setState({
                gotLocation: true,
                langState: 'JP'
            });
        } else {
            this.setState({
                gotLocation: true,
                langState: 'EN'
            });
        }
    };

    changeLang = lang => {
        this.setState({ langState: lang });
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
            gotLocation,
            guideIsON,
            langState,
            nightMode,
            theaterMode,
        } = this.state;
        const {
            contentData,
            themeOriginal
        } = this;
        const queryStr = queryString.parse(this.props.location.search);
        const themeColor = this.state.nightMode
            ? Theme.nightMode
            : Theme.dayMode;
        const lang = Language[langState];
        return (
            <React.Fragment>
                {gotLocation
                    ?
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
                            toggleNight={this.toggleNight}
                            contentData={contentData}
                            changeLang={this.changeLang}
                            lang={lang}
                            langState={langState}
                            themeColor={themeOriginal}
                        />
                        <Guide
                            guideIsON={guideIsON}
                            nightMode={nightMode}
                            toggleGuide={this.toggleGuide}
                            contentData={contentData}
                            lang={lang}
                            langState={langState}
                            themeColor={themeColor}
                        />
                        <MainTerritory
                            nightMode={nightMode}
                            theaterMode={theaterMode}
                            toggleTheater={this.toggleTheater}
                            queryStr={queryStr}
                            contentData={contentData}
                            lang={lang}
                            themeColor={themeColor}
                        />
                    </HomeDiv>
                    : null}
            </React.Fragment>
        )
    }
};
