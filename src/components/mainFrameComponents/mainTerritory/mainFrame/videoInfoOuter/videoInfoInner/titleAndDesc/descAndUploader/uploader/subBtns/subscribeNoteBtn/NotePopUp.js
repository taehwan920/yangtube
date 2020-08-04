import React from 'react';
import styled from 'styled-components';

const PopUpWrapper = styled.section`
    background-color: ${props => props.themeColor.main.BG};
    width: max-content;
    height: max-content;
    padding: 8px 0px;
    border-radius: 3px;
    position: absolute;
    top: 45px;
    left: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
    z-index: 26;

    @media(max-width: 1023px) {
        left: -120px;
    }
`;

const PopUpArticle = styled.article`
    width: 100%;
    height: 36px;
    padding: 0px 36px 0px 16px;
    display: flex;
    align-items: center;
    
    &:hover{
        background-color: ${props => props.themeColor.effectBG};
    }
`;

const PopUpMiddleArticle = styled(PopUpArticle)`
    background-color: ${props => props.themeColor.effectBG};

    &:hover{
        background-color: ${props => props.themeColor.highlightedBG};
    }
`;

const ArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    color: ${props => props.themeColor.grayFont};
    font-size: 20px;
    text-align: center;
`;

const ArticleTxt = styled.span`
    width: auto;
    height: 21px;
    color: ${props => props.themeColor.grayFont};
    font-size: 14px;
    text-align: center;
`;

const popUpItems = [
    { icon: <i class="fas fa-bullhorn"></i>, text: '전체' },
    { icon: <i class="far fa-bell"></i>, text: '맞춤 설정', middle: true },
    { icon: <i class="far fa-bell-slash"></i>, text: '없음' }
]

export default class extends React.Component {
    render() {
        const {
            themeColor,
        } = this.props;
        return (
            <PopUpWrapper
                themeColor={themeColor}
            >
                {popUpItems.map(item => {
                    if (Object.keys(item).length > 2) {
                        return (
                            <PopUpMiddleArticle
                                themeColor={themeColor}
                            >
                                <ArticleIcon
                                    themeColor={themeColor}
                                >
                                    {item.icon}
                                </ArticleIcon>
                                <ArticleTxt
                                    themeColor={themeColor}
                                >
                                    {item.text}
                                </ArticleTxt>
                            </PopUpMiddleArticle>
                        )
                    }
                    return (
                        <PopUpArticle
                            themeColor={themeColor}
                        >
                            <ArticleIcon
                                themeColor={themeColor}
                            >
                                {item.icon}
                            </ArticleIcon>
                            <ArticleTxt
                                themeColor={themeColor}
                            >
                                {item.text}
                            </ArticleTxt>
                        </PopUpArticle>
                    )
                })}
            </PopUpWrapper>
        )
    }
};