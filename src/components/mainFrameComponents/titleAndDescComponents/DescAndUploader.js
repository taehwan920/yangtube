import React from 'react';
import styled, { css } from 'styled-components';
import SubscribeNoteBtn from './SubscribeNoteBtn';

const DescAndUploaderWrapper = styled.section`
    width: 100%;
    height: calc(${props => props.realHeight || '0'}px + 182px);
    padding-bottom: 16px;
    margin-botton: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const UploaderWrapper = styled.article`
    width: 100%;
    height: 67px;
    padding-top: 16px;
    margin-bottom: 12px;
    display: flex;
    item-align: center;
`;

const UploaderImgBox = styled.div`
    width: 64px;
    height: 51px;
    cursor: pointer;
`;

const UploaderImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;

const UploaderInfoWrapper = styled.div`
    width: 89%;
    height: 51px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const UploaderName = styled.span`
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
`;

const SubscribersNum = styled.span`
    color: rgba(0, 0, 0, 0.7);
    font-size: 13px;
`;

const SubsBtnWrapper = styled.div`
    width: auto;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubsBtn = styled.div`
    background-color: ${props => props.subscribed ? '#ECECEC' : '#CC0000'};
    width: auto;
    height: 39px;
    margin: 0px 4px;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SubsBtnTxt = styled.span`
    width: ${props => props.subscribed ? '3.2em' : '2.8em'};
    color: ${props => props.subscribed ? 'black' : 'white'};
    text-align: center;
    font-size: 14px;
`;

const DesciptionWrapper = styled.article`
    width: calc(100% - 64px);
    height: calc(${props => props.realHeight || '0'}px + 89px);
    margin-left: 64px;
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 14px;
`;

const DescRealHeight = styled.span`
    width: auto;
    height: auto;
    white-space: pre-line;
    position: absolute;
    opacity: 0;
    z-index: -100;
`;

const DescTextWrapper = styled.span`
    white-space: pre-line;

    ${props => !props.realHeight && css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: '';
    `}
    `;

const ShowMoreBtn = styled.span`
    width: max-content;
    height: 21px;
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 13px;
    cursor: pointer;
`;

const descItems = {
    name: 'YangTuber',
    subsNum: '24만',
    subscriber: ['구독자 ', '명'],
    subBtn: ['구독', '구독중'],
    description:
        `동해물과 백두산이 마르고 닳도록
    하느님이 보우하사 우리나라 만세
    무궁화 삼천리 화려강산
    대한 사람 대한으로 길이 보전하세
    
    남산 위에 저 소나무 철갑을 두른 듯
    바람 서리 불변함은 우리 기상일세
    무궁화 삼천리 화려강산
    대한 사람 대한으로 길이 보전하세`,
    showMore: '더 보기'
};

export default class extends React.Component {
    state = {
        subscribed: false
    }
    render() {
        const { realHeight, showMore, showMoreFunc } = this.props;
        const { subscribed } = this.state;
        const numberOfLine = descItems.description.split('\n').length;
        return (
            <DescAndUploaderWrapper realHeight={realHeight}>
                <UploaderWrapper>
                    <UploaderImgBox>
                        <UploaderImg alt="YangTuber" src="./images/sheep_profile.png" draggable="true" />
                    </UploaderImgBox>
                    <UploaderInfoWrapper>
                        <UploaderName>{descItems.name}</UploaderName>
                        <SubscribersNum>
                            {descItems.subscriber[0]}{descItems.subsNum}{descItems.subscriber[1]}
                        </SubscribersNum>
                    </UploaderInfoWrapper>
                    <SubsBtnWrapper>
                        <SubsBtn
                            subscribed={subscribed}
                            onClick={() => this.setState({ subscribed: !this.state.subscribed })}>
                            <SubsBtnTxt subscribed={subscribed}>
                                {subscribed
                                    ? descItems.subBtn[1]
                                    : descItems.subBtn[0]}
                            </SubsBtnTxt>
                        </SubsBtn>
                        {subscribed
                            ? <SubscribeNoteBtn></SubscribeNoteBtn>
                            : null}
                    </SubsBtnWrapper>
                </UploaderWrapper>
                <DesciptionWrapper>
                    <DescRealHeight className="real-height">
                        {descItems.description}
                    </DescRealHeight>
                    <DescTextWrapper realHeight={realHeight}>
                        {descItems.description}
                    </DescTextWrapper>
                    {numberOfLine <= 3
                        ? null
                        : <ShowMoreBtn realHeight={realHeight} onClick={showMoreFunc}>
                            {showMore ? '간략히' : '더보기'}
                        </ShowMoreBtn>}
                </DesciptionWrapper>
            </DescAndUploaderWrapper >
        )
    }
}