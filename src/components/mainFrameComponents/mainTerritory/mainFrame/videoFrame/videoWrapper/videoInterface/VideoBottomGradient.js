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
    bottom: ${props => props.theaterMode ? '0px' : '1.5px'};
`;
export default class extends React.Component {
    render() {
        const {
            theaterMode
        } = this.props;
        return (
            <GradientPart
                theaterMode={theaterMode}
            />
        )
    }
};