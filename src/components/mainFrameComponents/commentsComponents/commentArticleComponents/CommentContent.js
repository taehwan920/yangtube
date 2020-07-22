import React from 'react';
import styled from 'styled-components';
import { commentItems } from '../CommentContents';

const CommentContentWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;

const CommentContent = styled.div`
    width: 100%;
    height: ${props => props.realHeight || 'auto'}px;
    font-size: 14px;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: '';
`;

const CommentHiddenBox = styled.div`
    width: 100%;
    height: auto;
    font-size: 14px;
    white-space: pre-wrap;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    z-index: -100;
`;

const CommentShowMore = styled.div`
    height: 16px;
    margin-top: 4px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
`;

export default class extends React.Component {
    state = {
        showMore: false,
        realHeight: null
    }

    showToggle = () => {
        const realHeight = document.querySelector('.hidden-box').clientHeight;
        if (!this.state.showMore) {
            this.setState({
                showMore: true,
                realHeight: realHeight
            })
        } else {
            this.setState({
                showMore: false,
                realHeight: null
            })
        }
    }
    render() {
        const { realHeight } = this.state;
        return (
            <CommentContentWrapper>
                <CommentContent realHeight={realHeight}>
                    {commentItems.main.content}
                </CommentContent>
                <CommentShowMore onClick={this.showToggle}>
                    {realHeight ? '간략히' : '자세히 보기'}
                </CommentShowMore>
                <CommentHiddenBox
                    className="hidden-box"
                >{commentItems.main.content}</CommentHiddenBox>
            </CommentContentWrapper>
        )
    }
}