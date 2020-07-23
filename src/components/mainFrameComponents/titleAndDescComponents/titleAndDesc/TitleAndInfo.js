import React from 'react';
import styled from 'styled-components';
import LikeAndDislike from './titleAndInfo/LikeAndDislike';
import More from './titleAndInfo/More';

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

const ViewsSpan = styled.span`
`;

const TitleInfoDot = styled.span`
    margin: 0px 4px;
    @media (max-width: 565px){
        display: none;
    }
`;

const DateSpan = styled.span`
    @media (max-width: 565px){
        display: none;
    }
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

export const TitleFunctionsItems = styled.div`
    height: 40px;
    display: flex;
    margin-right: 6px;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
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

export const EllipsisIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    margin-left: 8px;
`;

export const TitleFunctionsTexts = styled.span`
    height: 16px;
    font-size: 13px;
    line-height: 16px;
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
    viewsAndDate: ['조회수', '168,472회', '·', '2020. 7. 19.'],
    pictograms: {
        like: [<i class="fas fa-thumbs-up"></i>, 4327, '천'],
        dislike: [<i class="fas fa-thumbs-up"></i>, 1364, '천'],
        share: ['공유'],
        save: ['저장'],
    }
};

export default class extends React.Component {
    render() {
        return (
            <TitleAndInfo>
                <ViewsAndDateWrapper>
                    <ViewsSpan>
                        조회수 16만회
                    </ViewsSpan>
                    <TitleInfoDot>
                        ·
                    </TitleInfoDot>
                    <DateSpan>
                        2020. 7. 19.
                    </DateSpan>
                </ViewsAndDateWrapper>
                <TitleFunctionsWrapper>
                    <LikeAndDislike></LikeAndDislike>
                    <TitleFunctionsItems>
                        <TitleFunctionsIcons>
                            <i class="fas fa-share"></i>
                        </TitleFunctionsIcons>
                        <TitleFunctionsTexts>
                            {titleItems.pictograms.share[0]}
                        </TitleFunctionsTexts>
                    </TitleFunctionsItems>
                    <TitleFunctionsItems>
                        <TitleFunctionsIcons>
                            <i class="fas fa-folder-plus"></i>
                        </TitleFunctionsIcons>
                        <TitleFunctionsTexts>
                            {titleItems.pictograms.save[0]}
                        </TitleFunctionsTexts>
                    </TitleFunctionsItems>
                    <More></More>
                </TitleFunctionsWrapper>
            </TitleAndInfo>
        )
    }
}