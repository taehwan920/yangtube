import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
}

export const toggleGuide = () => {
    const guide = document.querySelector('.guide-wrapper');
    guide.classList.toggle('move');
}

const LogoWrapper = styled.div`
    width: 155px;
    height: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
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
                    onClick={this.props.toggleGuide}
                >
                    <ClickEffect></ClickEffect>
                    <i class="fas fa-bars"></i>
                </MenuBtn >
                <LogoLink to="/">
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
}

export class ToggleSwitchInVideo extends React.Component {
    render() {
        return (
            <div>
                <div></div>
                <div></div>
            </div>
        )
    }
}