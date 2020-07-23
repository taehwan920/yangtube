import React from 'react';
import styled from 'styled-components';

const PopUpWrapper = styled.section`
    background-color: white;
    width: max-content;
    height: auto;
    padding: 8px 0px;
    position: absolute;
    top: 40px;
    left: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
    z-index: 26;
`;

const PopUpArticle = styled.article`
    width: 100%;
    height: 36px;
    padding: 0px 36px 0px 16px;
    display: flex;
    
    &:hover{
        background: rgba(0, 0, 0, 0.1);
    }
`;

const ArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    text-align: center;
`;

const ArticleTxt = styled.span`
    width: auto;
    height: 21px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
`;

const popUpItems = [
    { icon: <i class="fas fa-flag"></i>, text: '신고' },
    { icon: <i class="fas fa-globe"></i>, text: '번역 추가' }
]

export default class extends React.Component {
    render() {
        return (
            <PopUpWrapper>
                {popUpItems.map(item => {
                    return (
                        <PopUpArticle>
                            <ArticleIcon>{item.icon}</ArticleIcon>
                            <ArticleTxt>{item.text}</ArticleTxt>
                        </PopUpArticle>
                    )
                })}
            </PopUpWrapper>
        )
    }
};