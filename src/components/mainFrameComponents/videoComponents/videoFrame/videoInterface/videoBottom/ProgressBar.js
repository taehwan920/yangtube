import React from 'react';
import styled, { css } from 'styled-components';

const ProgressContainer = styled.div`
    width: 100%;
    height: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 32.5px;
    cursor: pointer;
`;

const ProgressBox = styled.div`
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 6px;
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

const CurrentBall = styled.div`
    background: red;
    width: 4px;
    height: 3px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(${props => props.progressRate || 0}% - 1px);
    transition: all 0.1s linear;
    transform: ${props => props.scaleUp ? 'scale(3.2)' : 'scale(1)'};
`;

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

    mouseDown = false
    moveOnBar = e => {
        this.mouseDown && this.props.scrubCurrent(this.progressRef, this.props.vidDuration, e)
    }

    render() {
        const { currentTime, vidDuration, updateCurrent } = this.props;
        const { scaleUp } = this.state;
        const progressRate = currentTime / vidDuration * 100;
        return (
            <ProgressContainer
                ref={ref => this.progressRef = ref}
                onMouseOver={this.makeBig}
                onMouseOut={this.makeSmall}
                onClick={updateCurrent(this.progressRef, vidDuration)}
                onMouseDown={() => this.mouseDown = true}
                onMouseUp={() => this.mouseDown = false}
                onMouseMove={this.moveOnBar}
            >
                <ProgressBox>
                    <TotalProgress
                        scaleUp={scaleUp}
                    >
                        <CurrentProgress
                            scaleUp={scaleUp}
                            progressRate={progressRate}
                        />
                        <CurrentBall
                            scaleUp={scaleUp}
                            progressRate={progressRate}
                        />
                    </TotalProgress>
                </ProgressBox>
            </ProgressContainer>
        )
    }
}