import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Mixin';



const GuideWrapper = styled.aside`
    background-color: rgba(150, 150, 200, 0.5);
    background-color: white;
    width: 240px;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 351;
`;

const GuideBlackSheet = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 349;
`;

const GuideLogoWrapper = styled.header`
    width:240px;
    height: 57px;
    padding-right: 36px;
    padding-bottom: 1px;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const GuideSection = styled.section`
    width: 240px;
    padding: 12px 0px;
`;

const GuideSection__Article = styled.article`
    width: 240px;
    height: 40px;
    padding: 0px 24px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const GuideSection__HomeArticle = styled(GuideSection__Article)`
    background-color: rgba(0, 0, 0, 0.1);
`;

const Article__Icon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 24px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 17px;
    text-align: center;
    line-height: 24px;
`;

const Article__HomeIcon = styled(Article__Icon)`
    color: red;
`;

const Article__Item = styled.span`
    width: 144px;
    height: 18px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    line-height: 18px;
`;

const SectionItems = {
    firstSection: [
        [<GuideSection__HomeArticle><Article__HomeIcon><i class="fas fa-home"></i></Article__HomeIcon><Article__Item>홈</Article__Item></GuideSection__HomeArticle>],
        [<GuideSection__Article><Article__Icon><i class="fas fa-fire-alt"></i></Article__Icon><Article__Item>인기</Article__Item></GuideSection__Article>],
        [<GuideSection__Article><Article__Icon><i class="fas fa-envelope-open-text"></i></Article__Icon><Article__Item>구독</Article__Item></GuideSection__Article>]
    ],
    secondSection: [

    ],
    thirdSection: [

    ],
    fourthSection: [

    ],
    fifthSection: [

    ],
    sixthSection: [

    ]
};

export default class extends React.Component {
    render() {
        return (
            <GuideWrapper>
                {/* <GuideBlackSheet></GuideBlackSheet> */}
                <GuideLogoWrapper>
                    <Logo></Logo>
                </GuideLogoWrapper>
                <GuideSection>
                    {SectionItems.firstSection.map(item => {
                        return (
                            item
                        )
                    })}
                </GuideSection>
                <section></section>
                <section>
                    <span>인기 YOUTUBE</span>
                </section>
                <section></section>
                <section>
                    <span>YOUTUBE 더보기</span>
                </section>
                <footer>
                    <span></span>
                    <span></span>
                    <span></span>
                </footer>
            </GuideWrapper>
        )
    }
}