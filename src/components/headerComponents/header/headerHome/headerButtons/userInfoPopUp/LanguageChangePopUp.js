import React from 'react';
import styled from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp'
import LeftArrow from '../../../../../mixin/LeftArrow';

const LangChangeArticle = styled.article`
    width: 298px;
    height: 40px;
    display: flex;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const LangChangeText = styled.span`
    width: 226px;
    height: 40px;
    margin-right: 16px;
    line-height: 39px;
`;

const LangCheckBox = styled.div`
    width: 40px;
    height: 40px;
    margin: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${props => props.themeColor.normalFont};
    opacity: ${props => props.checkOrNot ? 1 : 0};
`;

export default class extends React.Component {
    state = {
        langList: [false, false, false]
    };

    componentDidMount() {
        const sampleArr = [false, false, false];
        const { langState } = this.props;
        const langArr = this.props.lang.header.userInfoPopUp.language.langCode;
        const langIdx = langArr.indexOf(langState);
        sampleArr[langIdx] = true;
        this.setState({ langList: sampleArr });
    };

    selectLang = idx => () => {
        const langArr = this.props.lang.header.userInfoPopUp.language.langCode;
        const sampleArr = [false, false, false];
        const newLang = langArr[idx];
        sampleArr[idx] = true;
        this.setState({
            langList: sampleArr,
        });
        this.props.changeLang(newLang);
    };

    render() {
        const {
            lang,
            nightMode,
            toggleMode,
            stateType,
            themeColor,
        } = this.props;
        const {
            language,
        } = lang.header.userInfoPopUp;
        const {
            items
        } = language;
        const {
            langList
        } = this.state;
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
                        {language.header}
                    </SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection
                    nightMode={nightMode}
                    themeColor={themeColor}
                >
                    {items.map(item => {
                        const itemIdx = items.indexOf(item);
                        return (
                            <LangChangeArticle
                                onClick={this.selectLang(itemIdx)}
                            >
                                <LangCheckBox
                                    checkOrNot={langList[itemIdx]}
                                    themeColor={themeColor}
                                >
                                    <i class="fas fa-check"></i>
                                </LangCheckBox>
                                <LangChangeText>
                                    {item}
                                </LangChangeText>
                            </LangChangeArticle>
                        )
                    })}
                </PopUpSection>
            </React.Fragment>
        )
    };
};