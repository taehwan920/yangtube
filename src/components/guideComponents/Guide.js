import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../mixin/Logo';

const OverTheSheet = css`
    z-index: 351;
`;

const GuideWrapper = styled.aside`
    background-color: ${props => props.themeColor.guide.BG};
    width: 240px;
    position: absolute;
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.7);
    transition: left 0.18s ease-out;
    top: 0;
    left: ${props => props.guideIsON ? '0px' : '-240px'};
`;

const GuideBlackSheet = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 150vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    opacity: ${props => props.guideIsON ? '1' : '0'};
    z-index: ${props => props.guideIsON ? 349 : -349};
    display: ${props => props.guideIsON ? 'flex' : 'none'};
`;

const GuideLogoWrapper = styled.header`
    background: inherit;
    width: 240px;
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
    background: inherit;
    width: 240px;
    height: calc(100vh - 56px);
    overflow-y: scroll;
    position: relative;
    left: 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${props => props.themeColor.grayFont};
    ${OverTheSheet}
`;

const GuideSection = styled.section`
    width: 240px;
    padding: 12px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    color: inherit;
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
        background-color: ${props => props.nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        cursor: pointer;
    }
`;

const GuideSectionLink = styled.a`
    background-color: ${props => props.nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    width: 240px;
    height: 40px;
    padding: 0px 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    ${OverTheSheet}

    &:hover {
        background-color: ${props => props.nightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
    }
`;

const ArticleIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 24px;
    color: ${props => props.themeColor.guide.pictogramColor};
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
    color: ${props => props.themeColor.normalFont};
    font-size: 14px;
    line-height: 18px;
    ${OverTheSheet}
`;

const GuideFooter = styled.footer`
    width: 192px;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    color: ${props => props.themeColor.guide.footerFont};
    font-size: 13px;
    ${OverTheSheet}
`;

const FooterSpan = styled.span`
    width: 192px;
    height: 15px;
    ${OverTheSheet}
`;

export default class extends React.Component {
    sectionItems = {
        firstSection: [
            [<i class="fas fa-home"></i>, '홈', '#/home'],
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
            [<i class="fab fa-blogger"></i>, '블로그', 'https://hitzi.tistory.com/'],
            [<i class="fab fa-github"></i>, '깃허브', 'https://github.com/taehwan920/yangtube']
        ],
        sixthSection: [
            [<i class="fas fa-cog"></i>, '설정'],
            [<i class="fas fa-flag"></i>, '신고 기록'],
            [<i class="fas fa-question-circle"></i>, '고객 센터'],
            [<i class="fas fa-exclamation"></i>, '의견 보내기']
        ]
    }

    makeArticle(item) {
        const {
            nightMode,
            themeColor
        } = this.props;
        if (item.length > 2) {
            if (item[1] === '홈') {
                return (
                    <GuideSectionLink
                        nightMode={nightMode}
                        href="#"
                        rel="noreferrer noopener"
                    >
                        <ArticleHomeIcon
                            themeColor={themeColor}
                        >
                            {item[0]}
                        </ArticleHomeIcon>
                        <ArticleItem
                            themeColor={themeColor}
                        >
                            {item[1]}
                        </ArticleItem>
                    </GuideSectionLink>
                )
            }
            return (
                <GuideSectionLink
                    nightMode={nightMode}
                    href={item[2]}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <ArticleHomeIcon
                        themeColor={themeColor}
                    >
                        {item[0]}
                    </ArticleHomeIcon>
                    <ArticleItem
                        themeColor={themeColor}
                    >
                        {item[1]}
                    </ArticleItem>
                </GuideSectionLink>
            )
        } else {
            return (
                <GuideSectionArticle
                    nightMode={nightMode}
                >
                    <ArticleIcon
                        themeColor={themeColor}
                    >
                        {item[0]}
                    </ArticleIcon>
                    <ArticleItem
                        themeColor={themeColor}
                    >
                        {item[1]}
                    </ArticleItem>
                </GuideSectionArticle>
            )
        }
    };

    render() {
        const {
            nightMode,
            guideIsON,
            toggleGuide,
            themeColor
        } = this.props;
        const {
            sectionItems
        } = this;
        const blog = sectionItems.fifthSection[0];
        const github = sectionItems.fifthSection[1];
        const year = new Date().getFullYear();
        return (
            <GuideWrapper
                guideIsON={guideIsON}
                themeColor={themeColor}
            >
                <GuideBlackSheet
                    guideIsON={guideIsON}
                    onClick={toggleGuide}
                />
                <GuideLogoWrapper>
                    <Logo
                        nightMode={nightMode}
                        themeColor={themeColor}
                        toggleGuide={toggleGuide}
                    />
                </GuideLogoWrapper>
                <SectionWrapper
                    themeColor={themeColor}
                >
                    <GuideSection
                        themeColor={themeColor}
                    >
                        {sectionItems.firstSection.map(item => this.makeArticle(item))}
                    </GuideSection>
                    <GuideSection
                        themeColor={themeColor}
                    >
                        {sectionItems.secondSection.map(item => this.makeArticle(item))}
                    </GuideSection>
                    <GuideSection
                        themeColor={themeColor}
                    >
                        <GuideSectionHeader
                            themeColor={themeColor}
                        >
                            인기 YANGTUBE
                            </GuideSectionHeader>
                        {sectionItems.thirdSection.map(item => this.makeArticle(item))}
                    </GuideSection>
                    <GuideSection
                        themeColor={themeColor}
                    >
                        {sectionItems.fourthSection.map(item => this.makeArticle(item))}
                    </GuideSection>
                    <GuideSection
                        themeColor={themeColor}
                    >
                        <GuideSectionHeader
                            themeColor={themeColor}
                        >
                            YANG TAEHWAN 더보기
                            </GuideSectionHeader>
                        {this.makeArticle(blog)}
                        {this.makeArticle(github)}
                    </GuideSection>
                    <GuideSection
                        themeColor={themeColor}
                    >
                        {sectionItems.sixthSection.map(item => this.makeArticle(item))}
                    </GuideSection>
                    <GuideFooter
                        themeColor={themeColor}
                    >
                        <FooterSpan>© {year} YangTube</FooterSpan>
                        <FooterSpan>Made by Taehwan Yang</FooterSpan>
                        <FooterSpan>taehwan920@gmail.com</FooterSpan>
                    </GuideFooter>
                </SectionWrapper>
            </GuideWrapper>
        )
    }
}