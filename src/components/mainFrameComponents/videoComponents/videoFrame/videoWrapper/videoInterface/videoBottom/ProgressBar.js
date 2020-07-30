import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
    width: 100%;
    height: 26px;
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

const TotalProgress = styled.div`
    background: #999999;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 1px;
    transition: all 0.08s linear;
    transform: ${props => props.scaleUp ? 'scaleY(1.6)' : 'scaleY(1)'};
`;

const HoverProgress = styled.div`
    width: max-content;
    position: absolute;
    bottom: 36px;
    opacity: ${props => props.hovering ? 1 : 0};
    font-size: 13px;
    color: white;
`;

const CurrentBall = styled.div`
    background: red;
    width: 5px;
    height: 3px;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    left: calc(${props => props.progressRate || 0}% - 1px);
    transition: all 0.1s linear;
    transform: ${props => props.scaleUp ? 'scale(2.75)' : 'scale(1)'};
`;

const CurrentProgress = styled.div`
    background: red;
    width: ${props => props.progressRate || 0}%;
    height: 3px;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: all 0.08s linear;
    transform: ${props => props.scaleUp ? 'scaleY(1.05)' : 'scaleY(1)'};
`;

export default class extends React.Component {
    state = {
        scaleUp: false,
    };

    componentDidMount() {
        document.addEventListener('mouseup', () => this.mouseDown = false);
    }

    makeBig = () => {
        this.setState({ scaleUp: true });
    };

    mouseOverInit = () => {
        this.hovering = true;
        this.makeBig();
    }

    mouseOutInit = () => {
        this.hovering = false;
        this.makeSmall();
    };

    makeSmall = () => {
        this.setState({ scaleUp: false });
    };

    mouseDown = false
    moveOnBar = e => {
        this.mouseDown && this.props.scrubCurrent(this.progressRef, this.props.vidDuration, e);
        this.hoverTime(e)
    };

    hovering;
    hoverMin;
    hoverSec;
    hoverTime = e => {
        this.hovering = true;
        const position = e.nativeEvent.offsetX / this.progressRef.offsetWidth * 100;
        if (position < 1.5 || position > 98.5) return;
        const hoverWidth = this.hoverRef.clientWidth / 2;
        this.hoverRef.style.left = `calc(${position}% - ${hoverWidth}px)`;
        const temp = parseInt(e.nativeEvent.offsetX / this.progressRef.offsetWidth * this.props.vidDuration);
        this.hoverMin = parseInt(temp / 60) < 10 ? `0${parseInt(temp / 60)}` : parseInt(temp / 60);
        this.hoverSec = parseInt(temp % 60) < 10 ? `0${parseInt(temp % 60)}` : parseInt(temp % 60);
    }

    render() {
        const { currentTime, vidDuration, updateCurrent } = this.props;
        const { scaleUp } = this.state;
        const progressRate = currentTime / vidDuration * 100;
        return (
            <ProgressContainer
                ref={ref => this.progressRef = ref}
                onMouseOver={this.mouseOverInit}
                onMouseOut={this.mouseOutInit}
                onClick={updateCurrent(this.progressRef, vidDuration)}
                onMouseDown={() => this.mouseDown = true}
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
                <HoverProgress
                    ref={ref => this.hoverRef = ref}
                    hovering={this.hovering}
                    progressRate={progressRate}
                >
                    {this.hoverMin}:{this.hoverSec}
                </HoverProgress>
            </ProgressContainer>
        )
    }
};