import React from 'react';
import {
    VideoCtxItem,
    VideoCtxIcon,
    VideoCtxTxtBox,
    VideoCtxTxt,
} from '../VideoCtxMenu';

export default class extends React.Component {
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

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}