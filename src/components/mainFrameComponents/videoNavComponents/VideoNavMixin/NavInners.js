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
    color: ${props => props.themeColor.normalFont};
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
    color: ${props => props.themeColor.normalFont};
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
    display: ${props => props.hovering ? 'flex' : 'none'};
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
            lang,
            langState,
            nextVideo,
            themeColor,
            toggleAutoPlay,
        } = this.props;
        const {
            hovering
        } = this.state;
        return (
            <React.Fragment>
                <NextVideoSection>
                    <NextVideoHeader>
                        <NextVideoText
                            themeColor={themeColor}
                        >
                            {lang.videoNav.nextVideo}
                        </NextVideoText>
                        <AutoPlayBox
                            onMouseOver={this.mouseOnAutoPlay}
                            onMouseLeave={this.outOfAutoPlay}
                        >
                            <AutoPlayTxt
                                themeColor={themeColor}
                            >
                                {lang.videoNav.autoPlay}
                            </AutoPlayTxt>
                            <ToggleSwitch
                                switchON={autoPlay}
                                switchFunc={toggleAutoPlay}
                            />
                            <AutoPlayDesc
                                hovering={hovering}
                            >
                                {lang.videoNav.autoPlayPopUp}
                            </AutoPlayDesc>
                        </AutoPlayBox>
                    </NextVideoHeader>
                    <VideoItem
                        hovering={hovering}
                        lang={lang}
                        langState={langState}
                        themeColor={themeColor}
                        video={nextVideo}
                    />
                </NextVideoSection>
                <MakeVideoItems
                    doubleRest={doubleRest}
                    hovering={hovering}
                    lang={lang}
                    langState={langState}
                    themeColor={themeColor}
                />
            </React.Fragment>
        )
    }
}