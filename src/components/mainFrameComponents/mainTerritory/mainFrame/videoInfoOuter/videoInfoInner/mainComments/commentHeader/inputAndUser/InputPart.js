import React from 'react';
import styled from 'styled-components';
import InputBtns from './inputPart/InputBtns';
import InputContainer from './inputPart/InputContainer';

const CommentInputPartWrapper = styled.div`
    width: calc(100% - 56px);
    height: max-content;
    display: flex;
    
    flex-direction: column;
`;

export default class extends React.Component {
    state = {
        inputFocused: false,
        inputting: false,
        inputHeight: 0
    };

    resizeInput = str => {
        const strArr = str.split('\n');
        if (strArr.length <= 1) {
            return 21
        } else if (strArr.length === 2) {
            return 32
        } else {
            const multiply = strArr.length - 2;
            return 32 + (16 * multiply)
        }
    }

    changeInput = () => {
        const nowInput = document.querySelector('.comment-input');
        const newHeight = this.resizeInput(nowInput.value);
        if (this.state.inputting) {
            if (nowInput.value.length === 0) {
                this.setState({
                    inputting: false,
                    inputHeight: 0
                })
            }
        } else if (nowInput.value.length > 0) {
            this.setState({ inputting: true })
        }
        this.setState({ inputHeight: newHeight })
    }

    cancelComment = () => {
        const inputt = document.querySelector('.comment-input');
        inputt.value = '';
        this.setState({
            inputFocused: false,
            inputting: false,
            inputHeight: 0
        })
    };

    submitComment = () => {
        const inputt = document.querySelector('.comment-input');
        inputt.value = '';
        this.setState({
            inputFocused: false,
            inputting: false,
            inputHeight: 0
        })
    };

    render() {
        const {
            lang,
            themeColor
        } = this.props;
        const {
            inputFocused,
            inputting,
            inputHeight
        } = this.state;
        return (
            <CommentInputPartWrapper>
                <InputContainer
                    changeInput={this.changeInput}
                    focusIn={() => this.setState({ inputFocused: true })}
                    focusOut={this.cancelComment}
                    inputFocused={inputFocused}
                    inputting={inputting}
                    inputHeight={inputHeight}
                    lang={lang}
                    themeColor={themeColor}
                />
                {inputFocused
                    ? <InputBtns
                        cancelComment={this.cancelComment}
                        inputting={inputting}
                        lang={lang}
                        submitComment={this.submitComment}
                        themeColor={themeColor}
                    />
                    : null}
            </CommentInputPartWrapper>
        )
    }
}