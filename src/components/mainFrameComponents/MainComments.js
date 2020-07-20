import React from 'react';
import styled from 'styled-components';

const CommentsWrapper = styled.section`
    background-color: lightgreen;
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
`;

const CommentHeaderWrapper = styled.header`
    background: white;
    width: 100%;
    height: 119.5px;
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
    color: rgba(0, 0, 0, 0.5)
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
    height: 71.5px;
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
    height: 24.5px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: flex-start;
`;

const CommentPlaceHolder = styled.div`
    width: 100%;
    height: 21px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13.5px;
    cursor: none;
    position: absolute;
    z-index: 25;
`;

const CommentInput = styled.input`
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 21px;
    border: none;
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
    width: 11em;
    height: 39px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

const CommentInputBtn = styled.div`
    width: 5em;
    height: 39px;
    padding: 10px 16px;
    text-align: center;
    border-radius: 3px;
`;

const CommentInputSubmitBtn = styled(CommentInputBtn)`
    background-color: #CCCCCC;
    color: white;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                <CommentHeaderWrapper>
                    <CommentHeaderHeader>
                        <CommentNumber>댓글 12개</CommentNumber>
                        <CommentSortBox>
                            <CommentSortIcon><i class="fas fa-sort-amount-down"></i></CommentSortIcon>
                            <CommentSortText>정렬 기준</CommentSortText>
                        </CommentSortBox>
                    </CommentHeaderHeader>
                    <CommentInputAndUserWrapper>
                        <CommentInputUserIcon>
                            G
                        </CommentInputUserIcon>
                        <CommentInputPartWrapper>
                            <CommentInputContainer>
                                <CommentPlaceHolder>
                                    공개 댓글 추가...
                                </CommentPlaceHolder>
                                <CommentInput />
                            </CommentInputContainer>
                            <CommentInputBtnsWrapper>
                                <CommentInputBtnBox>
                                    <CommentInputBtn>
                                        취소
                                    </CommentInputBtn>
                                    <CommentInputSubmitBtn>
                                        댓글
                                    </CommentInputSubmitBtn>
                                </CommentInputBtnBox>
                            </CommentInputBtnsWrapper>
                        </CommentInputPartWrapper>
                    </CommentInputAndUserWrapper>
                </CommentHeaderWrapper>
                <section>

                </section>
            </CommentsWrapper>
        )
    }
}