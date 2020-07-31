import React from 'react';
import styled from 'styled-components';
import { CommentClickEffect } from '../../../CommentHeader'

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

export default class extends React.Component {
    render() {
        const { cancelComment, inputting, submitComment } = this.props;
        return (
            <CommentInputBtnsWrapper>
                <CommentInputBtnBox>
                    <CommentInputBtn
                        onClick={cancelComment}
                    >
                        취소
                        <CommentClickEffect />
                    </CommentInputBtn>
                    <CommentInputSubmitBtn
                        onClick={submitComment}
                        inputting={inputting}
                    >
                        댓글
                        <CommentClickEffect />
                    </CommentInputSubmitBtn>
                </CommentInputBtnBox>
            </CommentInputBtnsWrapper>
        )
    }
}