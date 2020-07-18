import React from 'react';
import styled from 'styled-components';
import { PopUpArticle, PopUpArticleIcon, PopUpSection } from './HeaderButtons';

const AppsPopUpWrapper = styled.div`
    background: rgba(255, 255, 255, 0.97);
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

const popUpItems = [
    [<i class="fas fa-tv"></i>, 'YouTube TV'],
    [<i class="fas fa-music"></i>, 'YouTube Music'],
    [<i class="fas fa-child"></i>, 'YouTube Kids'],
    [<i class="fab fa-youtube"></i>, '크리에이터 아카데미'],
    [<i class="fab fa-youtube"></i>, 'YouTube for Artists']
]

export default class extends React.Component {
    buildItems = (item) => {
        return (
            <PopUpArticle>
                <PopUpArticleIcon>{item[0]}</PopUpArticleIcon>
                <span>{item[1]}</span>
            </PopUpArticle>
        )
    }
    render() {
        const { appsON } = this.props;
        return (
            <AppsPopUpWrapper appsON={appsON}>
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