import React from 'react';
import styled from 'styled-components';
import SubmitBtns from './replyInput/SubmitBtns';

const ReplyInputAndBtnWrapper = styled.div`
    width: calc(100% - 40px);
    min-height: 71.5px;
    height: max-content;
    display: flex;
    flex-direction: column;
`;

const ReplyInputWrapper = styled.div`
    width: 100%;
    min-height: 24.5px;
    height: ${props => props.inputHeight + 3.5 || '24.5'}px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
`;

const ReplyPlaceHolder = styled.div`
    width: 100%;
    height: 21px;
    position: absolute;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    z-index: 25;
    display: ${props => props.inputting ? 'none' : 'inline'};
`;

const ReplyInputArea = styled.textarea`
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

const BorderAniBox = styled.div`
    width: 100%;
    position: absolute;
    top: ${props => props.inputHeight ? props.inputHeight - 10.5 : '10.5'}px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const BorderAni = styled(BorderAniBox)`
    width: ${props => props.inputFocused ? '100%' : '0px'};
    border-bottom: 2px solid black;
    transition: all 0.22s linear;
`;


export default class extends React.Component {
    state = {
        inputFocused: false,
        inputting: false,
        inputHeight: 0
    }

    resizeInput = str => {
        const strArr = str.split('\n');
        if (strArr.length < 2) {
            return 21
        } else if (strArr.length === 2) {
            return 36
        } else {
            const lineNum = strArr.length - 2;
            return 36 + (lineNum * 18)
        }
    }

    inputRef = React.createRef();

    changeInput = () => {
        const nowInput = this.inputRef.current;
        const newHeight = this.resizeInput(nowInput.value);
        if (this.state.inputting) {
            if (nowInput.textLength === 0) {
                this.setState({
                    inputting: false,
                    inputHeight: 0
                })
            }
        } else if (nowInput.textLength > 0) {
            this.setState({ inputting: true })
        }
        this.setState({ inputHeight: newHeight })
    }

    cancelReply = () => {
        const nowInput = this.inputRef.current;
        nowInput.value = '';
        this.setState({
            inputting: false,
            inputHeight: 0
        })
    }

    submitReply = () => {
        const nowInput = this.inputRef.current;
        nowInput.value = '';
        this.setState({
            inputting: false,
            inputHeight: 0
        })
    }

    render() {
        const { toggleReply } = this.props;
        const { inputFocused, inputting, inputHeight } = this.state;
        return (
            <ReplyInputAndBtnWrapper>
                <ReplyInputWrapper inputHeight={inputHeight}>
                    <ReplyPlaceHolder inputting={inputting}>
                        공개 답글 추가...
                    </ReplyPlaceHolder>
                    <ReplyInputArea
                        ref={this.inputRef}
                        inputHeight={inputHeight}
                        onFocus={() => this.setState({ inputFocused: true })}
                        onBlur={() => this.setState({ inputFocused: false })}
                        onChange={this.changeInput}
                    ></ReplyInputArea>
                    <BorderAniBox inputHeight={inputHeight}>
                        <BorderAni inputFocused={inputFocused}></BorderAni>
                    </BorderAniBox>
                </ReplyInputWrapper>
                <SubmitBtns
                    inputting={inputting}
                    toggleReply={toggleReply}
                    cancelReply={this.cancelReply}
                    submitReply={this.submitReply}
                ></SubmitBtns>
            </ReplyInputAndBtnWrapper>
        )
    }
}