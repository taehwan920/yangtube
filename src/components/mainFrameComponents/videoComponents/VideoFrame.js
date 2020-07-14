import React from 'react';
import styled from 'styled-components';

const MainVideoFrame = styled.div`
    width: 1280px;
    height: 780px;
    border: 1px solid black;
`;

export default class extends React.Component {
    render() {
        return (
            <MainVideoFrame>
            </MainVideoFrame>
        )
    }
}