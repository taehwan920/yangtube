import React from 'react';
import styled from 'styled-components';
import { PopUpArticle, PopUpArticleIcon } from './HeaderButtons';

const AddVideoPopUpWrapper = styled.div`
    background: rgba(255, 255, 255, 0.97);
    border: solid 0.4px rgba(0, 0, 0, 0.3);
    border-top: none;
    width: 229px;
    padding: 8px 0px;
    position: absolute;
    top: 42px;
    right: 182.5px;
    display: ${props => props.addVideoON ? 'flex' : 'none'};
    flex-direction: column;
    z-index: 348;
    font-size: 14px;
    line-height: 36px;
`;

const popUpItems = [
    [<i class="far fa-play-circle"></i>, '동영상 업로드'],
    [<i class="fas fa-broadcast-tower"></i>, '실시간 스트리밍 시작']
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
        const { addVideoON } = this.props;
        return (
            <AddVideoPopUpWrapper addVideoON={addVideoON}>
                {popUpItems.map((item) => this.buildItems(item))}
            </AddVideoPopUpWrapper>
        )
    }
}