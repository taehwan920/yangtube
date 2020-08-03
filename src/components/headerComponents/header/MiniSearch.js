import React from 'react';
import styled from 'styled-components';
import MiniSearchBox from './miniSearch/MiniSearchBox';

const GoBackIcon = styled.div`
    width: 40px;
    height: 40px;
    padding: 8px;
    margin-right: 8px;
    color: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.normalFont;
        } else {
            return props.themeColor.dayMode.normalFont;
        }
    }};
    text-align: center;
    font-size: 20px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const {
            nightMode,
            offMiniSearch,
            theaterMode,
            toggleVkbd,
            themeColor,
        } = this.props;
        return (
            <React.Fragment>
                <GoBackIcon
                    onClick={offMiniSearch}
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    themeColor={themeColor}
                >
                    <i class="fas fa-arrow-left"></i>
                </GoBackIcon>
                <MiniSearchBox
                    offMiniSearch={offMiniSearch}
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    toggleVkbd={toggleVkbd}
                    themeColor={themeColor}
                />
            </React.Fragment>
        )
    }
};