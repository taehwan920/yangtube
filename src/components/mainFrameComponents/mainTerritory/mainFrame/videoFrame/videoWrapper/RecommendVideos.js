import React from 'react';
import styled from 'styled-components';

const RecommendWrapper = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export default class extends React.Component {
    render() {
        return (
            <RecommendWrapper>

            </RecommendWrapper>
        )
    }
};