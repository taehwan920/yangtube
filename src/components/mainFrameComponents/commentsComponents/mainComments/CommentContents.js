import React from 'react';
import styled from 'styled-components';
import CommentArticle from './commentContents/CommentArticle';

const CommentContentsListWrapper = styled.section`
    width: 100%;
    background: inherit;
`;

export default class extends React.Component {
    render() {
        const {
            contentData
        } = this.props;
        const {
            comments
        } = contentData;
        return (
            <CommentContentsListWrapper>
                {comments.map(commentItem => {
                    return (
                        <CommentArticle
                            commentItem={commentItem}
                        />
                    )
                })}
            </CommentContentsListWrapper>
        )
    }
}