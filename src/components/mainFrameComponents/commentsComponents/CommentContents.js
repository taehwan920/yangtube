import React from 'react';
import styled from 'styled-components';
import CommentArticle from './commentArticleComponents/CommentArticle';

const CommentContentsListWrapper = styled.section`
    width: 100%;
    background: white;
`;

export const commentItems = {
    main: {
        userName: 'Vienna Sausage',
        timeStamp: 1595398976859,
        content:
            `동해물과 백두산이
마르고 닳도록
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려강산
대한 사람 대한으로 길이 보전하세`,
        like: 361489324
    },
    reply: [
        {
            userName: '이영종',
            timeStamp: 1595399884809,
            content:
                `이분은
            대체
            왜
            애국가를
            부르는거죳?!`,
            like: 1578
        },
        {
            userName: 'ネギトロ',
            timeStamp: 1595400065508,
            content:
                `急に国歌歌い出して草www`,
            like: 98
        }
    ]
};

export const commentFixed = {
    showMore: '자세히 보기',
    showLess: '간략히',
    replyBtnTxt: '답글'
}

export const replyFixed = {
    name: 'GUEST',
    placeholder: '공개 답글 추가...',
    cancelBtn: '취소',
    submitBtn: '답글'
}

export default class extends React.Component {
    render() {
        return (
            <CommentContentsListWrapper>
                <CommentArticle></CommentArticle>
            </CommentContentsListWrapper>
        )
    }
}