import React from 'react';
import styled from 'styled-components';
import { PopUpArticle, PopUpArticleIcon, PopUpSection } from '../HeaderButtons';

const AppsPopUpWrapper = styled.div`
    background: ${props => {
        if (props.theaterMode || props.nightMode) {
            return props.themeColor.nightMode.header.BG;
        } else {
            return props.themeColor.dayMode.header.BG;
        }
    }};
    border: solid 0.4px rgba(0, 0, 0, 0.3);
    border-top: none;
    width: 229px;
    position: absolute;
    top: 42px;
    right: 82.5px;
    display: ${props => props.appsON ? 'flex' : 'none'};
    flex-direction: column;
    z-index: 348;
    font-size: 14px;
    line-height: 36px;
`;

export default class extends React.Component {
    buildItems = (item) => {
        const {
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        return (
            <PopUpArticle
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                <PopUpArticleIcon>{item[0]}</PopUpArticleIcon>
                <span>{item[1]}</span>
            </PopUpArticle>
        )
    };

    render() {
        const {
            appsON,
            lang,
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        const popUpItems = [
            [<i class="fas fa-tv"></i>, lang.header.appsPopUp.TV],
            [<i class="fas fa-music"></i>, lang.header.appsPopUp.music],
            [<i class="fas fa-child"></i>, lang.header.appsPopUp.kids],
            [<i class="fab fa-youtube"></i>, lang.header.appsPopUp.academy],
            [<i class="fab fa-youtube"></i>, lang.header.appsPopUp.artists]
        ];
        return (
            <AppsPopUpWrapper
                appsON={appsON}
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                <PopUpSection>
                    {this.buildItems(popUpItems[0])}
                </PopUpSection>
                <PopUpSection>
                    {this.buildItems(popUpItems[1])}
                    {this.buildItems(popUpItems[2])}
                </PopUpSection>
                <PopUpSection>
                    {this.buildItems(popUpItems[3])}
                    {this.buildItems(popUpItems[4])}
                </PopUpSection>
            </AppsPopUpWrapper>
        )
    }
}