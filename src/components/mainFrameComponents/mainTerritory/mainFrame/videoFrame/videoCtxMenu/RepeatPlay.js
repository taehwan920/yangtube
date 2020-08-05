import React from 'react';
import styled from 'styled-components';
import {
    VideoCtxItem,
    VideoCtxIcon,
    VideoCtxTxtBox,
    VideoCtxTxt,
} from '../VideoCtxMenu';

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

export default class extends React.Component {
    render() {
        const {
            lang,
            repeatPlay,
            toggleRepeatPlay,
        } = this.props;
        return (
            <VideoCtxItem
                onClick={toggleRepeatPlay}
            >
                <VideoCtxIcon>
                    <i class="fas fa-retweet"></i>
                </VideoCtxIcon>
                <VideoCtxTxtBox>
                    <VideoCtxTxt>
                        {lang.videoFrame.ctxMenu.repeatPlay}
                    </VideoCtxTxt>
                    <CtxCheckIcon
                        repeatPlay={repeatPlay}
                    >
                        <i class="fas fa-check"></i>
                    </CtxCheckIcon>
                </VideoCtxTxtBox>
            </VideoCtxItem>
        )
    }
};