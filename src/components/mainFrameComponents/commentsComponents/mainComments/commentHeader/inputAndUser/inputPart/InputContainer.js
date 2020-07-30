import React from 'react';
import styled from 'styled-components';

const CommentInputContainer = styled.div`
    width: 100%;
    min-height: 24.5px;
    height: ${props => props.inputHeight + 3.5 || '24.5'}px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
`;

const CommentInputBorderAniBox = styled.div`
    width: 100%;
    position: absolute;
    top: ${props => props.inputHeight ? props.inputHeight - 21 : '0'}px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const CommentInputBorderAni = styled(CommentInputContainer)`
    width: ${props => props.inputFocused ? '100%' : '0px'};
    border-bottom: 2px solid black;
    transition: width 0.22s ease-out;
`;

const CommentPlaceHolder = styled.div`
    width: 100%;
    height: 21px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13.5px;
    position: absolute;
    z-index: 25;
    display:${props => props.inputting ? 'none' : 'inline'};
`;

const CommentInput = styled.textarea`
    background: rgba(0, 0, 0, 0);
    width: 100%;
    min-height: 21px;
    height: ${props => props.inputHeight || '21'}px;
    border: none;
    resize: none;
    z-index: 26;

    &:focus {
        outline: none;
    }
`;

export default class extends React.Component {
    render() {
        const { changeInput, focusIn, focusOut, inputFocused, inputting, inputHeight } = this.props;
        return (
            <CommentInputContainer
                inputHeight={inputHeight}>
                <CommentPlaceHolder inputting={inputting}>
                    공개 댓글 추가...
                </CommentPlaceHolder>
                <CommentInput
                    ref={ref => this.commentInputRef = ref}
                    className="comment-input"
                    inputHeight={inputHeight}
                    onFocus={focusIn}
                    onBlur={focusOut}
                    onChange={changeInput}
                />
                <CommentInputBorderAniBox inputHeight={inputHeight}>
                    <CommentInputBorderAni inputFocused={inputFocused}></CommentInputBorderAni>
                </CommentInputBorderAniBox>
            </CommentInputContainer>
        )
    }
}