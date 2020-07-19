import React from 'react';
import styled from 'styled-components';

const TitleInfo = styled.article`
    background: white;
    width: 100%;
    height: 40px;
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
    justify-content: space-around;
    align-items: center;
`;

const LikeAndDislikeBox = styled.div`
    height: 36px;
    margin-right: 10px;
    padding-left: 4px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LikeRateChartBox = styled.div`
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -11px;
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
    margin-right: 8px;
    justify-content: space-around;
    align-item: center;
    line-height: 42px;
    cursor: pointer;
`;

const TitleFunctionsIcons = styled.span`
    width: 36px;
    height: 36px;
    padding: 8px;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
`;

const LikeIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    line-height: 0px;
`;

const DislikeIcon = styled(TitleFunctionsIcons)`
    transform: rotateZ(180deg);
    font-size: 18px;
    line-height: 0px;
    padding-bottom: 30px;
    margin-right: 4px;
`;

const EllipsisIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    margin-left: 8px;
`;

const TitleFunctionsTexts = styled.span`
    height: 16px;
    font-size: 13px;
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
            <TitleInfo>
                <ViewsAndDateWrapper>
                    {titleItems.viewsAndDate.map(item => this.buildItems(item))}
                </ViewsAndDateWrapper>
                <TitleFunctionsWrapper>
                    <LikeAndDislikeBox>
                        <TitleFunctionsItems>
                            <LikeIcon>
                                {titleItems.pictograms.like[0]}
                            </LikeIcon>
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
                        <EllipsisIcon>
                            {titleItems.pictograms.more[0]}
                        </EllipsisIcon>
                    </TitleFunctionsItems>
                </TitleFunctionsWrapper>
            </TitleInfo>
        )
    }
}