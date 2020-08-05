import React from 'react';
import styled, { css } from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp';
import ToggleSwitch from '../../../../../mixin/ToggleSwitch';
import LeftArrow from '../../../../../mixin/LeftArrow';

const UserInfoCommonSetUp = css`
    width: 298px;
`;

const NightModeArticle = styled.article`
    padding: 8px 16px 8px 16px;
    font-size: 14px;
    line-height: 20px;
    ${UserInfoCommonSetUp}
`;

const NightModeToggleArticle = styled(NightModeArticle)`
    display: flex;
    align-item: center;
`;

const NightModeToggleText = styled.div`
    width: 204px;
    color: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.grayFont;
        } else {
            return props.themeColor.dayMode.grayFont;
        }
    }};
`;

export default class extends React.Component {
    buildItem = item => {
        const { items } = this.props.lang.header.userInfoPopUp.night;
        if (items.indexOf(item) !== items.length - 1) {
            return (
                <NightModeArticle>
                    {item}
                </NightModeArticle>
            )
        }
    }
    render() {
        const {
            lang,
            nightMode,
            stateType,
            toggleMode,
            toggleNight,
            themeColor,
        } = this.props;
        const {
            items
        } = lang.header.userInfoPopUp.night;
        return (
            <React.Fragment>
                <SubPopUpHeaderWrapper>
                    <LeftArrow
                        nightMode={nightMode}
                        stateType={stateType}
                        themeColor={themeColor}
                        toggleMode={toggleMode}
                    />
                    <SubPopUpString
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        {items[2]}
                    </SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection
                    nightMode={nightMode}
                    themeColor={themeColor}
                >
                    {items.map(item => this.buildItem(item))}
                    <NightModeToggleArticle>
                        <NightModeToggleText
                            nightMode={nightMode}
                            themeColor={themeColor}
                        >
                            {items[items.length - 1]}
                        </NightModeToggleText>
                        <ToggleSwitch
                            switchFunc={toggleNight}
                            switchON={nightMode}
                        />
                    </NightModeToggleArticle>
                </PopUpSection>
            </React.Fragment>
        )
    }
}