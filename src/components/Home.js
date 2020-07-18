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
    height: ${props => (props.guideIsON ? '100vh' : '100%')};
    overflow: ${props => (props.guideIsON ? 'hidden' : 'none')};
    background-color: #F9F9F9;
    z-index: 1;
`;

export default class extends React.Component {
    state = {
        guideIsON: false
    };

    toggleGuide = () => {
        this.setState({ guideIsON: !this.state.guideIsON })
    };

    render() {
        const { guideIsON } = this.state;
        return (
            <HomeDiv guideIsON={guideIsON}>
                <Header
                    toggleGuide={this.toggleGuide}
                ></Header>
                <Guide
                    guideIsON={guideIsON}
                    toggleGuide={this.toggleGuide}
                ></Guide>
                <MainTerritory></MainTerritory>
                <VideoNavPC></VideoNavPC>
            </HomeDiv>
        )
    }
}