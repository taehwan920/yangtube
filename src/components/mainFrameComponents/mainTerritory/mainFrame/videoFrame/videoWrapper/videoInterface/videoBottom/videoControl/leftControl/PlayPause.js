import React from 'react';
import styled from 'styled-components';

const PlayButton = styled.span`
    width: 46px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
`;

const PauseButton = styled(PlayButton)`
    font-size: 16px;
`;

const ReplayButton = styled(PlayButton)``;


const InfoPopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    left: 0px;
    display: ${props => props.hovering ? 'flex' : 'none'};
`;

const InfoPopUp = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: white;
`;

export default class extends React.Component {
    state = {
        hovering: false
    };

    isHovering = e => {
        this.setState({ hovering: true })
    };
    notHovering = e => {
        this.setState({ hovering: false })
    };

    judgeIcon = () => {
        const {
            lang,
            pauseVideo,
            videoEnded,
            videoPaused
        } = this.props;
        const {
            hovering
        } = this.state;
        const {
            isHovering,
            notHovering
        } = this;
        const {
            playPause
        } = lang.videoFrame.leftControl;
        if (videoPaused && videoEnded) {
            return (
                <ReplayButton
                    onClick={pauseVideo}
                    onMouseEnter={isHovering}
                    onMouseLeave={notHovering}
                >
                    <i class="fas fa-undo"></i>
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            {playPause.replay}
                        </InfoPopUp>
                    </InfoPopUpBox>
                </ReplayButton>
            )
        }
        if (videoPaused) {
            return (
                <PlayButton
                    onClick={pauseVideo}
                    onMouseEnter={isHovering}
                    onMouseLeave={notHovering}
                >
                    <i class="fas fa-play"></i>
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            {`${playPause.play}(space)`}
                        </InfoPopUp>
                    </InfoPopUpBox>
                </PlayButton>
            )
        }
        return (
            <PauseButton
                onClick={pauseVideo}
                onMouseEnter={isHovering}
                onMouseLeave={notHovering}
            >
                <i class="fas fa-pause"></i>
                <InfoPopUpBox
                    hovering={hovering}
                >
                    <InfoPopUp>
                        {`${playPause.pause}(space)`}
                    </InfoPopUp>
                </InfoPopUpBox>
            </PauseButton>
        )
    };

    render() {
        return (
            <React.Fragment>
                {this.judgeIcon()}
            </React.Fragment>
        )
    }
};