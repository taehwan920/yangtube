import React from 'react';
import styled, { css } from 'styled-components';
import { Logo } from '../Mixin';

const OverTheSheet = css`
    z-index: 351;
`;

const GuideWrapper = styled.aside`
    background-color: white;
    width: 240px;
    position: absolute;
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.7);
    transition: transform 0.18s ease-out;
    transform: ${props => (props.guideIsON ? 'translateX(0px);' : 'translateX(-240px)')};
    ${OverTheSheet}
`;

const GuideBlackSheet = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 200vw;
    height: 1100px;
    position: absolute;
    overflow: hidden;
    transition: all 0.2s ease-out;
    opacity: ${props => (props.guideIsON ? '1' : '0')};
    z-index: ${props => (props.guideIsON ? '350' : '-350')};
    display: ${props => (props.guideIsON ? 'flex' : 'none')};
`;

const GuideLogoWrapper = styled.header`
    background-color: inherit;
    width:240px;
    height: 57px;
    padding-right: 36px;
    padding-bottom: 1px;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    ${OverTheSheet}
`;

const SectionWrapper = styled.div`
    background-color: white;
    width: 240px;
    position: relative;
    left: 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: rgba(0, 0, 0, 0.7);
    ${OverTheSheet}
`;

const GuideSection = styled.section`
    width: 240px;
    padding: 12px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    ${OverTheSheet}
`;

const GuideSectionHeader = styled.span`
    width: 192px;
    height: 19px;
    margin: 8px 24px;
    font-size: 14px;
    line-height: 28px;
    color: inherit;
    ${OverTheSheet}
`;

const GuideSectionArticle = styled.article`
    width: 240px;
    height: 40px;
    padding: 0px 24px;
    display: flex;
    align-items: center;
    ${OverTheSheet}

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const GuideSectionHomeArticle = styled(GuideSectionArticle)`
    background-color: rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const ArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 24px;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    ${OverTheSheet}
`;

const ArticleHomeIcon = styled(ArticleIcon)`
    color: red;
`;

const ArticleItem = styled.span`
    width: 144px;
    height: 18px;
    color: inherit;
    font-size: 14px;
    line-height: 18px;
    ${OverTheSheet}
`;

const GuideFooter = styled.footer`
    width: 192px;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    ${OverTheSheet}
`;

const FooterSpan = styled.span`
    width: 192px;
    height: 15px;
    color: #909090;
    ${OverTheSheet}
`;

const sectionItems = {
    firstSection: [
        [<i class="fas fa-home"></i>, '홈', 'HOME'],
        [<i class="fas fa-fire-alt"></i>, '인기'],
        [<i class="fas fa-envelope-open-text"></i>, '구독']
    ],
    secondSection: [
        [<i class="fas fa-archive"></i>, '보관함'],
        [<i class="fas fa-history"></i>, '시청 기록']
    ],
    thirdSection: [
        [<i class="fas fa-music"></i>, '음악'],
        [<i class="fas fa-futbol"></i>, '스포츠'],
        [<i class="fas fa-film"></i>, '영화'],
        [<i class="far fa-newspaper"></i>, '뉴스'],
        [<i class="fas fa-broadcast-tower"></i>, '실시간'],
        [<i class="far fa-lightbulb"></i>, '학습'],
        [<i class="fas fa-mask"></i>, '360º 동영상']
    ],
    fourthSection: [
        [<i class="fas fa-plus-circle"></i>, '채널 탐색']
    ],
    fifthSection: [
        [<i class="fab fa-blogger"></i>, '블로그', 'BLOG'],
        [<i class="fab fa-github"></i>, '깃허브', 'GITHUB']
    ],
    sixthSection: [
        [<i class="fas fa-cog"></i>, '설정'],
        [<i class="fas fa-flag"></i>, '신고 기록'],
        [<i class="fas fa-question-circle"></i>, '고객 센터'],
        [<i class="fas fa-exclamation"></i>, '의견 보내기']
    ]
};

function makeArticle(item) {
    if (item.length > 2) {
        return (
            <GuideSectionHomeArticle>
                <ArticleHomeIcon>
                    {item[0]}
                </ArticleHomeIcon>
                <ArticleItem>
                    {item[1]}
                </ArticleItem>
            </GuideSectionHomeArticle>
        )
    } else {
        return (
            <GuideSectionArticle>
                <ArticleIcon>
                    {item[0]}
                </ArticleIcon>
                <ArticleItem>
                    {item[1]}
                </ArticleItem>
            </GuideSectionArticle>
        )
    }
}

export default class extends React.Component {
    render() {
        const { guideIsON, toggleGuide } = this.props;
        const blog = sectionItems.fifthSection[0];
        const github = sectionItems.fifthSection[1];
        const year = new Date().getFullYear();
        return (
            <GuideWrapper guideIsON={guideIsON}>
                <GuideBlackSheet
                    guideIsON={guideIsON}
                    onClick={toggleGuide}
                ></GuideBlackSheet>
                <GuideLogoWrapper>
                    <Logo
                        toggleGuide={toggleGuide}
                    ></Logo>
                </GuideLogoWrapper>
                <SectionWrapper>
                    <GuideSection>
                        {sectionItems.firstSection.map(item => makeArticle(item))}
                    </GuideSection>
                    <GuideSection>
                        {sectionItems.secondSection.map(item => makeArticle(item))}
                    </GuideSection>
                    <GuideSection>
                        <GuideSectionHeader>인기 YANGTUBE</GuideSectionHeader>
                        {sectionItems.thirdSection.map(item => makeArticle(item))}
                    </GuideSection>
                    <GuideSection>
                        {sectionItems.fourthSection.map(item => makeArticle(item))}
                    </GuideSection>
                    <GuideSection>
                        <GuideSectionHeader>YANG TAEHWAN 더보기</GuideSectionHeader>
                        {makeArticle(blog)}
                        {makeArticle(github)}
                    </GuideSection>
                    <GuideSection>
                        {sectionItems.sixthSection.map(item => makeArticle(item))}
                    </GuideSection>
                    <GuideFooter>
                        <FooterSpan>© {year} YangTube</FooterSpan>
                        <FooterSpan>Made by Taehwan Yang</FooterSpan>
                        <FooterSpan>taehwan920@gmail.com</FooterSpan>
                    </GuideFooter>
                </SectionWrapper>
            </GuideWrapper>
        )
    }
}