import React from 'react';
import styled, { css } from 'styled-components';

const ProgressContainer = styled.div`
    width: 100%;
    height: 18px;
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 34.5px;
    cursor: pointer;
`;

const ProgressBox = styled.div`
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 4px;
`;

const hoverAni = css`
    transition: all 0.1s linear;
    transform: ${props => props.scaleUp ? 'scaleY(1.35)' : 'scaleY(1)'};
`;

const TotalProgress = styled.div`
    background: #999999;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 1px;
    ${hoverAni}
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
    width: ${props => props.progressRate || 0}%;
    height: 3px;
    position: absolute;
    top: 0px;
    left: 0px;
    ${hoverAni}
`;

export default class extends React.Component {
    state = {
        scaleUp: false
    }

    makeBig = () => {
        this.setState({ scaleUp: true });
    }
    makeSmall = () => {
        this.setState({ scaleUp: false });
    }

    render() {
        const { currentTime, vidDuration } = this.props;
        const { scaleUp } = this.state;
        const progressRate = currentTime / vidDuration * 100;
        return (
            <ProgressContainer
                onMouseOver={this.makeBig}
                onMouseOut={this.makeSmall}
            >
                <ProgressBox>
                    <TotalProgress
                        scaleUp={scaleUp}
                    >
                        <CurrentProgress
                            scaleUp={scaleUp}
                            progressRate={progressRate}
                        />
                    </TotalProgress>
                </ProgressBox>
            </ProgressContainer>
        )
    }
}