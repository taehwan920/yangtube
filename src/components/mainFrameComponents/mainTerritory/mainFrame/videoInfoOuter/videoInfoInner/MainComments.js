import React from 'react';
import styled from 'styled-components';
import CommentHeader from './mainComments/CommentHeader';
import CommentContents from './mainComments/CommentContents';

const CommentsWrapper = styled.section`
    background-color: inherit;
    width: 100%;
    height: max-content;
    padding-bottom: 125px;
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {
    state = {
        byPopular: null,
        byLatest: null
    };

    selectLate = () => {
        this.setState({
            byPopular: null,
            byLatest: true
        });
    };

    selectPop = () => {
        this.setState({
            byPopular: true,
            byLatest: null
        });
    };

    render() {
        const {
            contentData,
            themeColor,
        } = this.props;
        const {
            byPopular,
            byLatest
        } = this.state;
        return (
            <CommentsWrapper>
                <CommentHeader
                    byLatest={byLatest}
                    byPopular={byPopular}
                    selectLate={this.selectLate}
                    selectPop={this.selectPop}
                    contentData={contentData}
                    themeColor={themeColor}
                />
                <CommentContents
                    byLatest={byLatest}
                    byPopular={byPopular}
                    contentData={contentData}
                    themeColor={themeColor}
                />
            </CommentsWrapper>
        )
    }
}