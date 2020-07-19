import React from 'react';
import styled from 'styled-components';
import TitleInfo from './descriptionComponents/TitleInfo';

const TitleAndDesc = styled.section`
    background-color: white;
    width: 100%;
    height: 293px;
`;

const TitleWrapper = styled.section`
    width: 100%;
    height: 93px;
    padding-top: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.article`
    background: white;
    width: 100%;
    height: 24px;
    font-size: 18px;
`;

export default class extends React.Component {

    render() {
        return (
            <TitleAndDesc>
                <TitleWrapper>
                    <Title>제목</Title>
                    <TitleInfo></TitleInfo>
                </TitleWrapper>
            </TitleAndDesc>
        )
    }
}