import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
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

export class Logo extends React.Component {
    render() {
        return (
            <LogoWrapper>
                <i class="fas fa-bars"></i>
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