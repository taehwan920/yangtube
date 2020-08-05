import React from 'react';
import styled from 'styled-components';
import SubsBtns from './uploader/SubsBtns';
import { parseNum } from '../../../../../../../Mixin';

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
    color: ${props => props.themeColor.normalFont};
    cursor: pointer;
`;

const SubscribersNum = styled.span`
    color: ${props => props.themeColor.grayFont};
    font-size: 13px;
`;

export default class extends React.Component {

    render() {
        const {
            lang,
            langState,
            contentData,
            themeColor,
        } = this.props;
        const subsNum = parseNum(contentData.subscribers, langState);
        return (
            <UploaderWrapper>
                <UploaderImgBox>
                    <UploaderImg
                        src={contentData.uploaderIcon}
                        alt="YangTuber"
                        draggable="true"
                    />
                </UploaderImgBox>
                <InfoAndBtnContainer>
                    <UploaderInfoWrapper>
                        <UploaderName
                            themeColor={themeColor}
                        >
                            {contentData.uploader}
                        </UploaderName>
                        <SubscribersNum
                            themeColor={themeColor}
                        >
                            {lang.desc.subscribe}{subsNum}{lang.desc.subsMeasure}
                        </SubscribersNum>
                    </UploaderInfoWrapper>
                    <SubsBtns
                        themeColor={themeColor}
                        lang={lang}
                    />
                </InfoAndBtnContainer>
            </UploaderWrapper>
        )
    }
}