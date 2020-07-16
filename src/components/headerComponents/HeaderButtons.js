import React from 'react';
import styled from 'styled-components';
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

const AddVideoBtn = styled(HeaderBtn)`
    right: 182.5px;
`;

const AddVideoBtnPlusIcon = styled(HeaderBtn)`
    bottom: 0.75px;
    right: 3.5px;
    font-size: 10px;
    color: white;
`;

const AppsBtn = styled(HeaderBtn)`
    right: 132.5px;
`;

const AlarmBtn = styled(HeaderBtn)`
    right: 82.5px;
`;

const UserInfoIcon = styled.div`
    background-color: #AA47BC;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 1.4;
    font-size: 20px;
    color: white;
`;

export default class extends React.Component {
    render() {
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
                <HeaderAddVideo>
                </HeaderAddVideo>
                <HeaderApps>
                </HeaderApps>
                <HeaderUserInfo>

                </HeaderUserInfo>
            </HeaderBtnSectionWrapper>
        )
    }
}