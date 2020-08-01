import React from 'react';
import styled from 'styled-components';

const WatingWrapper = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 150;
`;

const NextThumbBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const ThumbImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.6;
`;

const InterfaceBox = styled.section`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 151;
`;

const NextTxt = styled.span`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
`;

const NextTitle = styled.span`
    font-size: 24px;
    color: white;
    margin-bottom: 4px;
`;

const NextUploader = styled.span`
    font-size: 16px;
    color: white;
`;

const NextBtnBox = styled.div`
    width: 64px;
    height: 64px;
    margin: 40px 0px;
`;

const CancelBox = styled.div`
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
`;

const AutoPlayStoppedBox = styled.div`
    font-size: 14px;
    font-style: italic;
    color: white;
`;

export default class extends React.Component {
    render() {
        const {
            contentData
        } = this.props;
        const {
            nextThumb,
            title,
            uploader,
        } = contentData;
        return (
            <WatingWrapper>
                <InterfaceBox>
                    <NextTxt>
                        다음 동영상
                    </NextTxt>
                    <NextTitle>
                        {title}
                    </NextTitle>
                    <NextUploader>
                        {uploader}
                    </NextUploader>
                    <NextBtnBox>

                    </NextBtnBox>
                    <CancelBox>
                        취소
                    </CancelBox>
                    <AutoPlayStoppedBox>
                        자동재생 일시중지됨
                    </AutoPlayStoppedBox>
                </InterfaceBox>
                <NextThumbBox>
                    <ThumbImg
                        src={nextThumb}
                    />
                </NextThumbBox>
            </WatingWrapper>
        )
    }
};