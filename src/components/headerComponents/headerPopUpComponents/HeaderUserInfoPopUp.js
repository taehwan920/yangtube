import React from 'react';
import styled, { css } from 'styled-components';

const UserInfoCommonSetUp = css`
    width: 298px;
`;

const UserInfoPopUpWrapper = styled.div`
    background: rgba(255, 255, 255, 0.97);
    border: solid 0.4px rgba(0, 0, 0, 0.3);
    border-top: none;
    position: absolute;
    top: 42px;
    right: 16.5px;
    display: ${props => props.userInfoON ? 'flex' : 'none'};
    flex-direction: column;
    z-index: 348;
    font-size: 14px;
    line-height: 36px;
    ${UserInfoCommonSetUp}
`;

const PopUpSection = styled.section`
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    ${UserInfoCommonSetUp}
`;

const PopUpArticle = styled.div`
    height: 40px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    ${UserInfoCommonSetUp}

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const PopUpArticleHas3Items = styled(PopUpArticle)`
    justify-content: space-between;
`;

const PopUpArticleItem = styled.span`
    width: 202px;
`;

const UserPopUpArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 22px;
    font-size: 20px;
    text-align: center;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.4);
`;

const UserHeader = styled.header`
    height: 60px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    ${UserInfoCommonSetUp}
`;

const UserIcon = styled.div`
    background-color: #AA47BC;
    width: 40px;
    height: 40px;
    right: 30px;
    border: none;
    border-radius: 50%;
    text-align: center;
    line-height: 58px;
    overflow: hidden;
    font-size: 31px;
    color: rgba(255, 255, 255, 0.65);
    cursor: default;
`;

const UserName = styled.span`
    margin-left: 24px;
    font-size: 20px;
`;



const RightArrowIcon = styled.span`
    width: 24px;
    height: 24px;
    font-size: 16px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.4);
`;

const LimitModeSpan = styled.span`
    width: 266px;
`;

const popUpItems = [
    [<i class="fas fa-moon"></i>, '어두운 테마: 사용 안함', <i class="fas fa-chevron-right"></i>],
    [<i class="far fa-file-word"></i>, '언어: 한국어', <i class="fas fa-chevron-right"></i>],
    [<i class="fas fa-globe"></i>, '위치: 한국', <i class="fas fa-chevron-right"></i>],
    [<i class="fas fa-cog"></i>, '설정'],
    [<i class="fas fa-user-shield"></i>, 'YangTube의 내 데이터'],
    [<i class="fas fa-question-circle"></i>, '고객센터'],
    [<i class="fas fa-exclamation"></i>, '의견 보내기'],
    [<i class="fas fa-keyboard"></i>, '단축키']
];

const limitMode = ['제한 모드: 사용 안함', <i class="fas fa-chevron-right"></i>];


export default class extends React.Component {
    buildItems = (item) => {
        if (item.length > 2) {
            return (
                <PopUpArticleHas3Items>
                    <UserPopUpArticleIcon>{item[0]}</UserPopUpArticleIcon>
                    <PopUpArticleItem>{item[1]}</PopUpArticleItem>
                    <RightArrowIcon>{item[2]}</RightArrowIcon>
                </PopUpArticleHas3Items>
            );
        } else {
            return (
                <PopUpArticle>
                    <UserPopUpArticleIcon>{item[0]}</UserPopUpArticleIcon>
                    <span>{item[1]}</span>
                </PopUpArticle>
            );
        };
    };
    render() {
        return (
            <UserInfoPopUpWrapper userInfoON={this.props.userInfoON}>
                <UserHeader>
                    <UserIcon draggable="true"><i class="fas fa-user"></i></UserIcon>
                    <UserName>Guest</UserName>
                </UserHeader>
                <PopUpSection>
                    {popUpItems.map(item => this.buildItems(item))}
                </PopUpSection>
                <PopUpSection>
                    <PopUpArticle>
                        <LimitModeSpan>{limitMode[0]}</LimitModeSpan>
                        <RightArrowIcon>{limitMode[1]}</RightArrowIcon>
                    </PopUpArticle>
                </PopUpSection>
            </UserInfoPopUpWrapper>
        )
    }

}