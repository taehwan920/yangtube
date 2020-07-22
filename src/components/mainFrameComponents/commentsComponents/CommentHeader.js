import React from 'react';
import styled from 'styled-components';

const CommentHeaderWrapper = styled.header`
    background: white;
    width: 100%;
    min-height: 119.5px;
    margin-bottom: 32px;
`;

const CommentHeaderHeader = styled.header`
    width: 100%;
    height: 24px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
`;

const CommentNumber = styled.div`
    width: auto;
    height: 100%;
    margin-right: 32px;
    font-size: 16px;
`;

const CommentSortBox = styled.div`
    width: auto;
    height: 100%;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
`;

const CommentSortIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    line-height: 24px;
    font-size: 16px;
`;

const CommentSortText = styled.span`
    width: auto;
    height: auto;
    font-size: 14px;
`;

const CommentInputAndUserWrapper = styled.div`
    width: 100%;
    min-height: 71.5px;
    display: flex;
`;

const CommentInputUserIcon = styled.div`
    background-color: #AA47BC;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 50%;
    color: white;
    font-size: 22px;
    text-align: center;
    line-height: 42px;
`;

const CommentInputPartWrapper = styled.div`
    width: calc(100% - 56px);
    height: 100%;
    display: flex;
    
    flex-direction: column;
`;

const CommentInputContainer = styled.div`
    width: 100%;
    min-height: 24.5px;
    height: ${props => props.inputHeight + 3.5 || '24.5'}px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: flex-start;
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
    transition: width 0.3s linear;
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

const CommentInputBtnsWrapper = styled.div`
    width: 100%;
    height: 39px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const CommentInputBtnBox = styled.div`
    width: max-content;
    height: 39px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

const CommentInputBtn = styled.div`
    min-width: 72px;
    width: max-content;
    height: 39px;
    padding: 10px 16px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
`;

const CommentInputSubmitBtn = styled(CommentInputBtn)`
    background-color: ${props => props.inputting ? '#065FD4' : '#CCCCCC'};
    cursor: ${props => props.inputting ? 'pointer' : 'default'};
    color: white;
    margin-left: 8px;
`;

const CommentClickEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s linear;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const comHeaderItems = {
    subBtn: ['취소', '댓글']
};

export default class extends React.Component {
    state = {
        inputFocused: false,
        inputting: false,
        inputHeight: 0
    }

    resizeInput = (str) => {
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
            <CommentHeaderWrapper>
                <CommentHeaderHeader>
                    <CommentNumber>댓글 12개</CommentNumber>
                    <CommentSortBox>
                        <CommentSortIcon><i class="fas fa-sort-amount-down"></i></CommentSortIcon>
                        <CommentSortText>정렬 기준</CommentSortText>
                        <CommentClickEffect></CommentClickEffect>
                    </CommentSortBox>
                </CommentHeaderHeader>
                <CommentInputAndUserWrapper>
                    <CommentInputUserIcon draggable="true">
                        G
                    </CommentInputUserIcon>
                    <CommentInputPartWrapper>
                        <CommentInputContainer inputHeight={inputHeight}>
                            <CommentPlaceHolder inputting={inputting}>
                                공개 댓글 추가...
                            </CommentPlaceHolder>
                            <CommentInput
                                className="comment-input"
                                inputHeight={inputHeight}
                                onFocus={() => this.setState({ inputFocused: true })}
                                onBlur={() => this.setState({ inputFocused: false })}
                                onChange={this.changeInput}
                            />
                            <CommentInputBorderAniBox inputHeight={inputHeight}>
                                <CommentInputBorderAni inputFocused={inputFocused}></CommentInputBorderAni>
                            </CommentInputBorderAniBox>
                        </CommentInputContainer>
                        <CommentInputBtnsWrapper>
                            <CommentInputBtnBox>
                                <CommentInputBtn onClick={this.cancelComment}>
                                    {comHeaderItems.subBtn[0]}
                                    <CommentClickEffect></CommentClickEffect>
                                </CommentInputBtn>
                                <CommentInputSubmitBtn onClick={this.submitComment} inputting={inputting}>
                                    {comHeaderItems.subBtn[1]}
                                    <CommentClickEffect></CommentClickEffect>
                                </CommentInputSubmitBtn>
                            </CommentInputBtnBox>
                        </CommentInputBtnsWrapper>
                    </CommentInputPartWrapper>
                </CommentInputAndUserWrapper>
            </CommentHeaderWrapper>
        )
    }
}