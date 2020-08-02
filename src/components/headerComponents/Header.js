import React from 'react';
import styled from 'styled-components';
import { ChangeTitle } from '../Mixin';
import HeaderHome from './header/HeaderHome';
import VirtualKeyboard from '../VirtualKeyboard';
import MiniSearch from './header/MiniSearch';


const HeaderWrapper = styled.header`
    background-color: rgba(255, 255, 255, 0.97);
    width: 100%;
    height: 56px;
    padding-left: 24px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    z-index: 20;
`;

export default class extends React.Component {
    state = {
        VKbd: false,
        miniSearchBox: false
    };

    toggleVkbd = () => {
        this.setState({ VKbd: !this.state.VKbd });
    }

    toggleMiniSearch = () => {
        this.setState({ miniSearchBox: !this.state.miniSearchBox });
    }

    offMiniSearch = () => {
        this.setState({ miniSearchBox: false });
    }

    render() {
        const {
            toggleGuide,
            contentData,
        } = this.props;
        const { VKbd, miniSearchBox } = this.state;
        ChangeTitle(contentData.title);
        return (
            <HeaderWrapper>
                {miniSearchBox
                    ? <MiniSearch
                        offMiniSearch={this.offMiniSearch}
                        toggleVkbd={this.toggleVkbd}
                    ></MiniSearch>
                    : <HeaderHome
                        toggleGuide={toggleGuide}
                        toggleMiniSearch={this.toggleMiniSearch}
                        toggleVkbd={this.toggleVkbd}
                    ></HeaderHome>}
                {VKbd
                    ? <VirtualKeyboard
                        onClick={() => { this.setState({ VKbd: !VKbd }) }}></VirtualKeyboard>
                    : null}
            </HeaderWrapper>
        )
    }
}