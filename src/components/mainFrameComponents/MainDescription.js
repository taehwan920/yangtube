import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.section`
    background-color: beige;
    width: 100%;
    height: 293px;
`;

export default class extends React.Component {
    render() {
        return (
            <DescriptionWrapper>
                <div>제목</div>
                <div>설명</div>
            </DescriptionWrapper>
        )
    }
}