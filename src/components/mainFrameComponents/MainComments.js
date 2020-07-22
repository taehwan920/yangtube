import React from 'react';
import styled from 'styled-components';
import CommentHeader from './commentsComponents/CommentHeader';

const CommentsWrapper = styled.section`
    background-color: lightgreen;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
`;

const CommentListWrapper = styled.section`
    width: 100%;
    background: white;
`;

const CommentArticleWrapper = styled.article`
    width: 100%;
    margin-bottom: 16px;
`;

const CommentUserAndContentWrapper = styled.div`
    width: 100%;
    display: flex;
`;

const CommentUserIconWrapper = styled.div`
    width: 56px;
    height: 100%;
`;

const CommentUserIconBox = styled.div`
    width: 100%;
    height: 43px;
`;

const CommentUserIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #EC407A;
    border-radius: 50%;
    font-size: 22px;
    text-align: center;
    line-height: 42px;
`;

const CommentNameAndContentWrapper = styled.div`
    width: calc(100% - 40px - 56px);
    display: flex;
    flex-direction: column;
`;

const CommentUserAndTimeWrapper = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 2px;
    font-size: 13px;
`;

const CommentUserName = styled.span`
    height: 18px;
    margin-right: 4px;
    margin-bottom: 2px;
`;

const CommentTimeStamp = styled.span`
    color: rgba(0, 0, 0, 0.6);
`;

const CommentContentWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const CommentContent = styled.div`
    width: 100%;
    height: auto;
    min-height: 20px;
    font-size: 14px;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: '';
`;

const CommentShowMore = styled.div`
    height: 16px;
    margin-top: 4px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`;

const CommentLikeAndReplyBox = styled.div`
    width: 100%;
    min-height: 33px;
    height: auto;
    margin-top: 4px;
    display: flex;
    flex-direction: column;
`;

const LikeAndReplyWrapper = styled.div`
    width: 100%;
    height: 33px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const LikeIcon = styled.div`
    width: 32px;
    height: 32px;
    padding: 8px;
    font-size: 16px;
    line-height: 0px;
    color: rgba(0, 0, 0, 0.4);
`;

const DislikeIcon = styled(LikeIcon)`
    line-height: 25px;
`;

const LikeNum = styled.div`
    min-width: 7.5px;
    height: 18px;
    margin-right: 8px;
    line-height: 22px;
    font-size: 12px;
`;

const ReplyBtn = styled.div`
    min-width: 67px;
    width: max-content;
    height: 33px;
    padding: 8px 16px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
`;

const ReplyInputAndIconWrapper = styled.div`
    width: 100%;
    min-height: 71.5px;
    height: auto;
    display: flex;
`;

const ReplyUserIconBox = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 16px;
`;

const ReplyUserIcon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #AA47BC;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 26px;
`;

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

const ReplyBtnsWrapper = styled.div`
    width: 100%;
    height: 39px;
    display: flex;
    justify-content: flex-end;
`;

const ReplyBtnsBox = styled.div`
    width: max-content;
    height: 39px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

const ReplyBtns = styled.div`
    min-width: 72px;
    width: max-content;
    height: 39px;
    padding: 10px 16px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
`;

const ReplySubmitBtn = styled(ReplyBtns)`
    background-color: ${props => props.replying ? '#065FD4' : '#CCCCCC'};
    cursor: ${props => props.replying ? 'pointer' : 'default'};
    color: white;
    margin-left: 8px;
`;

const ReportWrapper = styled.div`
    width: 40px;
    height: 100%;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
`;

const ReportIconBox = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
`;

const ReplySwitchToVisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: 100%;
    margin-left: 56px;
    color: #065FD4;
`;

const ReplySwitchToInvisibleWrapper = styled.div`
    width: calc(100% - 56px);
    height: auto;
    margin-left: 56px;
    color: #065FD4;
`;

const ReplySwitchBox = styled.div`
    width: auto;
    height: 32px;
    padding-top: 2px;
    padding-bottom: 10px;
    display: flex;
`;

const ReplySwitchIcon = styled.span`
    width: 20px;
    height: 20px;
    font-size: 14px;
    text-align: center;
`;

