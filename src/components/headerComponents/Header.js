import React from 'react';
import { ChangeTitle, Logo, MenuButton } from '../Mixin';
import HeaderApps from './HeaderApps'
import HeaderAddVideo from './HeaderAddVideo';
import HeaderSearch from './HeaderSearch';
import HeaderUserInfo from './HeaderUserInfo';

export default class extends React.Component {
    render() {
        ChangeTitle('Main Page!');
        return (
            <header className="header">
                <MenuButton></MenuButton>
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
            </header>
        )
    }
}