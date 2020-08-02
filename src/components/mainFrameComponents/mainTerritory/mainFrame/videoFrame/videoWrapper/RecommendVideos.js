import React from 'react';
import styled from 'styled-components';
import RecommendCenter from './recommends/RecommendCenter';

const RecommendsWrapper = styled.section`
    background: black;
    width: 100%;
    height: 100%;
    padding-bottom: 49px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export default class extends React.Component {
    render() {
        const {
            contentData
        } = this.props;
        return (
            <RecommendsWrapper>
                <RecommendCenter
                    contentData={contentData}
                />
            </RecommendsWrapper>
        )
    }
};