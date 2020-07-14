import React from 'react';
import styled from 'styled-components';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
}

const LogoWrapper = styled.div`
    width: 7%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
`;

const LogoImg = styled.img`
    height: 19px;
`;

export class Logo extends React.Component {
    render() {
        return (
            <LogoWrapper>
                <i class="fas fa-bars"></i>
                <LogoImg alt="YangTube 홈" src="./images/youtubefont3.png"></LogoImg>
            </LogoWrapper>
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