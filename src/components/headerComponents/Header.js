import React from 'react';
import styled from 'styled-components';
import { ChangeTitle, Logo } from '../Mixin';
import HeaderSearch from './header/HeaderSearch';
import HeaderButtons from './header/HeaderButtons';
import VirtualKeyboard from '../VirtualKeyboard';

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

const HeaderLogoPlace = styled.div`
    width: 155px;
    height: 40px;
`;

export default class extends React.Component {
    state = {
        VKbd: false,
        miniSearchBox: false
    };

    toggleVkbd = () => {
        this.setState({ VKbd: !this.state.VKbd });
    }

    render() {
        const { toggleGuide } = this.props;
        const { VKbd, miniSearchBox } = this.state;
        ChangeTitle('Main Page!');
        return (
            <HeaderWrapper>
                {miniSearchBox
                    ? null
                    : <React.Fragment>
                        <HeaderLogoPlace></HeaderLogoPlace>
                        <Logo
                            toggleGuide={toggleGuide}
                        ></Logo>
                        <HeaderSearch
                            toggleVkbd={this.toggleVkbd}></HeaderSearch>
                        <HeaderButtons></HeaderButtons>
                        {VKbd
                            ? <VirtualKeyboard
                                onClick={() => { this.setState({ VKbd: !VKbd }) }}></VirtualKeyboard>
                            : null}
                    </React.Fragment>}
            </HeaderWrapper>
        )
    }
}