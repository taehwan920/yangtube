import React from 'react';
import { ChangeTitle, Logo, MenuButton } from '../Mixin';
import HeaderApps from './HeaderApps'
import HeaderAddVideo from './HeaderAddVideo';
import HeaderSearch from './HeaderSearch';
import HeaderUserInfo from './HeaderUserInfo';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    background-color: blue;
`;

export default class extends React.Component {
    render() {
        ChangeTitle('Main Page!');
        return (
            <HeaderWrapper>
                <header className="header">
                    <div>
                        <MenuButton></MenuButton>
                        <Logo></Logo>
                    </div>
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
                </header>
            </HeaderWrapper>
        )
    }
}