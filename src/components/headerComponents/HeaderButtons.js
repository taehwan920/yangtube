import React from 'react';
import styled, { css } from 'styled-components';
import { ClickEffect } from '../Mixin';
import HeaderApps from './HeaderAppsPopUp'
import HeaderAddVideo from './HeaderAddVideoPopUp';
import HeaderUserInfo from './HeaderUserInfoPopUp';

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
    right
`;

const HeaderBtn = styled.button`
    width: 24px;
    height: 24px;
    margin: 0px 8px; 
    position: absolute;
    font-size: 19px;
    line-height: 1.35;
    color: rgba(0, 0, 0, 0.63);
    border: none;
    outline: none;
    background: none;
`;

const MiniSearchBtn = styled(HeaderBtn)`
    display: none;
    @media (max-width: 767px) {
        position: relative;
        display: inline-block;
        right: 232.5px;
    }
`;

export const PopUpAxisZ = css`
    z-index: 348;
`;

export const AddVideoPosition = css`
    right: 182.5px;
`;

const AddVideoBtn = styled(HeaderBtn)`
    ${AddVideoPosition}
`;

const AddVideoBtnPlusIcon = styled(HeaderBtn)`
    bottom: 0.1px;
    right: -4.5px;
    font-size: 10px;
    color: white;
`;

const AppsBtnPosition = css`
    right: 132.5px;
`;

const AppsBtn = styled(HeaderBtn)`
    ${AppsBtnPosition}
`;

export const AlarmBtnPosition = css`
    right: 82.5px;
`;

const AlarmBtn = styled(HeaderBtn)`
    ${AlarmBtnPosition}
`;

export const UserInfoPosition = css`
    right: 30px;
`;

const UserInfoIcon = styled.div`
    background-color: #AA47BC;
    width: 30px;
    height: 30px;
    position: absolute;
    ${UserInfoPosition}
    border-radius: 50%;
    text-align: center;
    line-height: 1.4;
    font-size: 20px;
    color: white;
`;

export default class extends React.Component {
    state = {
        addVideoON: true,
        appsON: true,
        alarmsON: true,
        userInfoON: true
    }
    onOff = (popupState) => {
        this.setState({ popupState: !this.state.popupState })
    }
    //이 함수 좀 더 만져 보기

    render() {
        const { addVideoON, appsON, alarmsON, userInfoON } = this.state
        return (
            <HeaderBtnSectionWrapper>
                <HeaderBtnSection>
                    <MiniSearchBtn>
                        <i class="fas fa-search"></i>
                        <ClickEffect></ClickEffect>
                    </MiniSearchBtn>
                    <AddVideoBtn>
                        <i class="fas fa-video"></i>
                        <AddVideoBtnPlusIcon>
                            <i class="fas fa-plus"></i>
                        </AddVideoBtnPlusIcon>
                        <ClickEffect></ClickEffect>
                    </AddVideoBtn>
                    <AppsBtn>
                        <i class="fas fa-th"></i>
                        <ClickEffect></ClickEffect>
                    </AppsBtn>
                    <AlarmBtn>
                        <i class="fas fa-bell"></i>
                        <ClickEffect></ClickEffect>
                    </AlarmBtn>
                    <UserInfoIcon>G</UserInfoIcon>
                </HeaderBtnSection>
                <HeaderAddVideo addVideoON={addVideoON}></HeaderAddVideo>
                <HeaderApps appsON={appsON}></HeaderApps>
                <HeaderUserInfo userInfoON={userInfoON}></HeaderUserInfo>
            </HeaderBtnSectionWrapper>
        )
    }
}