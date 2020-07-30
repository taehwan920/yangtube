import React from 'react';
import styled from 'styled-components';

const LeftArrow = styled.div`
    width: 40px;
    height: 40px;
    padding: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
`;

export default class extends React.Component {
    render() {
        const {
            toggleMode,
            stateType
        } = this.props;
        return (
            <LeftArrow
                onClick={toggleMode(stateType)}
            >
                <i class="fas fa-arrow-left"></i>
            </LeftArrow>
        )
    }
};