import React from 'react';
import styled from 'styled-components';
import CommentArticle from './commentArticleComponents/CommentArticle';
import { commentItems } from '../../DB';

const CommentContentsListWrapper = styled.section`
    width: 100%;
    background: white;
`;

export default class extends React.Component {
    render() {
        return (
            <CommentContentsListWrapper>
                {commentItems.map(commentItem => {
                    return (
                        <CommentArticle commentItem={commentItem}></CommentArticle>
                    )
                })}
            </CommentContentsListWrapper>
        )
    }
}