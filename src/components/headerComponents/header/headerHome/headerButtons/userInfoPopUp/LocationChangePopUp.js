import React from 'react';
import styled from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp'
import LeftArrow from '../../../../../mixin/LeftArrow';

const LocationChangeArticle = styled.article`
    width: 298px;
    height: 40px;
    display: flex;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const LocationChangeText = styled.span`
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
        locaList: [false, false, false]
    };

    componentDidMount() {
        const sampleArr = [false, false, false];
        const { loca } = this.props;
        const locaArr = this.props.lang.header.userInfoPopUp.location.locaCode;
        const locaIdx = locaArr.indexOf(loca);
        sampleArr[locaIdx] = true;
        this.setState({ locaList: sampleArr });
    };

    selectLoca = idx => () => {
        const locaArr = this.props.lang.header.userInfoPopUp.location.locaCode;
        const sampleArr = [false, false, false];
        const newLoca = locaArr[idx];
        sampleArr[idx] = true;
        this.setState({
            locaList: sampleArr,
        });
        this.props.changeLoca(newLoca);
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
            location,
        } = lang.header.userInfoPopUp;
        const {
            items,
        } = location;
        const {
            locaList,
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
                        {location.header}
                    </SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection
                    nightMode={nightMode}
                    themeColor={themeColor}
                >
                    {items.map(item => {
                        const itemIdx = items.indexOf(item);
                        return (
                            <LocationChangeArticle
                                onClick={this.selectLoca(itemIdx)}
                            >
                                <LangCheckBox
                                    checkOrNot={locaList[itemIdx]}
                                    themeColor={themeColor}
                                >
                                    <i class="fas fa-check"></i>
                                </LangCheckBox>
                                <LocationChangeText>
                                    {item}
                                </LocationChangeText>
                            </LocationChangeArticle>
                        )
                    })}
                </PopUpSection>
            </React.Fragment>
        )
    };
};