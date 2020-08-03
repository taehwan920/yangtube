import React from 'react';
import styled, { css } from 'styled-components';
import UserPopUpHome from './userInfoPopUp/UserInfoPopUpHome';
import NightPopUp from './userInfoPopUp/NightPopUp';
import LanguageChangePopUp from './userInfoPopUp/LanguageChangePopUp';
import LocationChangePopUp from './userInfoPopUp/LocationChangePopUp';

const UserInfoCommonSetUp = css`
    width: 298px;
`;

const UserInfoPopUpWrapper = styled.div`
    background: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.header.BG;
        } else {
            return props.themeColor.dayMode.header.BG;
        }
    }};
    border: solid 0.4px rgba(0, 0, 0, 0.1);
    border-top: none;
    position: absolute;
    top: 42px;
    right: 16.5px;
    display: ${props => props.userInfoON ? 'flex' : 'none'};
    flex-direction: column;
    z-index: 348;
    font-size: 14px;
    line-height: 36px;
    ${UserInfoCommonSetUp}
`;

export const PopUpSection = styled.section`
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    color: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.normalFont;
        } else {
            return props.themeColor.dayMode.normalFont;
        }
    }};
    ${UserInfoCommonSetUp}
`;

export const PopUpArticle = styled.div`
    height: 40px;
    padding: 0px 10px 0px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${UserInfoCommonSetUp}

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

export const UserInfoHeader = styled.header`
    height: 60px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    ${UserInfoCommonSetUp}
`;

export const UserInfoCircleIcon = styled.div`
    background-color: #AA47BC;
    width: 40px;
    height: 40px;
    right: 30px;
    border: none;
    border-radius: 50%;
    text-align: center;
    line-height: 58px;
    overflow: hidden;
    font-size: 31px;
    color: rgba(255, 255, 255, 0.65);
    cursor: default;
`;

export const UserName = styled.span`
    margin-left: 24px;
    font-size: 20px;
    color: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.normalFont;
        } else {
            return props.themeColor.dayMode.normalFont;
        }
    }};
`;

export const RightArrowIcon = styled.span`
    width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 22px;
    color: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.grayFont;
        } else {
            return props.themeColor.dayMode.grayFont;
        }
    }};
`;

export const SubPopUpHeaderWrapper = styled.header`
    height: 49px;
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${UserInfoCommonSetUp}
`;

export const SubPopUpString = styled.span`
    width: 242px;
    font-size: 16px;
    color: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.grayFont;
        } else {
            return props.themeColor.dayMode.grayFont;
        }
    }};
`;

export default class extends React.Component {
    state = {
        userInfoHome: true,
        night: false,
        langChange: false,
        locationChange: false,
    }

    toggleMode = stateType => () => {
        this.setState({
            [stateType]: !this.state[stateType],
            userInfoHome: !this.state.userInfoHome
        })
    }

    render() {
        const {
            nightMode,
            themeColor,
            toggleNight,
        } = this.props;
        const {
            userInfoHome,
            night,
            langChange,
            locationChange,
        } = this.state;
        return (
            <UserInfoPopUpWrapper
                ref={ref => this.UIPopUpRef = ref}
                nightMode={nightMode}
                themeColor={themeColor}
                userInfoON={this.props.userInfoON}
            >
                {userInfoHome
                    ?
                    <UserPopUpHome
                        themeColor={themeColor}
                        toggleMode={this.toggleMode}
                        nightMode={nightMode}
                    />
                    : null}
                {(!userInfoHome && night)
                    ?
                    <NightPopUp
                        nightMode={nightMode}
                        stateType={'night'}
                        toggleMode={this.toggleMode}
                        toggleNight={toggleNight}
                        themeColor={themeColor}
                    />
                    : null}
                {(!userInfoHome && langChange)
                    ?
                    <LanguageChangePopUp
                        toggleMode={this.toggleMode}
                        stateType={'langChange'}
                        nightMode={nightMode}
                        themeColor={themeColor}
                    />
                    : null}
                {(!userInfoHome && locationChange)
                    ?
                    <LocationChangePopUp
                        toggleMode={this.toggleMode}
                        stateType={'locationChange'}
                        nightMode={nightMode}
                        themeColor={themeColor}
                    />
                    : null}
            </UserInfoPopUpWrapper>
        )
    }

}