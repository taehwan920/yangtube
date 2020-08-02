import React from 'react';
import styled from 'styled-components';

const AutoPlayStoppedBox = styled.div`
    opacity: ${props => props.canceledByScroll ? 1 : 0};
    width: max-content;
    height: max-content;
    font-size: 14px;
    font-style: italic;
    color: white;

    @media (max-width: 849px) {
        font-size: 12px;
    }
`;

export default class extends React.Component {
    render() {
        const {
            canceledByScroll
        } = this.props;
        return (
            <AutoPlayStoppedBox
                canceledByScroll={canceledByScroll}
            >
                자동재생 일시중지됨
            </AutoPlayStoppedBox>
        )
    }
};