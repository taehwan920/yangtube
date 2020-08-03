import React from 'react';
import styled, { css } from 'styled-components';
import ContentMapping from './commentContent/ContentMapping';


const CommentContentWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;
// white-space: pre-wrap;
const CommentContent = styled.div`
    width: 100%;
    height: ${props => props.showMore ? props.realHeight : props.showLessLines * 19}px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    ${props => !props.showMore && css`
        overflow: hidden;
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
        const {
            content,
        } = this.props;
        const {
            realHeight,
            showMore
        } = this.state;
        const numberOfLine = content.split('\n').length;
        let showLessLines = numberOfLine > 4 ? 4 : numberOfLine;
        return (
            <CommentContentWrapper>
                <CommentContent
                    showLessLines={showLessLines}
                    realHeight={realHeight}
                    showMore={showMore}
                >
                    <ContentMapping
                        content={content}
                    />
                </CommentContent>
                <CommentHiddenBox
                    ref={this.contentRef}>
                    {content}
                </CommentHiddenBox>
                {numberOfLine <= 4
                    ? null
                    :
                    <CommentShowMore
                        onClick={this.showToggle}>
                        {realHeight ? '간략히' : '자세히 보기'}
                    </CommentShowMore>}
            </CommentContentWrapper>
        )
    }
}