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



export default class extends React.Component {
    buildItems = (item) => {
        const {
            nightMode,
            themeColor,
        } = this.props;
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
            lang,
            langState,
            loca,
            nightMode,
            themeColor,
        } = this.props;
        const {
            userInfoPopUp
        } = lang.header;
        const popUpItems = [
            [<i class="fas fa-moon"></i>, ' ', <i class="fas fa-chevron-right"></i>, 'night'],
            [<i class="fas fa-globe"></i>, ' ', <i class="fas fa-chevron-right"></i>, 'langChange'],
            [<i class="fas fa-map-marker-alt"></i>, ' ', <i class="fas fa-chevron-right"></i>, 'locationChange'],
            [<i class="fas fa-cog"></i>, userInfoPopUp.config],
            [<i class="fas fa-user-shield"></i>, userInfoPopUp.yourData],
            [<i class="fas fa-question-circle"></i>, userInfoPopUp.help],
            [<i class="fas fa-exclamation"></i>, userInfoPopUp.feedback]
        ];
        const nightUsed = nightMode ? userInfoPopUp.night.using : userInfoPopUp.night.notUsing;
        const languageSet = userInfoPopUp.language[langState];
        const locationSet = userInfoPopUp.location[loca];
        popUpItems[0][1] = userInfoPopUp.night.mode + nightUsed;
        popUpItems[1][1] = userInfoPopUp.language.mode + languageSet;
        popUpItems[2][1] = userInfoPopUp.location.mode + locationSet;
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