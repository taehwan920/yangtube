import React from 'react';
import styled, { css } from 'styled-components';

const AddVideoPopUpWrapper = styled.div`
    background: white;
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

const AddVideoArticle = styled.div`
    width: 229px;
    height: 40px;
    padding: 0px 20px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const AddVideoIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 22px;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    color: red;
`;

const popUpItems = [
    [<i class="far fa-play-circle"></i>, '동영상 업로드'],
    [<i class="fas fa-broadcast-tower"></i>, '실시간 스트리밍 시작']
]

export default class extends React.Component {
    buildItems = (item) => {
        return (
            <AddVideoArticle>
                <AddVideoIcon>{item[0]}</AddVideoIcon>
                <span>{item[1]}</span>
            </AddVideoArticle>
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