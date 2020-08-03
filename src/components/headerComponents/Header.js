import React from 'react';
import styled from 'styled-components';
import { ChangeTitle } from '../Mixin';
import HeaderHome from './header/HeaderHome';
import VirtualKeyboard from '../VirtualKeyboard';
import MiniSearch from './header/MiniSearch';


const HeaderWrapper = styled.header`
    background: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.header.BG;
        } else {
            return props.themeColor.dayMode.header.BG;
        }
    }};
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

    componentDidMount() {
        ChangeTitle(this.props.contentData.title);
    };

    toggleVkbd = () => {
        this.setState({ VKbd: !this.state.VKbd });
    };

    toggleMiniSearch = () => {
        this.setState({ miniSearchBox: !this.state.miniSearchBox });
    };

    offMiniSearch = () => {
        this.setState({ miniSearchBox: false });
    };

    render() {
        const {
            nightMode,
            theaterMode,
            toggleGuide,
            toggleNight,
            themeColor,
        } = this.props;
        const {
            VKbd,
            miniSearchBox
        } = this.state;

        return (
            <HeaderWrapper
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                {miniSearchBox
                    ? <MiniSearch
                        nightMode={nightMode}
                        offMiniSearch={this.offMiniSearch}
                        theaterMode={theaterMode}
                        toggleVkbd={this.toggleVkbd}
                        themeColor={themeColor}
                    />
                    : <HeaderHome
                        nightMode={nightMode}
                        theaterMode={theaterMode}
                        toggleGuide={toggleGuide}
                        toggleMiniSearch={this.toggleMiniSearch}
                        toggleNight={toggleNight}
                        toggleVkbd={this.toggleVkbd}
                        themeColor={themeColor}
                    />}
                {VKbd
                    ? <VirtualKeyboard
                        onClick={() => { this.setState({ VKbd: !VKbd }) }}
                    />
                    : null}
            </HeaderWrapper>
        )
    }
}