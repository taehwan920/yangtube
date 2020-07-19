import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.section`
    background-color: beige;
    width: 100%;
    height: 293px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.article`
    background: white;
    width: 100%;
    height: 64px;
    padding-top: 20px;
    font-size: 18px;
`;

const TitleInfo = styled.article`
    background: white;
    width: 100%;
    height: 40px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
`;
const ViewsAndDateWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ViewsAndDateSpan = styled.span`
    margin-right: 3px;
`;

const TitleFunctionsWrapper = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const LikeAndDislikeBox = styled.div`
    height: 36px;
    margin-right: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LikeRateChartBox = styled.div`
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -8px;
`;

const LikeRate = styled.div`
    background: ${props => props.clicked ? '#065FD4' : 'rgba(0, 0, 0, 0.4)'};
    width: ${props => props.likeRate || '100%'};
    height: 2px;
`;

const DislikeRate = styled.div`
    background: rgba(0, 0, 0, 0.1);
    width: ${props => props.dislikeRate || '0%'};
    height: 2px;
`;

const TitleFunctionsItems = styled.div`
    height: 40px;
    display: flex;
    padding: 0px 6px;
    margin: 0px 4px;
    justify-content: flex-start;
    align-item: center;
    line-height: 38px;
    cursor: pointer;
`;

const TitleFunctionsIcons = styled.span`
    width: 24px;
    height: 24px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
`;

const DislikeIcon = styled(TitleFunctionsIcons)`
    transform: rotateZ(180deg);
    line-height: 0px;
    padding-bottom: 30px;
    margin-right: 4px;
`;

const TitleFunctionsTexts = styled.span`
    height: 16px;
    margin-left: 5px;
`;

const titleItems = {
    title: '제목',
    viewsAndDate: ['조회수', '168,472회', '· 2020. 7. 19.'],
    pictograms: {
        like: [<i class="fas fa-thumbs-up"></i>, '4.3만'],
        dislike: [<i class="fas fa-thumbs-up"></i>, '1.3천'],
        share: [<i class="fas fa-share"></i>, '공유'],
        save: [<i class="fas fa-folder-plus"></i>, '저장'],
        more: [<i class="fas fa-ellipsis-h"></i>]
    }
};


export default class extends React.Component {
    buildItems = item => {
        return (
            <ViewsAndDateSpan>
                {item}
            </ViewsAndDateSpan>
        )
    }
    render() {
        return (
            <TitleWrapper>
                <Title>제목</Title>
                <TitleInfo>
                    <ViewsAndDateWrapper>
                        {titleItems.viewsAndDate.map(item => this.buildItems(item))}
                    </ViewsAndDateWrapper>
                    <TitleFunctionsWrapper>
                        <LikeAndDislikeBox>
                            <TitleFunctionsItems>
                                <TitleFunctionsIcons>
                                    {titleItems.pictograms.like[0]}
                                </TitleFunctionsIcons>
                                <TitleFunctionsTexts>
                                    {titleItems.pictograms.like[1]}
                                </TitleFunctionsTexts>
                            </TitleFunctionsItems>
                            <TitleFunctionsItems>
                                <DislikeIcon>
                                    {titleItems.pictograms.dislike[0]}
                                </DislikeIcon>
                                <TitleFunctionsTexts>
                                    {titleItems.pictograms.dislike[1]}
                                </TitleFunctionsTexts>
                            </TitleFunctionsItems>
                            <LikeRateChartBox>
                                <LikeRate></LikeRate>
                                <DislikeRate></DislikeRate>
                            </LikeRateChartBox>
                        </LikeAndDislikeBox>
                        <TitleFunctionsItems>
                            <TitleFunctionsIcons>
                                {titleItems.pictograms.share[0]}
                            </TitleFunctionsIcons>
                            <TitleFunctionsTexts>
                                {titleItems.pictograms.share[1]}
                            </TitleFunctionsTexts>
                        </TitleFunctionsItems>
                        <TitleFunctionsItems>
                            <TitleFunctionsIcons>
                                {titleItems.pictograms.save[0]}
                            </TitleFunctionsIcons>
                            <TitleFunctionsTexts>
                                {titleItems.pictograms.save[1]}
                            </TitleFunctionsTexts>
                        </TitleFunctionsItems>
                        <TitleFunctionsItems>
                            <TitleFunctionsIcons>
                                {titleItems.pictograms.more[0]}
                            </TitleFunctionsIcons>
                        </TitleFunctionsItems>
                    </TitleFunctionsWrapper>
                </TitleInfo>
            </TitleWrapper>
        )
    }
}