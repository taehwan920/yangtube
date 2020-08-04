import React from 'react';
import styled from 'styled-components';
import {
    TitleFunctionsIcons,
    TitleFunctionsTexts
} from '../TitleAndInfo';

const LinkBox = styled.a`
    height: 40px;
    display: flex;
    margin-right: 6px;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
`;

const ShareAndSaveEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 8px;
    left: 4px;
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
            themeColor,
        } = this.props;
        return (
            <React.Fragment>
                <LinkBox
                    href="https://github.com/taehwan920"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <TitleFunctionsIcons
                        themeColor={themeColor}
                    >
                        <i class="fab fa-github"></i>
                        <ShareAndSaveEffect />
                    </TitleFunctionsIcons>
                    <TitleFunctionsTexts
                        themeColor={themeColor}
                    >
                        깃허브
                        </TitleFunctionsTexts>
                </LinkBox>
                <LinkBox
                    href="https://hitzi.tistory.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <TitleFunctionsIcons
                        themeColor={themeColor}
                    >
                        <i class="fas fa-blog"></i>
                        <ShareAndSaveEffect />
                    </TitleFunctionsIcons>
                    <TitleFunctionsTexts
                        themeColor={themeColor}
                    >
                        블로그
                        </TitleFunctionsTexts>
                </LinkBox>
            </React.Fragment>
        )
    }
}