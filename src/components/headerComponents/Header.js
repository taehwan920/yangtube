import React from 'react';
import { ChangeTitle, Logo } from '../Mixin';
import HeaderApps from './HeaderApps'
import HeaderAddVideo from './HeaderAddVideo';
import HeaderSearch from './HeaderSearch';
import HeaderUserInfo from './HeaderUserInfo';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 56px;
    padding-left: 12px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
`;

export default class extends React.Component {
    render() {
        ChangeTitle('Main Page!');
        return (
            <HeaderWrapper>
                <Logo></Logo>
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