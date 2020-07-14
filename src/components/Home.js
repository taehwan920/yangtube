import React from 'react';
import Guide from './guideComponents/Guide';
import Header from './headerComponents/Header';
import MainTerritory from './mainFrameComponents/MainTerritory';
import VideoNavPC from './VideoNavPC';

import styled from 'styled-components';

const HomeDiv = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #F9F9F9;
    z-index: auto;
`;

export default class extends React.Component {

    render() {

        return (
            <HomeDiv>
                <Header></Header>
                <Guide></Guide>
                <MainTerritory></MainTerritory>
                <VideoNavPC></VideoNavPC>
            </HomeDiv>
        )
    }
}