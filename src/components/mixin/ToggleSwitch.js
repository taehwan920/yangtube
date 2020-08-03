import React from 'react';
import styled, { css } from 'styled-components';

const ToggleSwitchWrapper = styled.div`
    width: 46px;
    height: 22px;
    margin: 0px 8px;
    position: relative;
    cursor: pointer;
`;

const ToggleTransition = css`
    transition: all 0.2s ease-in-out;
`;

const ToggleSwitchBar = styled.div`
    border-radius: 7px;
    width: 36px;
    height: 14px;
    margin: 4px 1px;
    ${ToggleTransition}
    background-color: ${props => props.switchON ? 'rgba(0, 0, 0, 0.4);' : 'rgba(0, 0, 0, 0.1)'};
`;

const ToggleSwitchBtn = styled.div`
    width: 20px;
    height: 20px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    position: absolute;
    bottom: 1.5px;
    ${ToggleTransition}
    background-color: ${props => props.switchON ? '#065FD4' : '#909090'};
    right: ${props => props.switchON ? '7px' : '27px'};
`;

export default class extends React.Component {
    clickSwitch = () => {
        this.props.switchFunc();
    }

    render() {
        const {
            switchON,
        } = this.props;
        return (
            <ToggleSwitchWrapper
                onClick={this.clickSwitch}
            >
                <ToggleSwitchBar
                    switchON={switchON}
                />
                <ToggleSwitchBtn
                    switchON={switchON}
                />
            </ToggleSwitchWrapper>
        )
    }
};