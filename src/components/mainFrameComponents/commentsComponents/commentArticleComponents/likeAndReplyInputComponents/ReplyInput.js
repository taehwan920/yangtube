import React from 'react';
import styled from 'styled-components';
import SubmitBtns from './SubmitBtns';

const ReplyInputAndBtnWrapper = styled.div`
    width: calc(100% - 40px);
    min-height: 71.5px;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const ReplyInputWrapper = styled.div`
    width: 100%;
    min-height: 24.5px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: auto;
    position: relative;
    display: flex;
`;

const ReplyPlaceHolder = styled.div`
    width: 100%;
    height: 21.5px;
    position: absolute;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    z-index: 25;
`;

const ReplyInput = styled.textarea`
    background: rgba(0, 0, 0, 0);
    width: 100%;
    min-height: 21.5px;
    height: 21.5px;
    border: none;
    resize: none;
    z-index: 26;

    &:focus {
        outline: none;
    }
`;



export default class extends React.Component {
    render() {
        return (
            <ReplyInputAndBtnWrapper>
                <ReplyInputWrapper>
                    <ReplyPlaceHolder>
                        공개 답글 추가...
                    </ReplyPlaceHolder>
                    <ReplyInput></ReplyInput>
                </ReplyInputWrapper>
                <SubmitBtns></SubmitBtns>
            </ReplyInputAndBtnWrapper>
        )
    }
}