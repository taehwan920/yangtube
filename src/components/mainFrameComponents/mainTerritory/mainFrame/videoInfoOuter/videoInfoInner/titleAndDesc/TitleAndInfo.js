import React from 'react';
import styled from 'styled-components';
import LikeAndDislike from './titleAndInfo/LikeAndDislike';
import More from './titleAndInfo/More';
import ShareAndSave from './titleAndInfo/ShareAndSave';
import { addComma, debounce, parseNum } from '../../../../../../Mixin';

const TitleAndInfo = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.themeColor.grayFont};
    font-size: 14px;
`;
const ViewsAndDateWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ViewsSpan = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
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
    height: 20px;
    position: absolute;
    bottom: -29px;
    display: flex;
`;

export const LikeRate = styled.div`
    background-color: ${props => {
        if (props.liked || props.disliked) {
            return '#065FD4'
        } else {
            return props.themeColor.main.titleInfos;
        }
    }};
    width: ${props => props.likeRate || '100'}%;
    height: 2px;
`;

export const DislikeRate = styled.div`
    background: ${props => props.themeColor.main.dislikeRate};
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
    color: ${props => props.liked ? '#065FD4' : props.themeColor.main.titleInfos};
`;

export const DislikeBox = styled(TitleFunctionsItems)`
    color: ${props => props.disliked ? '#065FD4' : props.themeColor.main.titleInfos};
`;

export const TitleFunctionsIcons = styled.span`
    width: 36px;
    height: 36px;
    padding: 8px;
    color: ${props => props.themeColor.main.titleInfos};
    font-size: 18px;
    line-height: 24px;
`;

export const LikeIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    line-height: 0px;
    position: relative;
    color: ${props => props.liked ? '#065FD4' : props.themeColor.main.titleInfos};
`;

export const DislikeIcon = styled(TitleFunctionsIcons)`
    transform: rotateZ(180deg);
    font-size: 18px;
    line-height: 0px;
    padding-bottom: 30px;
    margin-right: 4px;
    position: relative;
    color: ${props => props.disliked ? '#065FD4' : props.themeColor.main.titleInfos};
`;

export const EllipsisIcon = styled(TitleFunctionsIcons)`
    font-size: 18px;
    margin-left: 8px;
`;

export const TitleFunctionsTexts = styled.span`
    height: 16px;
    color: ${props => props.themeColor.grayFont};
    font-size: 13px;
    line-height: 16px;
    white-space: nowrap;
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

export default class extends React.Component {
    state = {
        winWidth: null,
    };

    componentDidMount() {
        this.getWinWidth();
        window.addEventListener('resize', debounce(this.getWinWidth));
    };

    getWinWidth = () => {
        const winWidth = window.innerWidth;
        this.setState({ winWidth });
    };

    parseDate = (num, lang) => {
        const date = new Date(num);
        const year = date.getFullYear();
        const month = date.getMonth();
        const JPmonth = month + 1 > 10 ? month + 1 : `0${month + 1}`;
        const day = date.getDate();
        if (lang === 'KR') {
            return `${year}. ${month + 1}. ${day}`;
        } else if (lang === 'JP') {
            return `${year}/${JPmonth}/${day}`;
        } else if (lang === 'EN') {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${months[month]} ${day}, ${year}`;
        }
    };
    render() {
        const {
            contentData,
            lang,
            langState,
            themeColor,
        } = this.props;
        const {
            winWidth
        } = this.state;
        const {
            views,
            viewMeasure,
        } = lang.title;
        const viewsItem = parseNum(contentData.views, langState);
        const dateItem = this.parseDate(contentData.timestamp, langState);
        return (
            <TitleAndInfo
                themeColor={themeColor}
            >
                <ViewsAndDateWrapper>
                    <ViewsSpan>
                        {winWidth && winWidth >= 1080
                            ? `${views}${addComma(contentData.views)}${viewMeasure}`
                            : `${views}${viewsItem[0]}${viewsItem[1]}${viewMeasure}`
                        }
                    </ViewsSpan>
                    <TitleInfoDot>
                        ·
                    </TitleInfoDot>
                    <DateSpan>
                        {dateItem}
                    </DateSpan>
                </ViewsAndDateWrapper>
                <TitleFunctionsWrapper>
                    <LikeAndDislike
                        contentData={contentData}
                        lang={lang}
                        langState={langState}
                        themeColor={themeColor}
                    />
                    <ShareAndSave
                        lang={lang}
                        langState={langState}
                        themeColor={themeColor}
                    />
                    <More
                        lang={lang}
                        langState={langState}
                        themeColor={themeColor}
                    />
                </TitleFunctionsWrapper>
            </TitleAndInfo>
        )
    }
}