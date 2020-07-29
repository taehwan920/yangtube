import React from 'react';
import styled from 'styled-components';

const GradientPart = styled.div`
    background: linear-gradient(
        to bottom, 
        transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)
        );
    width: 100%;
    height: 50.625%;
    padding-top: 49px;
    position: absolute;
    bottom: 0;
`;
export default class extends React.Component {
    render() {
        return (
            <GradientPart />
        )
    }
};