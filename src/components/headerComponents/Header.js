import React from 'react';
import styled from 'styled-components';
import { ChangeTitle, Logo } from '../Mixin';
import HeaderSearch from './HeaderSearch';
import HeaderButtons from './HeaderButtons';
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

const PopUpsOffSwitch = styled.div`
    width: 100vw;
    height: inherit;
    overflow: hidden;
    position: absolute;
    z-index: 19;
`;

export default class extends React.Component {
    state = {
        VKbd: false
    };

    render() {
        const { toggleGuide, popUpSwitchON, popUpSwitchOff, popUps } = this.props;
        const { VKbd } = this.state;
        ChangeTitle('Main Page!');
        return (
            <React.Fragment>
                <HeaderWrapper>
                    <HeaderLogoPlace></HeaderLogoPlace>
                    <Logo
                        toggleGuide={toggleGuide}
                    ></Logo>
                    <HeaderSearch
                        onClick={() => {
                            this.setState({ VKbd: !VKbd })
                        }}></HeaderSearch>
                    <HeaderButtons
                        popUpSwitchON={popUpSwitchON}
                        popUps={popUps}
                    ></HeaderButtons>
                    {VKbd
                        ? <VirtualKeyboard
                            onClick={() => { this.setState({ VKbd: !VKbd }) }}></VirtualKeyboard>
                        : null}
                </HeaderWrapper>
                {popUps
                    ? <PopUpsOffSwitch onClick={popUpSwitchOff}></PopUpsOffSwitch>
                    : null}
            </React.Fragment>
        )
    }
}