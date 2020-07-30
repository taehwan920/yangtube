import React from 'react';
import styled from 'styled-components';
import CommentArticle from './commentContents/CommentArticle';

const CommentContentsListWrapper = styled.section`
    width: 100%;
    background: inherit;
`;

export default class extends React.Component {
    sortComments = (arr, popular, latest) => {
        if (arr.length < 2) return;
        const sortArr = Array.from(arr);
        if (popular) { sortArr.sort((a, b) => b.likes - a.likes); }
        if (latest) { sortArr.sort((a, b) => b.timestamp - a.timestamp); }
        return sortArr;
    };
    render() {
        const {
            byPopular,
            byLatest,
            contentData
        } = this.props;
        let {
            comments
        } = contentData;
        comments = this.sortComments(comments, byPopular, byLatest);
        return (
            <CommentContentsListWrapper>
                {comments.length > 0
                    ? comments.map(commentItem => {
                        return (
                            <CommentArticle
                                commentItem={commentItem}
                            />
                        )
                    })
                    : null
                }
            </CommentContentsListWrapper>
        )
    }
}