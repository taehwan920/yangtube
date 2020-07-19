import React from 'react';
import styled from 'styled-components';
import TitleInfo from './descriptionComponents/TitleInfo';

const TitleAndDesc = styled.section`
    background-color: white;
    width: 100%;
    height: 293px;
`;

const TitleWrapper = styled.article`
    width: 100%;
    height: 93px;
    padding-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
    background: white;
    width: 100%;
    height: 24px;
    font-size: 18px;
`;

const DescriptionWrapper = styled.section`
    width: 100%;
    height: 200px;
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
    width: 100%;
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

const SubsBtnContainer = styled.div`
    width: auto;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubsBtn = styled.div`
    background: #CC0000;
    width: auto;
    height: 39px;
    margin: 0px 4px;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubsBtnTxt = styled.span`
    width: 2.8em;
    color: white;
    text-align: center;
    font-size: 14px;
`;

const titleItem = '제목'

const descItems = {
    name: 'YangTuber',
    subsNum: '248,932',
    subscriber: ['구독자 ', '명'],
    subBtn: '구독'
};

export default class extends React.Component {
    state = {
        showMore: false
    }
    render() {
        return (
            <TitleAndDesc>
                <TitleWrapper>
                    <Title>{titleItem}</Title>
                    <TitleInfo></TitleInfo>
                </TitleWrapper>
                <DescriptionWrapper>
                    <UploaderWrapper>
                        <UploaderImgBox>
                            <UploaderImg alt="YangTuber" src="./images/sheep_profile.png" />
                        </UploaderImgBox>
                        <UploaderInfoWrapper>
                            <UploaderName>{descItems.name}</UploaderName>
                            <SubscribersNum>{descItems.subscriber[0]}{descItems.subsNum}{descItems.subscriber[1]}</SubscribersNum>
                        </UploaderInfoWrapper>
                        <SubsBtnContainer>
                            <SubsBtn>
                                <SubsBtnTxt>{descItems.subBtn}</SubsBtnTxt>
                            </SubsBtn>
                        </SubsBtnContainer>
                    </UploaderWrapper>
                    <article>desc</article>
                </DescriptionWrapper>
            </TitleAndDesc>
        )
    }
}