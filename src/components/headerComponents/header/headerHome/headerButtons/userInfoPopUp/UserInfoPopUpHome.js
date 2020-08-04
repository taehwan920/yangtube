import React from 'react';
import styled from 'styled-components';
import {
    PopUpArticle,
    PopUpSection,
    RightArrowIcon,
    UserName,
    UserInfoHeader,
    UserInfoCircleIcon,
} from '../HeaderUserInfoPopUp';

const PopUpArticleString = styled.span`
    width: 202px;
    text-align: left;
`;

const UserPopUpPictogram = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    font-size: 20px;
    text-align: center;
    line-height: 22px;
    color: ${props => {
        if (props.nightMode) {
            return props.themeColor.nightMode.header.pictogramColor;
        } else {
            return props.themeColor.dayMode.header.pictogramColor;
        }
    }};
`;

const popUpItems = [
    [<i class="fas fa-moon"></i>, '어두운 테마: 사용 안함', <i class="fas fa-chevron-right"></i>, 'night'],
    [<i class="fas fa-globe"></i>, '언어: 한국어', <i class="fas fa-chevron-right"></i>, 'langChange'],
    [<i class="fas fa-map-marker-alt"></i>, '위치: 한국', <i class="fas fa-chevron-right"></i>, 'locationChange'],
    [<i class="fas fa-cog"></i>, '설정'],
    [<i class="fas fa-user-shield"></i>, 'YangTube의 내 데이터'],
    [<i class="fas fa-question-circle"></i>, '고객센터'],
    [<i class="fas fa-exclamation"></i>, '의견 보내기']
];

export default class extends React.Component {
    buildItems = (item) => {
        const {
            nightMode,
            themeColor,
        } = this.props;
        const isNight = nightMode ? '어두운 테마: 사용 중' : '어두운 테마: 사용 안함';
        popUpItems[0][1] = isNight;
        if (item.length > 2) {
            return (
                <PopUpArticle onClick={this.props.toggleMode(item[3])}>
                    <UserPopUpPictogram
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        {item[0]}
                    </UserPopUpPictogram>
                    <PopUpArticleString>
                        {item[1]}
                    </PopUpArticleString>
                    <RightArrowIcon
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        {item[2]}
                    </RightArrowIcon>
                </PopUpArticle>
            );
        } else {
            return (
                <PopUpArticle>
                    <UserPopUpPictogram
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        {item[0]}
                    </UserPopUpPictogram>
                    <span>{item[1]}</span>
                </PopUpArticle>
            );
        };
    };

    render() {
        const {
            nightMode,
            themeColor,
        } = this.props;
        return (
            <React.Fragment>
                <UserInfoHeader>
                    <UserInfoCircleIcon
                        draggable="true">
                        <i class="fas fa-user"></i>
                    </UserInfoCircleIcon>
                    <UserName
                        nightMode={nightMode}
                        themeColor={themeColor}
                    >
                        Guest
                        </UserName>
                </UserInfoHeader>
                <PopUpSection
                    nightMode={nightMode}
                    themeColor={themeColor}
                >
                    {popUpItems.map(item => this.buildItems(item))}
                </PopUpSection>
            </React.Fragment>
        )
    }
}