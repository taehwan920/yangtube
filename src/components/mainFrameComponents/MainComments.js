import React from 'react';
import styled from 'styled-components';
import CommentHeader from './commentsComponents/CommentHeader';

const CommentsWrapper = styled.section`
    background-color: lightgreen;
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
`;

const CommentListWrapper = styled.section`
    width: 100%;
    height: auto;
    background: white;
`;

const CommentArticleWrapper = styled.article`
    width: 100%;
    height: 191px;
    margin-bottom: 16px;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                <CommentHeader></CommentHeader>
                <CommentListWrapper>
                    <CommentArticleWrapper>
                        <div>
                            <div>
                                <div>usericon</div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <span>
                                                username
                                            </span>
                                            <span>
                                                기간
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            댓글 내용
                                            댓글 내용은 1줄 당 1div, 그리고 시간표시는 별도 span 구분
                                        </div>
                                        <div>
                                            자세히 보기
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span>좋아요 아이콘</span>
                                            <span>좋아요 개수</span>
                                        </div>
                                        <div>
                                            <span>싫 아이콘</span>
                                            <span>싫 개수</span>
                                        </div>
                                        <div>
                                            답글 버튼
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                userIcon-답글
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                답글 인풋 & placeholder
                                            </div>
                                            <div>
                                                <div>
                                                    <div>취소</div>
                                                    <div>답글</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        신고 버튼
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <span> 답글 아이콘(아래 화살표)</span>
                                    <span> 답글 n개 보기</span>
                                </div>
                            </div>
                        </div>
                    </CommentArticleWrapper>
                </CommentListWrapper>
            </CommentsWrapper>
        )
    }
}