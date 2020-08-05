import React from 'react';
import styled, { css } from 'styled-components';
import Uploader from './descAndUploader/Uploader';

const DescAndUploaderWrapper = styled.section`
    width: 100%;
    height: calc(${props => props.realHeight || '0'}px + 182px);
    padding-bottom: 16px;
    margin-botton: 24px;
    border-bottom: 1px solid ${props => props.themeColor.main.border};
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
    color: ${props => props.themeColor.normalFont};

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
    color: ${props => props.themeColor.grayFont};
    font-size: 13px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const {
            contentData,
            lang,
            langState,
            realHeight,
            showMore,
            showMoreFunc,
            themeColor,
        } = this.props;
        const numberOfLine = contentData.description.split('\n').length;
        return (
            <DescAndUploaderWrapper
                realHeight={realHeight}
                themeColor={themeColor}
            >
                <Uploader
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    themeColor={themeColor}
                />
                <DesciptionWrapper>
                    <DescRealHeight
                        className="real-height"
                    >
                        {contentData.description}
                    </DescRealHeight>
                    <DescTextWrapper
                        realHeight={realHeight}
                        themeColor={themeColor}
                    >
                        {contentData.description}
                    </DescTextWrapper>
                    {numberOfLine <= 3
                        ? null
                        : <ShowMoreBtn
                            realHeight={realHeight}
                            onClick={showMoreFunc}
                            themeColor={themeColor}
                        >
                            {showMore
                                ? lang.desc.showLess
                                : lang.desc.showMore
                            }
                        </ShowMoreBtn>}
                </DesciptionWrapper>
            </DescAndUploaderWrapper >
        )
    }
}