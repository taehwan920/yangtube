import React from 'react';
import styled from 'styled-components';
import LikeAndDislike from './LikeAndDislike';

const TitleAndInfo = styled.div`
    background: white;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #909090;
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

export const LikeAndDislikeBox = styled.div`
    height: 36px;
    margin-right: 10px;
    padding-left: 4px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LikeRateChartBox = styled.div`
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -11px;
    display: flex;
`;

export const LikeRate = styled.div`
    background-color: ${props => (props.liked || props.disliked) ? '#065FD4' : '#909090'};
    width: ${props => props.likeRate || '100'}%;
    height: 2px;
`;

export const DislikeRate = styled.div`
    background: rgba(0, 0, 0, 0.1);
    width: ${props => props.dislikeRate || '0'}%;
    height: 2px;
`;

const TitleFunctionsItems = styled.div`
    height: 40px;
    display: flex;
    margin-right: 8px;
    position: relative;
    justify-content: space-around;
    align-item: center;
    line-height: 42px;
    cursor: pointer;
`;

export const LikeBox = styled(TitleFunctionsItems)`
    color: ${props => props.liked ? '#065FD4' : '#909090'};
`;

export const DislikeBox = styled(TitleFunctionsItems)`
    color: ${props => props.disliked ? '#065FD4' : '#909090'};
`;

const TitleFunctionsIcons = styled.span`
    width: 36px;
    height: 36px;
    padding: 8px;
    font-size: 16px;
    line-height: 24px;
`;

export const LikeIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    line-height: 0px;
    position: relative;
`;

export const DislikeIcon = styled(TitleFunctionsIcons)`
    transform: rotateZ(180deg);
    font-size: 18px;
    line-height: 0px;
    padding-bottom: 30px;
    margin-right: 4px;
    position: relative;
`;

const EllipsisIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    margin-left: 8px;
`;

export const TitleFunctionsTexts = styled.span`
    height: 16px;
    font-size: 13px;
`;

export const TitleInfoClickEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 8px;
    left: 13px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export const titleItems = {
    title: '제목',
    viewsAndDate: ['조회수', '168,472회', '· 2020. 7. 19.'],
    pictograms: {
        like: [<i class="fas fa-thumbs-up"></i>, 4327, '천'],
        dislike: [<i class="fas fa-thumbs-up"></i>, 1364, '천'],
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
    };
    render() {
        return (
            <TitleAndInfo>
                <ViewsAndDateWrapper>
                    {titleItems.viewsAndDate.map(item => this.buildItems(item))}
                </ViewsAndDateWrapper>
                <TitleFunctionsWrapper>
                    <LikeAndDislike></LikeAndDislike>
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
                        <TitleInfoClickEffect></TitleInfoClickEffect>
                    </TitleFunctionsItems>
                </TitleFunctionsWrapper>
            </TitleAndInfo>
        )
    }
}