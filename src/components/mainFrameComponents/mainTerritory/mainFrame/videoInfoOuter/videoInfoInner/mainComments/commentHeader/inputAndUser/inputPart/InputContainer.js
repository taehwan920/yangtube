import React from 'react';
import styled from 'styled-components';

const CommentInputContainer = styled.div`
    width: 100%;
    min-height: 24.5px;
    height: ${props => props.inputHeight + 3.5 || '24.5'}px;
    margin-bottom: 8px;
    border-bottom: 1px solid ${props => props.themeColor.main.border};
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
    color: ${props => props.themeColor.grayFont};
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
    color: ${props => props.themeColor.normalFont};
    resize: none;
    z-index: 26;

    &:focus {
        outline: none;
    }
`;

export default class extends React.Component {
    render() {
        const {
            changeInput,
            focusIn,
            focusOut,
            inputFocused,
            inputting,
            inputHeight,
            lang,
            themeColor,
        } = this.props;
        return (
            <CommentInputContainer
                inputHeight={inputHeight}
                themeColor={themeColor}
            >
                <CommentPlaceHolder
                    inputting={inputting}
                    themeColor={themeColor}
                >
                    {lang.comment.placeholder}
                </CommentPlaceHolder>
                <CommentInput
                    ref={ref => this.commentInputRef = ref}
                    className="comment-input"
                    inputHeight={inputHeight}
                    onFocus={focusIn}
                    onBlur={focusOut}
                    onChange={changeInput}
                    themeColor={themeColor}
                />
                <CommentInputBorderAniBox
                    inputHeight={inputHeight}
                >
                    <CommentInputBorderAni
                        inputFocused={inputFocused}
                        themeColor={themeColor}
                    />
                </CommentInputBorderAniBox>
            </CommentInputContainer>
        )
    }
}