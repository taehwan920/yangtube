import React from 'react';
import styled from 'styled-components';
import HeaderSearch from './headerHome/HeaderSearch';
import HeaderButtons from './headerHome/HeaderButtons';
import HeaderLogo from './headerHome/HeaderLogo';

const HeaderLogoPlace = styled.div`
    width: 155px;
    height: 40px;
`;

export default class extends React.Component {
    render() {
        const {
            changeLang,
            lang,
            langState,
            nightMode,
            theaterMode,
            toggleGuide,
            toggleMiniSearch,
            toggleNight,
            toggleVkbd,
            themeColor,
        } = this.props;
        return (
            <React.Fragment>
                <HeaderLogoPlace />
                <HeaderLogo
                    lang={lang}
                    langState={langState}
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    toggleGuide={toggleGuide}
                    themeColor={themeColor}
                />
                <HeaderSearch
                    lang={lang}
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    toggleVkbd={toggleVkbd}
                    themeColor={themeColor}
                />
                <HeaderButtons
                    changeLang={changeLang}
                    lang={lang}
                    langState={langState}
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    toggleMiniSearch={toggleMiniSearch}
                    toggleNight={toggleNight}
                    themeColor={themeColor}
                />
            </React.Fragment>
        )
    }
}