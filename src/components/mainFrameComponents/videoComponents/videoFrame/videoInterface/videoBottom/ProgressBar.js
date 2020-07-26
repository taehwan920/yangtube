import React from 'react';
import styled from 'styled-components';

const ProgressBarBox = styled.div`
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 35px;
    cursor: pointer;
`;

const TotalProgress = styled.div`
    background: gray;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 1px;
`;

// const HoverProgress = styled.div`
//     width: 100%;
//     height: 3px;
//     position: absolute;
//     top: 0px;
//     left: 0px;
// `;

const CurrentProgress = styled.div`
    background: red;
    width: 50%;
    height: 3px;
    position: absolute;
    top: 0px;
    left: 0px;
`;

export default class extends React.Component {
    render() {
        return (
            <ProgressBarBox>
                <TotalProgress>
                    <CurrentProgress></CurrentProgress>
                </TotalProgress>
            </ProgressBarBox>
        )
    }
}