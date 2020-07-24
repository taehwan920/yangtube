import React from 'react';
import styled from 'styled-components';
import MiniSearchBox from './miniSearch/MiniSearchBox';

const GoBackIcon = styled.div`
    width: 40px;
    height: 40px;
    padding: 8px;
    margin-right: 8px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const { offMiniSearch, toggleVkbd } = this.props;
        return (
            <React.Fragment>
                <GoBackIcon onClick={offMiniSearch}>
                    <i class="fas fa-arrow-left"></i>
                </GoBackIcon>
                <MiniSearchBox
                    offMiniSearch={offMiniSearch}
                    toggleVkbd={toggleVkbd}
                ></MiniSearchBox>
            </React.Fragment>
        )
    }
};