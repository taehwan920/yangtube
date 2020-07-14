import React from 'react';
import { ChangeTitle, Logo } from '../Mixin';
import HeaderApps from './HeaderAppsPopUp'
import HeaderAddVideo from './HeaderAddVideoPopUp';
import HeaderSearch from './HeaderSearch';
import HeaderUserInfo from './HeaderUserInfoPopUp';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: white;
    width: 100%;
    height: 56px;
    padding-left: 24px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
`;

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
    width: 40px;
    height: 40px;
    position: absolute;
    font-size: 20px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.63);
    border: none;
    background: none;
`;

const MiniSearchBtn = styled(HeaderBtn)`
    display: none;
    @media (max-width: 767px) {
        display: inline-block;
        right: 202.5px;
    }
`;

const AddVideoBtn = styled(HeaderBtn)`
    right: 162.5px;
    display: relative;
`;

const AddVideoBtnPlusIcon = styled(HeaderBtn)`
    bottom: 1px;
    right: 3.5px;
    font-size: 10px;
    color: white;
    display: absolute;
`;

const AppsBtn = styled(HeaderBtn)`
    right: 112.5px;
`;

const AlarmBtn = styled(HeaderBtn)`
    right: 62.5px;
`;

const UserInfoIcon = styled.div`
    background-color: #AA47BC;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    border-radius: 50%;
    text-align: center;
    line-height: 1.4;
    font-size: 20px;
    color: white;
`;

export default class extends React.Component {
    render() {
        ChangeTitle('Main Page!');
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <HeaderSearch></HeaderSearch>
                <HeaderBtnSectionWrapper>
                    <HeaderBtnSection>
                        <MiniSearchBtn>
                            <i class="fas fa-search"></i>
                        </MiniSearchBtn>
                        <AddVideoBtn>
                            <i class="fas fa-video"></i>
                            <AddVideoBtnPlusIcon>
                                <i class="fas fa-plus"></i>
                            </AddVideoBtnPlusIcon>
                        </AddVideoBtn>
                        <AppsBtn>
                            <i class="fas fa-th"></i>
                        </AppsBtn>
                        <AlarmBtn>
                            <i class="fas fa-bell"></i>
                        </AlarmBtn>
                        <UserInfoIcon>G</UserInfoIcon>
                    </HeaderBtnSection>
                </HeaderBtnSectionWrapper>
                <HeaderAddVideo></HeaderAddVideo>
                <HeaderApps></HeaderApps>
                <HeaderUserInfo></HeaderUserInfo>
            </HeaderWrapper>
        )
    }
}