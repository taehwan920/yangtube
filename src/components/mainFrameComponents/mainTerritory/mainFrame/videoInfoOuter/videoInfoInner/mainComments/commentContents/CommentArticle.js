import React from 'react';
import styled from 'styled-components';
import CommentUserAndContent from './commentArticle/CommentUserAndContent';
import ReplySwitches from './commentArticle/ReplySwitches';

const CommentArticleWrapper = styled.article`
    width: 100%;
    margin-bottom: 16px;
`;

export default class extends React.Component {
    render() {
        const {
            commentItem,
            contentData,
            lang,
            langState,
            themeColor,
        } = this.props;
        const replyItems = commentItem.replies;
        return (
            <CommentArticleWrapper>
                <CommentUserAndContent
                    commentItem={commentItem}
                    contentData={contentData}
                    lang={lang}
                    langState={langState}
                    themeColor={themeColor}
                />
                {replyItems.length > 0
                    ?
                    <ReplySwitches
                        lang={lang}
                        langState={langState}
                        replyItems={replyItems}
                        themeColor={themeColor}
                    />
                    : null}
            </CommentArticleWrapper>
        )
    };
};