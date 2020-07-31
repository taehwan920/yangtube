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
`;

const AutoPlayTxt = styled.span`
    width: max-content;
    height: 17px;
    margin-right: 8px;
    font-size: 13px;
`;

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            doubleRest,
            nextVideo,
            toggleAutoPlay,
        } = this.props;
        return (
            <React.Fragment>
                <NextVideoSection>
                    <NextVideoHeader>
                        <NextVideoText>
                            다음 동영상
                        </NextVideoText>
                        <AutoPlayBox>
                            <AutoPlayTxt
                            >
                                자동재생
                            </AutoPlayTxt>
                            <ToggleSwitch
                                switchON={autoPlay}
                                switchFunc={toggleAutoPlay}
                            />
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