import React from 'react';
import styled from 'styled-components';

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
    position: absolute;
    right: 0;
`;

const DayImg = styled(LogoImg)`
    opacity: ${props => {
        if (props.nightMode) {
            return 0;
        } else {
            return 1;
        }
    }};
`;

const NightImg = styled(LogoImg)`
    opacity: ${props => {
        if (props.nightMode) {
            return 1;
        } else {
            return 0;
        }
    }};
`;

const LogoLink = styled.a`
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

    color: ${props => props.themeColor.normalFont};
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

export default class extends React.Component {
    render() {
        const {
            nightMode,
            themeColor,
        } = this.props;
        return (
            <LogoWrapper>
                <MenuBtn
                    themeColor={themeColor}
                    onClick={this.props.toggleGuide}
                >
                    <ClickEffect />
                    <i class="fas fa-bars"></i>
                </MenuBtn >
                <LogoLink
                    href="#/home"
                    rel="noreferer noopener"
                >
                    <DayImg
                        nightMode={nightMode}
                        themeColor={themeColor}
                        alt="YangTube"
                        src="./images/youtubefont3.png"
                    />
                    <NightImg
                        nightMode={nightMode}
                        themeColor={themeColor}
                        alt="YangTube"
                        src="./images/logo_alter.png"
                    />
                </LogoLink>
            </LogoWrapper>
        )
    }
};