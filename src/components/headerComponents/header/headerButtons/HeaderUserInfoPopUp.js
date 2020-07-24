import React from 'react';
import styled, { css } from 'styled-components';
import UserPopUpHome from './userInfoPopUp/UserInfoPopUpHome';
import NightModePopUp from './userInfoPopUp/NightModePopUp';
import LanguageChangePopUp from './userInfoPopUp/LanguageChangePopUp';
import LocationChangePopUp from './userInfoPopUp/LocationChangePopUp';
import LimitedModePopUp from './userInfoPopUp/LimitedModePopUp';

const UserInfoCommonSetUp = css`
    width: 298px;
`;

const UserInfoPopUpWrapper = styled.div`
    background: rgba(255, 255, 255, 0.97);
    border: solid 0.4px rgba(0, 0, 0, 0.3);
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
    ${UserInfoCommonSetUp}
`;

export const PopUpArticle = styled.div`
    height: 40px;
    padding: 0px 10px 0px 20px;
    display: flex;
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
`;

export const RightArrowIcon = styled.span`
    width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.5);
`;

export const LimitedModeSpan = styled.span`
    width: 266px;
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
`;

export default class extends React.Component {
    state = {
        userInfoHome: true,
        nightMode: false,
        langChange: false,
        locationChange: false,
        limitedMode: false
    }

    toggleMode = stateType => () => {
        this.setState({
            [stateType]: !this.state[stateType],
            userInfoHome: !this.state.userInfoHome
        })
    }

    render() {
        const { userInfoHome, nightMode, langChange, locationChange, limitedMode } = this.state;
        return (
            <UserInfoPopUpWrapper
                userInfoON={this.props.userInfoON}>
                {userInfoHome
                    ? <UserPopUpHome toggleMode={this.toggleMode}></UserPopUpHome>
                    : null}
                {(!userInfoHome && nightMode)
                    ? <NightModePopUp toggleMode={this.toggleMode} stateType={'nightMode'}></NightModePopUp>
                    : null}
                {(!userInfoHome && langChange)
                    ? <LanguageChangePopUp toggleMode={this.toggleMode} stateType={'langChange'}></LanguageChangePopUp>
                    : null}
                {(!userInfoHome && locationChange)
                    ? <LocationChangePopUp toggleMode={this.toggleMode} stateType={'locationChange'}></LocationChangePopUp>
                    : null}
                {(!userInfoHome && limitedMode)
                    ? <LimitedModePopUp toggleMode={this.toggleMode} stateType={'limitedMode'}></LimitedModePopUp>
                    : null}
            </UserInfoPopUpWrapper>
        )
    }

}