const ReplySwitchText = styled.span`
    width: auto;
    height: 16px;
    margin-left: 8px;
    font-size: 14px;
`;

const ReplyListWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-left: 56px;
    display: flex;
`;

const commentItems = {
    content:
        `동해물과 백두산이
마르고 닳도록
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려강산
대한 사람 대한으로 길이 보전하세`
}

export default class extends React.Component {
    render() {
        return (
            <CommentsWrapper>
                <CommentHeader></CommentHeader>
                <CommentListWrapper>
                    <CommentArticleWrapper>
                        <CommentUserAndContentWrapper>
                            <CommentUserIconWrapper>
                                <CommentUserIconBox>
                                    <CommentUserIcon>
                                        V
                                    </CommentUserIcon>
                                </CommentUserIconBox>
                            </CommentUserIconWrapper>
                            <CommentNameAndContentWrapper>
                                <CommentUserAndTimeWrapper>
                                    <CommentUserName>
                                        Vienna Sausage
                                    </CommentUserName>
                                    <CommentTimeStamp>
                                        1일 전
                                    </CommentTimeStamp>
                                </CommentUserAndTimeWrapper>
                                <CommentContentWrapper>
                                    <CommentContent>
                                        {commentItems.content}
                                    </CommentContent>
                                    <CommentShowMore>
                                        자세히 보기
                                    </CommentShowMore>
                                </CommentContentWrapper>
                                <CommentLikeAndReplyBox>
                                    <LikeAndReplyWrapper>
                                        <LikeIcon>
                                            <i class="fas fa-thumbs-up"></i>
                                        </LikeIcon>
                                        <LikeNum>
                                            3.6억
                                        </LikeNum>
                                        <DislikeIcon>
                                            <i class="fas fa-thumbs-down"></i>
                                        </DislikeIcon>
                                        <ReplyBtn>
                                            답글
                                        </ReplyBtn>
                                    </LikeAndReplyWrapper>
                                    <ReplyInputAndIconWrapper>
                                        <ReplyUserIconBox>
                                            <ReplyUserIcon draggable="true">
                                                G
                                            </ReplyUserIcon>
                                        </ReplyUserIconBox>
                                        <ReplyInputAndBtnWrapper>
                                            <ReplyInputWrapper>
                                                <ReplyPlaceHolder>
                                                    공개 답글 추가...
                                                </ReplyPlaceHolder>
                                                <ReplyInput></ReplyInput>
                                            </ReplyInputWrapper>
                                            <ReplyBtnsWrapper>
                                                <ReplyBtnsBox>
                                                    <ReplyBtns>취소</ReplyBtns>
                                                    <ReplySubmitBtn>답글</ReplySubmitBtn>
                                                </ReplyBtnsBox>
                                            </ReplyBtnsWrapper>
                                        </ReplyInputAndBtnWrapper>
                                    </ReplyInputAndIconWrapper>
                                </CommentLikeAndReplyBox>
                            </CommentNameAndContentWrapper>
                            <ReportWrapper>
                                <ReportIconBox>
                                    <i class="fas fa-ellipsis-v"></i>
                                </ReportIconBox>
                            </ReportWrapper>
                        </CommentUserAndContentWrapper>
                        <ReplySwitchToVisibleWrapper>
                            <ReplySwitchBox>
                                <ReplySwitchIcon><i class="fas fa-caret-down"></i></ReplySwitchIcon>
                                <ReplySwitchText>답글 n개 보기</ReplySwitchText>
                            </ReplySwitchBox>
                        </ReplySwitchToVisibleWrapper>
                        <ReplySwitchToInvisibleWrapper>
                            <ReplySwitchBox>
                                <ReplySwitchIcon><i class="fas fa-caret-up"></i></ReplySwitchIcon>
                                <ReplySwitchText>답글 n개 숨기기</ReplySwitchText>
                            </ReplySwitchBox>
                            <ReplyListWrapper>
                            </ReplyListWrapper>
                        </ReplySwitchToInvisibleWrapper>
                    </CommentArticleWrapper>
                </CommentListWrapper>
            </CommentsWrapper>
        )
    }
}