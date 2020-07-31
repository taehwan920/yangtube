import React from 'react';
import styled from 'styled-components';
import ConfigAutoPlay from './configPopUp/ConfigAutoPlay';
import ConfigPlayBack from './configPopUp/ConfigPlayBack';

const ConfigPopUpWrapper = styled.section`
    background: #252525;
    width: 251px;
    height: ${props => props.playbackActive ? '400px' : '96px'};
    border-radius: 2px;
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
    bottom: 49px;
    right: 0px;
    z-index: 71;
    transition: height 0.2s ease-out;
`;

const ConfigPopUpBox = styled.div`
    width: 502px;
    height: 400px;
    position: absolute;
    bottom: 8px;
    display: flex;
    align-items: flex-end;
    transition: transform 0.18s linear;
    transform: ${props => props.playbackActive ? 'translate(-125.5px, 0px)' : 'translate(125.5px, 0px)'}
`;

const ConfigItemHeadPart = styled.div`
    width: 251px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ConfigItemTailPart = styled.div`
    width: 251px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ConfigItem = styled.article`
    width: 100%;
    height: 40px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: white;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const ItemLeftBox = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ItemRightBox = styled.div`
    width: max-content;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ConfigItemIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConfigText = styled.span`
    margin-right: 4px;
`;

const ConfigTailHeader = styled.header`
    width: 100%;
    height: 51px;
    padding-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: white;
`;

const PlaybackCheckBox = styled.div`
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    opacity: ${props => props.checkOrNot ? 1 : 0};
`;

export default class extends React.Component {
    state = {
        playbackActive: false,
        playbackArr: [false, false, false, true, false, false, false, false]
    };

    playbackList = [0.25, 0.5, 0.75, '보통', 1.25, 1.5, 1.75, 2.0];

    togglePlayback = () => {
        this.setState({ playbackActive: !this.state.playbackActive });
    };

    selectPlayback = idx => () => {
        const sampleArr = [false, false, false, false, false, false, false, false];
        const newSpeed = typeof (this.playbackList[idx]) === 'string' ? 1.0 : this.playbackList[idx];
        sampleArr[idx] = true;
        this.setState({
            playbackActive: false,
            playbackArr: sampleArr,
        });
        this.props.getPlaySpeed(newSpeed);
    };

    render() {
        const {
            autoPlay,
            toggleAutoPlay,
        } = this.props;
        const {
            playbackActive,
            playbackArr
        } = this.state;
        return (
            <ConfigPopUpWrapper
                ref={ref => this.popUp = ref}
                playbackActive={playbackActive}
            >
                <ConfigPopUpBox
                    playbackActive={playbackActive}
                >
                    <ConfigItemHeadPart
                        ref={ref => this.headRef = ref}
                    >
                        <ConfigAutoPlay
                            autoPlay={autoPlay}
                            toggleAutoPlay={toggleAutoPlay}
                        />
                        <ConfigPlayBack
                            togglePlayback={this.togglePlayback}
                            playbackArr={playbackArr}
                            playbackList={this.playbackList}
                        />
                    </ConfigItemHeadPart>
                    <ConfigItemTailPart
                        ref={ref => this.tailRef = ref}
                    >
                        <ConfigTailHeader
                            onClick={this.togglePlayback}
                        >
                            <ConfigItemIcon>
                                <i class="fas fa-chevron-left"></i>
                            </ConfigItemIcon>
                            <ConfigText>재생 속도</ConfigText>
                        </ConfigTailHeader>
                        {this.playbackList.map(item => {
                            const itemIdx = this.playbackList.indexOf(item);
                            return (
                                <ConfigItem onClick={this.selectPlayback(itemIdx)}>
                                    <ItemLeftBox>
                                        <PlaybackCheckBox
                                            checkOrNot={playbackArr[itemIdx]}
                                        >
                                            <i class="fas fa-check"></i>
                                        </PlaybackCheckBox>
                                        <span>{item}</span>
                                    </ItemLeftBox>
                                </ConfigItem>
                            )
                        })}
                    </ConfigItemTailPart>
                </ConfigPopUpBox>
            </ConfigPopUpWrapper>
        )
    }
};