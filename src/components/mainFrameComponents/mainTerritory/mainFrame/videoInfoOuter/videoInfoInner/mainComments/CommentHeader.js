import React from 'react';
import styled from 'styled-components';
import HeaderHeader from './commentHeader/HeaderHeader';
import InputAndUser from './commentHeader/InputAndUser';

const CommentHeaderWrapper = styled.header`
    background: inherit;
    width: 100%;
    min-height: 88px;
    margin-bottom: 32px;
`;

export const CommentClickEffect = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s linear;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
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
            <CommentHeaderWrapper>
                <HeaderHeader
                    byLatest={byLatest}
                    byPopular={byPopular}
                    lang={lang}
                    selectLate={selectLate}
                    selectPop={selectPop}
                    contentData={contentData}
                    themeColor={themeColor}
                />
                <InputAndUser
                    lang={lang}
                    themeColor={themeColor}
                />
            </CommentHeaderWrapper>
        )
    }
}