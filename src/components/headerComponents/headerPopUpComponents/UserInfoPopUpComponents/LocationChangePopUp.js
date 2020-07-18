import React from 'react';
import styled from 'styled-components';
import { SubPopUpHeaderWrapper, SubPopUpString, PopUpSection } from '../HeaderUserInfoPopUp'
import { UserInfoLeftArrow } from '../../../Mixin';

const LocationChangeArticle = styled.article`
    width: 298px;
    height: 40px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const LocationChangeText = styled.span`
    width: 226px;
    height: 40px;
    margin: 0px 16px 0px 56px;
    line-height: 39px;
`;

const LocationHeaderItems = ['위치 선택'];
const LocationChangeItems = ['한국', '미국', '일본'];

export default class extends React.Component {
    buildItem = item => {
        return (
            <LocationChangeArticle>
                <LocationChangeText>
                    {item}
                </LocationChangeText>
            </LocationChangeArticle>
        )
    };
    render() {
        const { toggleMode, stateType } = this.props;
        return (
            <React.Fragment>
                <SubPopUpHeaderWrapper>
                    <UserInfoLeftArrow toggleMode={toggleMode} stateType={stateType}></UserInfoLeftArrow>
                    <SubPopUpString>{LocationHeaderItems[0]}</SubPopUpString>
                </SubPopUpHeaderWrapper>
                <PopUpSection>
                    {LocationChangeItems.map(item => this.buildItem(item))}
                </PopUpSection>
            </React.Fragment>
        )
    };
};