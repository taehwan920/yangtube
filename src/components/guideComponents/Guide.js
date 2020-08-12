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
    border-bottom: 1px solid ${props => props.themeColor.guide.border};
    ${OverTheSheet}
`;

const SectionWrapper = styled.div`
    background: inherit;
    width: 240px;
    height: calc(100vh - 56px);
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    left: 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${props => props.themeColor.grayFont};
    ${OverTheSheet}
    &::-webkit-scrollbar {
        width: 8px;
        display: none;
    }
    &:hover{
        &::-webkit-scrollbar {
            display: block;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: ${props => props.themeColor.guide.pictogramColor};
        }
        
    }
`;

const GuideSection = styled.section`
    width: 240px;
    padding: 12px 0px;
    border-bottom: 1px solid ${props => props.themeColor.guide.border};
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
    guideItems = this.props.lang.guide;
    sectionItems = {
        firstSection: [
            [<i class="fas fa-home"></i>, this.guideItems.home, '#/'],
            [<i class="fas fa-fire-alt"></i>, this.guideItems.trending],
            [<i class="fas fa-envelope-open-text"></i>, this.guideItems.subscription]
        ],
        secondSection: [
            [<i class="fas fa-archive"></i>, this.guideItems.library],
            [<i class="fas fa-history"></i>, this.guideItems.history]
        ],
        thirdSection: [
            [<i class="fas fa-music"></i>, this.guideItems.music],
            [<i class="fas fa-futbol"></i>, this.guideItems.sports],
            [<i class="fas fa-film"></i>, this.guideItems.movies],
            [<i class="far fa-newspaper"></i>, this.guideItems.news],
            [<i class="fas fa-broadcast-tower"></i>, this.guideItems.learning],
            [<i class="far fa-lightbulb"></i>, this.guideItems.learning],
            [<i class="fas fa-mask"></i>, this.guideItems.video360]
        ],
        fourthSection: [
            [<i class="fas fa-plus-circle"></i>, this.guideItems.browseCH]
        ],
        fifthSection: [
            [<i class="fas fa-blog"></i>, this.guideItems.blog, 'https://hitzi.tistory.com/'],
            [<i class="fab fa-github"></i>, this.guideItems.github, 'https://github.com/taehwan920/yangtube']
        ],
        sixthSection: [
            [<i class="fas fa-cog"></i>, this.guideItems.settings],
            [<i class="fas fa-flag"></i>, this.guideItems.report],
            [<i class="fas fa-question-circle"></i>, this.guideItems.help],
            [<i class="fas fa-exclamation"></i>, this.guideItems.feedback]
        ]
    }

    key = 0;

    makeArticle(item) {
        const {
            nightMode,
            themeColor
        } = this.props;
        this.key++
        if (item.length > 2) {
            if (item[2] === '#/') {
                return (
                    <GuideSectionLink
                        nightMode={nightMode}
                        href="#/"
                        rel="noreferrer noopener"
                        key={this.key}
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
                    key={this.key}
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
                    key={this.key}
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
            lang,
            langState,
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
                <GuideLogoWrapper
                    themeColor={themeColor}
                >
                    <Logo
                        langState={langState}
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
                            {lang.guide.best}
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