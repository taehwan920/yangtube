import React from 'react';
import styled, { keyframes } from 'styled-components';
import AddVideoButton from './headerButtons/AddVideoButton';
import AppsButton from './headerButtons/AppsButton';
import UserInfoButton from './headerButtons/UserInfoButton';
import HeaderAddVideoPopUp from './headerButtons/HeaderAddVideoPopUp';
import HeaderAppsPopUp from './headerButtons/HeaderAppsPopUp';
import HeaderUserInfoPopUp from './headerButtons/HeaderUserInfoPopUp';

const HeaderBtnSectionWrapper = styled.div`
    width:225px;
    height: 40px;
    position: relative;
`;

const HeaderBtnSection = styled.section`
    width: 225px;
    height: 40px;
    position: absolute;
    display: flex;
    align-items: center;
`;

export const HeaderBtn = styled.button`
    width: 24px;
    height: 24px;
    margin: 0px 8px; 
    position: absolute;
    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.header.iconColor;
        } else {
            return props.themeColor.dayMode.header.iconColor;
        }
    }};
    font-size: 19px;
    line-height: 1.35;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    z-index: 25;
`;

const MiniSearchBtn = styled(HeaderBtn)`
    display: none;
    @media (max-width: 767px) {
        position: absolute;
        display: inline-block;
        right: 182.5px;
    }
`;

export const AddVideoBtn = styled(HeaderBtn)`
    right: 132.5px;
`;

export const AddVideoBtnPlusIcon = styled(HeaderBtn)`
    bottom: -0.5px;
    right: -4.5px;
    font-size: 11px;
    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.header.plusIconColor;
        } else {
            return props.themeColor.dayMode.header.plusIconColor;
        }
    }};
`;

export const AppsBtn = styled(HeaderBtn)`
    right: 82.5px;
`;

export const PopUpSection = styled.section`
    width: 229px;
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const PopUpArticle = styled.div`
    width: 229px;
    height: 40px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.normalFont;
        } else {
            return props.themeColor.dayMode.normalFont;
        }
    }};

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

export const PopUpArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 22px;
    font-size: 22px;
    text-align: center;
    line-height: 22px;
    color: red;
`;

const HeaderClickAni = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0.4);
        transform: scale(1);
    }
    40% {
        transform: scale(1.7);
    }
    100% {
        transform: scale(2);
    }
`;

export const ClickEffectHeader = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 0px;
    right: 0.3px;
    position: absolute;
    border-radius: 50%;
    z-index: 25;

    &:hover {
        animation: ${HeaderClickAni} 0.5s ease-in-out;
    }
    
`;

export default class extends React.Component {
    state = {
        addVideoON: false,
        appsON: false,
        userInfoON: false,
    };

    userInfoRef = React.createRef();

    sanitize = picked => {
        const stateObj = Object.assign({}, this.state);
        const statesArr = Object.keys(stateObj);
        const notPicked = statesArr.filter(state => state !== picked);
        return [picked, ...notPicked];
    };

    onOff = stateType => () => {
        const statesArr = this.sanitize(stateType);
        this.setState({
            [statesArr[0]]: !this.state[statesArr[0]],
            [statesArr[1]]: false,
            [statesArr[2]]: false,
        })
    };

    render() {
        const {
            nightMode,
            theaterMode,
            toggleMiniSearch,
            toggleNight,
            themeColor,
        } = this.props;
        const {
            addVideoON,
            appsON,
            userInfoON
        } = this.state;
        return (
            <HeaderBtnSectionWrapper>
                <HeaderBtnSection>
                    <MiniSearchBtn
                        onClick={toggleMiniSearch}
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                    >
                        <i class="fas fa-search"></i>
                        <ClickEffectHeader />
                    </MiniSearchBtn>
                    <AddVideoButton
                        addVideoON={addVideoON}
                        onOff={this.onOff('addVideoON')}
                        popUpOff={() => this.setState({ addVideoON: false })}
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                    />
                    <AppsButton
                        appsON={appsON}
                        onOff={this.onOff('appsON')}
                        popUpOff={() => this.setState({ appsON: false })}
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                    />
                    <UserInfoButton
                        onOff={this.onOff('userInfoON')}
                        popUpOff={() => this.setState({ userInfoON: false })}
                        userInfoRef={this.userInfoRef}
                        userInfoON={userInfoON}
                    />
                </HeaderBtnSection>
                {(addVideoON)
                    ? <HeaderAddVideoPopUp
                        addVideoON={addVideoON}
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                    />
                    : null}
                {(appsON)
                    ? <HeaderAppsPopUp
                        appsON={appsON}
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        themeColor={themeColor}
                    />
                    : null}
                {(userInfoON)
                    ? <HeaderUserInfoPopUp
                        ref={this.userInfoRef}
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        toggleNight={toggleNight}
                        userInfoON={userInfoON}
                        themeColor={themeColor}
                    />
                    : null}
            </HeaderBtnSectionWrapper>
        )
    }
};