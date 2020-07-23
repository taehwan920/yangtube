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
    }

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
        const inputTag = document.querySelector('.comment-input');
        inputTag.value = '';
        this.setState({
            inputFocused: false,
            inputting: false,
            inputHeight: 0
        })
    }

    submitComment = () => {
        const inputTag = document.querySelector('.comment-input');
        inputTag.value = '';
        this.setState({
            inputFocused: false,
            inputting: false,
            inputHeight: 0
        })
    }

    render() {
        const { inputFocused, inputting, inputHeight } = this.state;
        return (
            <CommentInputPartWrapper>
                <InputContainer
                    inputFocused={inputFocused}
                    inputting={inputting}
                    inputHeight={inputHeight}
                    changeInput={this.changeInput}
                    focusIn={() => this.setState({ inputFocused: true })}
                    focusOut={() => this.setState({ inputFocused: false })}
                ></InputContainer>
                {inputFocused
                    ? <InputBtns
                        inputting={inputting}
                        cancelComment={this.cancelComment}
                        submitComment={this.submitComment}
                    ></InputBtns>
                    : null}
            </CommentInputPartWrapper>
        )
    }
}