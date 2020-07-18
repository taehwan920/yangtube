import React from 'react';
import styled from 'styled-components';
import { PopUpArticle, PopUpSection, RightArrowIcon, UserName, UserInfoHeader, UserInfoCircleIcon, LimitModeSpan } from '../HeaderUserInfoPopUp';

const PopUpArticleString = styled.span`
    width: 202px;
`;

const UserPopUpPictogram = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    font-size: 20px;
    text-align: center;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.4);
`;

const popUpItems = [
    [<i class="fas fa-moon"></i>, '어두운 테마: 사용 안함', <i class="fas fa-chevron-right"></i>, 'nightMode'],
    [<i class="fas fa-globe"></i>, '언어: 한국어', <i class="fas fa-chevron-right"></i>, 'langChange'],
    [<i class="fas fa-map-marker-alt"></i>, '위치: 한국', <i class="fas fa-chevron-right"></i>, 'locationChange'],
    [<i class="fas fa-cog"></i>, '설정'],
    [<i class="fas fa-user-shield"></i>, 'YangTube의 내 데이터'],
    [<i class="fas fa-question-circle"></i>, '고객센터'],
    [<i class="fas fa-exclamation"></i>, '의견 보내기'],
    [<i class="fas fa-keyboard"></i>, '단축키']
];

const limitMode = ['제한 모드: 사용 안함', '제한 모드: 사용 중', <i class="fas fa-chevron-right"></i>, 'limitMode'];

export default class extends React.Component {
    buildItems = (item) => {
        if (item.length > 2) {
            return (
                <PopUpArticle onClick={this.props.toggleMode(item[3])}>
                    <UserPopUpPictogram>{item[0]}</UserPopUpPictogram>
                    <PopUpArticleString>{item[1]}</PopUpArticleString>
                    <RightArrowIcon>{item[2]}</RightArrowIcon>
                </PopUpArticle>
            );
        } else {
            return (
                <PopUpArticle>
                    <UserPopUpPictogram>{item[0]}</UserPopUpPictogram>
                    <span>{item[1]}</span>
                </PopUpArticle>
            );
        };
    };

    render() {
        return (
            <React.Fragment>
                <UserInfoHeader>
                    <UserInfoCircleIcon draggable="true"><i class="fas fa-user"></i></UserInfoCircleIcon>
                    <UserName>Guest</UserName>
                </UserInfoHeader>
                <PopUpSection>
                    {popUpItems.map(item => this.buildItems(item))}
                </PopUpSection>
                <PopUpSection>
                    <PopUpArticle onClick={this.props.toggleMode(limitMode[3])}>
                        <LimitModeSpan>{limitMode[0]}</LimitModeSpan>
                        <RightArrowIcon>{limitMode[2]}</RightArrowIcon>
                    </PopUpArticle>
                </PopUpSection>
            </React.Fragment>
        )
    }
}