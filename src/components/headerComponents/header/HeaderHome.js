import React from 'react';
import styled from 'styled-components';
import HeaderSearch from './HeaderSearch';
import HeaderButtons from './HeaderButtons';
import { Logo } from '../../Mixin';

const HeaderLogoPlace = styled.div`
    width: 155px;
    height: 40px;
`;

export default class extends React.Component {
    render() {
        const { toggleGuide, toggleMiniSearch, toggleVkbd } = this.props;
        return (
            <React.Fragment>
                <HeaderLogoPlace></HeaderLogoPlace>
                <Logo
                    toggleGuide={toggleGuide}
                ></Logo>
                <HeaderSearch
                    toggleVkbd={toggleVkbd}></HeaderSearch>
                <HeaderButtons
                    toggleMiniSearch={toggleMiniSearch}
                ></HeaderButtons>
            </React.Fragment>
        )
    }
}