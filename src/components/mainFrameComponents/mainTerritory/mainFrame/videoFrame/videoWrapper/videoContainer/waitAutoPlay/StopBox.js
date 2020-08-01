import React from 'react';
import styled from 'styled-components';

const AutoPlayStoppedBox = styled.div`
    font-size: 14px;
    font-style: italic;
    color: white;
`;

export default class extends React.Component {
    render() {
        return (
            <AutoPlayStoppedBox>
                자동재생 일시중지됨
            </AutoPlayStoppedBox>
        )
    }
};