import React from 'react';
import styled from 'styled-components';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
}

const LogoWrapper = styled.div`
    width: 105px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    items-align: center;
    font-size: 18px;
`;

const LogoImg = styled.img`
    height: 24px;
`;

export class Logo extends React.Component {
    render() {
        return (
            <LogoWrapper>
                <LogoImg alt="YangTube 홈" src="./images/youtubefont2.png"></LogoImg>
            </LogoWrapper>
        )
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <i class="fas fa-bars"></i>
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