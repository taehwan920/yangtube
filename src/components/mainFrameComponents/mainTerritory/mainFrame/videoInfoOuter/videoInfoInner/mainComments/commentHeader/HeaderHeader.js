import React from 'react';
import styled from 'styled-components';
import CommentSort from './headerHeader/CommentSort';


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
    color: ${props => props.themeColor.normalFont};
    font-size: 16px;
`;


export default class extends React.Component {
    render() {
        const {
            byLatest,
            byPopular,
            lang,
            selectLate,
            selectPop,
            contentData,
            themeColor,
        } = this.props;
        return (
            <CommentHeaderHeader>
                <CommentNumber
                    themeColor={themeColor}
                >
                    {lang.comment.comments}{contentData.comments.length}{lang.comment.commentMeasure}
                </CommentNumber>
                <CommentSort
                    byLatest={byLatest}
                    byPopular={byPopular}
                    lang={lang}
                    selectLate={selectLate}
                    selectPop={selectPop}
                    themeColor={themeColor}
                />
            </CommentHeaderHeader>
        )
    }
};