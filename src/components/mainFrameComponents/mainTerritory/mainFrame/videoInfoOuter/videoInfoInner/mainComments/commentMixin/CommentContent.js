import React from 'react';
import styled, { css } from 'styled-components';


const CommentContentWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;

const CommentContent = styled.div`
    width: 100%;
    height: ${props => props.realHeight || 'max-content'}px;
    font-size: 14px;
    white-space: pre-wrap;
    ${props => !props.realHeight && css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: '';
    `}
    
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
    width: max-content;
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

    contentRef = React.createRef();

    showToggle = () => {
        const realHeight = this.contentRef.current.clientHeight;
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
        const { content } = this.props;
        const { realHeight } = this.state;
        const numberOfLine = content.split('\n').length;
        return (
            <CommentContentWrapper>
                <CommentContent
                    realHeight={realHeight}
                >
                    {content}
                </CommentContent>
                <CommentHiddenBox
                    ref={this.contentRef}>
                    {content}
                </CommentHiddenBox>
                {numberOfLine <= 4
                    ? null
                    : <CommentShowMore
                        onClick={this.showToggle}>
                        {realHeight ? '간략히' : '자세히 보기'}
                    </CommentShowMore>}
            </CommentContentWrapper>
        )
    }
}