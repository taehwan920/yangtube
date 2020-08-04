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
    border-radius: 3px;
    color: ${props => props.themeColor.grayFont};
    text-align: center;
    cursor: pointer;
    position: relative;
`;

const CommentInputSubmitBtn = styled(CommentInputBtn)`
    background-color: ${props => props.inputting
        ? props.themeColor.main.commentInputtingBtn
        : props.themeColor.main.commentInputBtn
    };
    color: ${props => props.themeColor.main.commentInputBtnTxt};
    cursor: ${props => props.inputting ? 'pointer' : 'default'};
    margin-left: 8px;
`;

export default class extends React.Component {
    render() {
        const {
            cancelComment,
            inputting,
            submitComment,
            themeColor,
        } = this.props;
        return (
            <CommentInputBtnsWrapper>
                <CommentInputBtnBox>
                    <CommentInputBtn
                        onClick={cancelComment}
                        themeColor={themeColor}
                    >
                        취소
                        <CommentClickEffect />
                    </CommentInputBtn>
                    <CommentInputSubmitBtn
                        onClick={submitComment}
                        inputting={inputting}
                        themeColor={themeColor}
                    >
                        댓글
                        <CommentClickEffect />
                    </CommentInputSubmitBtn>
                </CommentInputBtnBox>
            </CommentInputBtnsWrapper>
        )
    }
}