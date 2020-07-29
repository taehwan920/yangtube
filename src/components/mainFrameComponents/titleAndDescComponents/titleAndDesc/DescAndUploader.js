import React from 'react';
import styled, { css } from 'styled-components';
import Uploader from './descAndUploader/Uploader';

const DescAndUploaderWrapper = styled.section`
    width: 100%;
    height: calc(${props => props.realHeight || '0'}px + 182px);
    padding-bottom: 16px;
    margin-botton: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

export const descItems = {
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
    render() {
        const {
            parseNum,
            realHeight,
            showMore,
            showMoreFunc,
            contentData
        } = this.props;
        const numberOfLine = descItems.description.split('\n').length;
        return (
            <DescAndUploaderWrapper
                realHeight={realHeight}
            >
                <Uploader
                    contentData={contentData}
                    parseNum={parseNum}
                />
                <DesciptionWrapper>
                    <DescRealHeight className="real-height">
                        {contentData.description}
                    </DescRealHeight>
                    <DescTextWrapper realHeight={realHeight}>
                        {contentData.description}
                    </DescTextWrapper>
                    {numberOfLine <= 3
                        ? null
                        : <ShowMoreBtn
                            realHeight={realHeight}
                            onClick={showMoreFunc}
                        >
                            {showMore ? '간략히' : '더보기'}
                        </ShowMoreBtn>}
                </DesciptionWrapper>
            </DescAndUploaderWrapper >
        )
    }
}