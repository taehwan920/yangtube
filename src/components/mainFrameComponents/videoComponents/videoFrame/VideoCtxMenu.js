import React from 'react';
import styled from 'styled-components';

const VideoCtxMenuWrapper = styled.section`
    background: rgba(0, 0, 0, 0.75);
    width: 281px;
    height: max-content;
    padding: 10px 0px;
    display: ${props => props.videoCtxMenu ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: ${props => props.ctxPosY}px;
    left: ${props => props.ctxPosX}px;
    z-index: 71;
`;

const VideoCtxItem = styled.article`
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
        background: rgba(255, 255, 255, 0.1);
    }
`;

const VideoCtxIcon = styled.span`
    width: 36px;
    height: 36px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
`;

const VideoCtxTxtBox = styled.div`
    width: calc(100% - 44px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const VideoCtxTxt = styled.span`
    font-size: 13px;
    color: white;
`;

const CtxCheckIcon = styled.span`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    opacity: ${props => props.repeatPlay ? 1 : 0};
`;

const CtxCloser = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 24;
`;

const CtxPositioner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export default class extends React.Component {
    state = {
        ctxPosX: 0,
        ctxPosY: 0,
    }
    ctxMenuRef = React.createRef();

    componentDidMount() {
        document.addEventListener('click', this.clickOutside);
    };

    componentWillUnmount() {
        document.removeEventListener('click', this.clickOutside);
    };

    clickOutside = e => {
        e.stopPropagation();
        if (this.ctxMenuRef && !this.ctxMenuRef.current.contains(e.target)) {
            this.props.closeCtxMenu();
        }
    };

    closerClick = e => {
        e.stopPropagation();
        this.props.closeCtxMenu();
    };

    copyToClipboard = str => {
        const forClipBoard = document.querySelector('.for-clipboard');
        forClipBoard.value = str;
        forClipBoard.select();
        document.execCommand('copy');
    }

    copyUrl = () => {
        this.props.urlCopyClicked();
        this.copyToClipboard(this.getURL());
        this.props.closeCtxMenu();
    };

    copyUrlFromNow = () => {
        this.props.urlCopyClicked();
        const URLWithQueryString = `${this.getURL()}/watch?start=${this.getCurrentTime()}`;
        this.copyToClipboard(URLWithQueryString);
        this.props.closeCtxMenu();
    };

    getCtxPos = e => {
        const posX = e.nativeEvent.offsetX;
        const posY = e.nativeEvent.offsetY;
        if (this.props.videoCtxMenu) return;
        this.setState({
            ctxPosX: posX,
            ctxPosY: posY
        });
    };

    getCurrentTime = () => {
        const currentTime = this.props.videoWrapperRef.current.state.currentTime;
        return parseInt(currentTime);
    };

    getURL = () => {
        const hash = window.location.hash;
        const origin = window.location.origin;
        const URL = `${origin}/${hash}`;
        return URL;
    };

    wrapperClick = e => {
        e.stopPropagation();
    };

    render() {
        const {
            videoCtxMenu,
            repeatPlay,
            toggleRepeatPlay,
        } = this.props;
        const {
            ctxPosX,
            ctxPosY,
        } = this.state;
        return (
            <React.Fragment>
                <input className="for-clipboard" type="text" />
                <VideoCtxMenuWrapper
                    ref={this.ctxMenuRef}
                    onClick={this.wrapperClick}
                    ctxPosX={ctxPosX}
                    ctxPosY={ctxPosY}
                    videoCtxMenu={videoCtxMenu}
                >
                    <VideoCtxItem
                        onClick={toggleRepeatPlay}
                    >
                        <VideoCtxIcon>
                            <i class="fas fa-retweet"></i>
                        </VideoCtxIcon>
                        <VideoCtxTxtBox>
                            <VideoCtxTxt>
                                연속 재생
                            </VideoCtxTxt>
                            <CtxCheckIcon
                                repeatPlay={repeatPlay}
                            >
                                <i class="fas fa-check"></i>
                            </CtxCheckIcon>
                        </VideoCtxTxtBox>
                    </VideoCtxItem>
                    <VideoCtxItem
                        onClick={this.copyUrl}
                    >
                        <VideoCtxIcon>
                            <i class="fas fa-link"></i>
                        </VideoCtxIcon>
                        <VideoCtxTxtBox>
                            <VideoCtxTxt>
                                동영상 URL 복사
                        </VideoCtxTxt>
                        </VideoCtxTxtBox>
                    </VideoCtxItem>
                    <VideoCtxItem
                        onClick={this.copyUrlFromNow}
                    >
                        <VideoCtxIcon>
                            <i class="fas fa-link"></i>
                        </VideoCtxIcon>
                        <VideoCtxTxtBox>
                            <VideoCtxTxt>
                                현재 시간에 동영상 URL 복사
                        </VideoCtxTxt>
                        </VideoCtxTxtBox>
                    </VideoCtxItem>
                </VideoCtxMenuWrapper>
                {videoCtxMenu
                    ? <CtxCloser
                        onClick={this.closerClick}
                    />
                    : null}
                <CtxPositioner
                    onMouseMove={this.getCtxPos}
                />
            </React.Fragment>
        )
    }
};