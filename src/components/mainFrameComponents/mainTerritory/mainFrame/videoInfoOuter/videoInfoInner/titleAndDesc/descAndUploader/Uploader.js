import React from 'react';
import styled from 'styled-components';
import { descItems } from '../DescAndUploader';
import SubsBtns from './uploader/SubsBtns';

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

const InfoAndBtnContainer = styled.div`
    width: calc(100% - 64px);
    height: 51px;
    display: flex;
    justify-content: space-between;
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

export default class extends React.Component {

    render() {
        const {
            parseNum,
            contentData
        } = this.props;
        return (
            <UploaderWrapper>
                <UploaderImgBox>
                    <UploaderImg
                        src={contentData.uploaderIcon}
                        alt="YangTuber"
                        draggable="true" />
                </UploaderImgBox>
                <InfoAndBtnContainer>
                    <UploaderInfoWrapper>
                        <UploaderName>
                            {contentData.uploader}
                        </UploaderName>
                        <SubscribersNum>
                            구독 {parseNum(contentData.subscribers, 'kr')}명
                        </SubscribersNum>
                    </UploaderInfoWrapper>
                    <SubsBtns />
                </InfoAndBtnContainer>
            </UploaderWrapper>
        )
    }
}