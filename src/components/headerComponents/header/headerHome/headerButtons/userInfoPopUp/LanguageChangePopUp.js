import React from 'react';
import styled from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp'
import LeftArrow from '../../../../../mixin/LeftArrow';

const LangChangeArticle = styled.article`
    width: 298px;
    height: 40px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const LangChangeText = styled.span`
    width: 226px;
    height: 40px;
    margin: 0px 16px 0px 56px;
    line-height: 39px;
`;

const LanguageHeaderItems = ['언어 선택'];
const LanguageChangeItems = ['한국어', 'English', '日本語'];

export default class extends React.Component {
    buildItem = item => {
        return (
            <LangChangeArticle>
                <LangChangeText>
                    {item}
                </LangChangeText>
            </LangChangeArticle>
        )
    };
    render() {
        const {
            nightMode,
            toggleMode,
            stateType,
            themeColor,
        } = this.props;
        return (
            <React.Fragment>
                <SubPopUpHeaderWrapper>
                    <LeftArrow
                        nightMode={nightMode}
                        themeColor={themeColor}
                        toggleMode={toggleMode}
                        stateType={stateType}
                    />
                    <SubPopUpString
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        {LanguageHeaderItems[0]}
                    </SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection
                    nightMode={nightMode}
                    themeColor={themeColor}
                >
                    {LanguageChangeItems.map(item => this.buildItem(item))}
                </PopUpSection>
            </React.Fragment>
        )
    };
};