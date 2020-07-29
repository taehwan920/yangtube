import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
};

export const toggleGuide = () => {
    const guide = document.querySelector('.guide-wrapper');
    guide.classList.toggle('move');
};

const LogoWrapper = styled.div`
    width: 155px;
    height: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    z-index: 25;
`;

const LogoImg = styled.img`
    height: 21px;
    margin-left: 30px;
    
`;

const LogoLink = styled(Link)`
    height: 21px;
    margin-bottom: 1px;
`;

const MenuBtn = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s linear;

`;

export const ClickEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 0px;
    left: 0.3px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;



export class Logo extends React.Component {
    render() {
        return (
            <LogoWrapper>
                <MenuBtn
                    onClick={this.props.toggleGuide}>
                    <ClickEffect></ClickEffect>
                    <i class="fas fa-bars"></i>
                </MenuBtn >
                <LogoLink to="/home">
                    <LogoImg alt="YangTube" src="./images/youtubefont3.png"></LogoImg>
                </LogoLink>
            </LogoWrapper>
        )
    }
}

export class LogoOnlyImg extends React.Component {
    render() {
        return (
            <LogoImg alt="YangTube" src="./images/youtubefont3.png"></LogoImg>
        )
    }
}

export class NotCreated extends React.Component {
    render() {
        return (
            <div>
                <span>해당 기능은 구현하지 않았습니다.</span>
                <span>사유: 서버 부재</span>
            </div>
        )
    }
};

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
    background-color: ${props => props.switchON ? '#3DA5FF' : '#909090'};
    right: ${props => props.switchON ? '7px' : '27px'};
`;

export class ToggleSwitch extends React.Component {
    state = {
        switchON: false
    }
    render() {
        const { switchON } = this.state;
        return (
            <ToggleSwitchWrapper onClick={() => {
                this.setState({ switchON: !this.state.switchON })
            }}>
                <ToggleSwitchBar switchON={switchON}></ToggleSwitchBar>
                <ToggleSwitchBtn switchON={switchON}></ToggleSwitchBtn>
            </ToggleSwitchWrapper>
        )
    }
};

const LeftArrow = styled.div`
    width: 40px;
    height: 40px;
    padding: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
`;

export class UserInfoLeftArrow extends React.Component {
    render() {
        const { toggleMode, stateType } = this.props;
        return (
            <LeftArrow onClick={toggleMode(stateType)}>
                <i class="fas fa-arrow-left"></i>
            </LeftArrow>
        )
    }
};