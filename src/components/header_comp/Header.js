import React from 'react';
import { ChangeTitle, Logo, MenuButton } from '../Mixin';
import HeaderSearch from './HeaderSearch';

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
                    <div><i class="fas fa-video"></i></div>
                    <div><i class="fas fa-th"></i></div>
                    <div><i class="fas fa-bell"></i></div>
                </nav>
                <div>Y</div>
            </header>
        )
    }
}