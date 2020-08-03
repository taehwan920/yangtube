import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from '../../../mixin/ToggleSwitch';
import MakeVideoItems from './navInners/MakeVideoItems';
import VideoItem from './navInners/makeVideoItems/VideoItem';

const NextVideoSection = styled.section`
    width: 100%;
    heigth: 145px;
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
`;

const NextVideoHeader = styled.header`
    width: 100%;
    height: 22px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
`;

const NextVideoText = styled.div`
    width: max-content;
    height: 20px;
    font-size: 16px;
`;

const AutoPlayBox = styled.div`
    width: max-content;
    height: 22px;
    display: flex;
    align-items: center;
    position: relative;
`;

const AutoPlayTxt = styled.span`
    width: max-content;
    height: 17px;
    margin-right: 8px;
    font-size: 13px;
`;

const AutoPlayDesc = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: max-content;
    height: max-content;
    padding: 4px 10px;
    border-radius: 2px;
    position: absolute;
    top: 150%;
    right: 0;
    opacity: ${props => props.hovering ? 1 : 0};
    font-size: 12px;
    color: white;
    transition: opacity 0.2s ease-out;
    cursor: default;
    z-index: 100;

    @media (max-width: 1023px) {
        top: -150%;
    }
`;

export default class extends React.Component {
    state = {
        hovering: false
    };

    mouseOnAutoPlay = () => {
        this.setState({ hovering: true });
    };

    outOfAutoPlay = () => {
        this.setState({ hovering: false });
    };

    render() {
        const {
            autoPlay,
            doubleRest,
            nextVideo,
            toggleAutoPlay,
        } = this.props;
        const {
            hovering
        } = this.state;
        return (
            <React.Fragment>
                <NextVideoSection>
                    <NextVideoHeader>
                        <NextVideoText>
                            다음 동영상
                        </NextVideoText>
                        <AutoPlayBox
                            onMouseOver={this.mouseOnAutoPlay}
                            onMouseLeave={this.outOfAutoPlay}
                        >
                            <AutoPlayTxt
                            >
                                자동재생
                            </AutoPlayTxt>
                            <ToggleSwitch
                                switchON={autoPlay}
                                switchFunc={toggleAutoPlay}
                            />
                            <AutoPlayDesc
                                hovering={hovering}
                            >
                                자동재생을 사용하도록 설정하면 추천 동영상이 자동으로 이어서 재생됩니다.
                            </AutoPlayDesc>
                        </AutoPlayBox>
                    </NextVideoHeader>
                    <VideoItem
                        video={nextVideo}
                    />
                </NextVideoSection>
                <MakeVideoItems
                    doubleRest={doubleRest}
                />
            </React.Fragment>
        )
    }
}