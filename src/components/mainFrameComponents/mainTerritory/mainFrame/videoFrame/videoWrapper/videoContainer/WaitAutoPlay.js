import React from 'react';
import styled from 'styled-components';
import CircleIcon from './waitAutoPlay/CircleIcon';
import AutoPlayPaused from './waitAutoPlay/AutoPlayPaused';
import Cancel from './waitAutoPlay/Cancel';
import { debounce } from '../../../../../../Mixin';

const WatingWrapper = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const NextTxt = styled.span`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 8px;

    @media (max-width: 849px) {
        font-size: 12px;
        margin-bottom: 0px;
    }
`;

const NextTitle = styled.span`
    font-size: 24px;
    color: white;
    margin-bottom: 4px;

    @media (max-width: 849px) {
        font-size: 18px;
    }
`;

const NextUploader = styled.span`
    font-size: 16px;
    color: white;

    @media (max-width: 849px) {
        font-size: 14px;
    }
`;

export default class extends React.Component {
    state = {
        canceledByScroll: false,
        waitCanceled: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', debounce(this.checkSlide));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', debounce(this.checkSlide));
    };

    checkSlide = () => {
        const videoFrame = document.querySelector('.video-frame');
        if (!videoFrame) return;
        const HeaderHeight = 56;
        const VFTopPos = videoFrame.offsetTop + HeaderHeight;
        const VFHeight = videoFrame.clientHeight;
        const cancelBorderLine = VFTopPos + (VFHeight * 0.25);

        const isCrossingCancelLine = window.scrollY > cancelBorderLine;
        if (isCrossingCancelLine) {
            this.setState({ canceledByScroll: true });
        } else {
            this.setState({ canceledByScroll: false });
        }
    };

    render() {
        const {
            activateRecommend,
            contentData,
            lang,
        } = this.props;
        const {
            canceledByScroll,
        } = this.state;
        const {
            nextThumb,
            nextTitle,
            uploader,
        } = contentData;
        return (
            <WatingWrapper>
                <InterfaceBox>
                    <NextTxt>
                        {lang.videoFrame.waitAutoPlay.nextVideo}
                    </NextTxt>
                    <NextTitle>
                        {nextTitle}
                    </NextTitle>
                    <NextUploader>
                        {uploader}
                    </NextUploader>
                    <CircleIcon
                        canceledByScroll={canceledByScroll}
                        contentData={contentData}
                    />
                    <Cancel
                        activateRecommend={activateRecommend}
                        lang={lang}
                    />
                    {canceledByScroll
                        ? <AutoPlayPaused
                            canceledByScroll={canceledByScroll}
                            lang={lang}
                        />
                        : null}
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