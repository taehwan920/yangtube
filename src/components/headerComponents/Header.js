import React from 'react';
import { ChangeTitle, Logo, MenuButton } from '../Mixin';
import HeaderApps from './HeaderApps'
import HeaderAddVideo from './HeaderAddVideo';
import HeaderSearch from './HeaderSearch';
import HeaderUserInfo from './HeaderUserInfo';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: beige;
    width: 100%;
    height: 60px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
`;

const MenuBtnWrapper = styled.div`
    width: 110px;
    height: 100%;
    display: flex;
`;

export default class extends React.Component {
    render() {
        ChangeTitle('Main Page!');
        return (
            <HeaderWrapper>
                <MenuBtnWrapper>
                    <MenuButton></MenuButton>
                    <Logo></Logo>
                </MenuBtnWrapper>
                <HeaderSearch></HeaderSearch>
                <div><i class="fas fa-search"></i></div>
                <nav>
                    <div>
                        <i class="fas fa-video"></i>
                        <HeaderAddVideo></HeaderAddVideo>
                    </div>
                    <div>
                        <i class="fas fa-th"></i>
                        <HeaderApps></HeaderApps>
                    </div>
                </nav>
                <section>
                    <div>G</div>
                    <HeaderUserInfo></HeaderUserInfo>
                </section>
            </HeaderWrapper>
        )
    }
}