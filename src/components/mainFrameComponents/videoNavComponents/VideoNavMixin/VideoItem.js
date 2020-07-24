import React from 'react';
import styled from 'styled-components';

const NextVideoItemWrapper = styled.article`
    background-color: inherit;
    width: 100%;
    height: 94px;
    margin-bottom: 8px;
    display: flex;
`;

const NextVideoThumbnail = styled.div`
    background: gray;
    width: 168px;
    height: 94px;
    position: relative;
    margin-right: 8px;
`;

const NextVideoInfoBox = styled.div`
    width: 226px;
    height: 94px;
    display: flex;
    flex-direction: column;
`;

const InfoContent = styled.span`
    width: 100%;
    height: max-content;
`;

const InfoTitle = styled(InfoContent)`
    font-size: 14px;
    margin-bottom: 4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: '';
`;

const InfoUploader = styled(InfoContent)`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
`;

const InfoNumberBox = styled(InfoContent)`
    display: flex;
    align-items: center;
`;

const InfoNumberContent = styled.span`
    width: max-content;
    height: 18px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
`;

const InfoViewNums = styled(InfoNumberContent)``;

const InfoDot = styled(InfoNumberContent)`
    margin: 0px 4px;
`;

const InfoTimestamp = styled(InfoNumberContent)``;

export default class extends React.Component {
    render() {
        return (
            <NextVideoItemWrapper>
                <NextVideoThumbnail></NextVideoThumbnail>
                <NextVideoInfoBox>
                    <InfoTitle>제목2</InfoTitle>
                    <InfoUploader>YangTuber</InfoUploader>
                    <InfoNumberBox>
                        <InfoViewNums>조회수 65만회</InfoViewNums>
                        <InfoDot>·</InfoDot>
                        <InfoTimestamp>3주 전</InfoTimestamp>
                    </InfoNumberBox>
                </NextVideoInfoBox>
            </NextVideoItemWrapper>
        )
    }
};