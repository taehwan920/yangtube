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
    height: ${props => (props.popUps ? '100vh' : '100%')};
    overflow: ${props => (props.guideIsON ? 'hidden' : 'none')};
    overflow: ${props => (props.popUps ? 'hidden' : 'none')};
    background-color: #F9F9F9;
    z-index: 1;
`;

export default class extends React.Component {
    state = {
        guideIsON: false,
        popUps: false,
        latest: null
    };

    toggleGuide = () => {
        this.setState({ guideIsON: !this.state.guideIsON })
    };

    popUpSwitchON = (stateType) => () => {
        if (this.state.latest === null || this.state.latest !== stateType) {
            this.setState({
                popUps: true,
                latest: stateType
            })
        } else {
            this.setState({
                popUps: false,
                latest: null
            })
        };
    };
    popUpSwitchOff = () => {
        this.setState({
            popUps: false,
            latest: null
        });
    };

    render() {
        const { guideIsON, popUps } = this.state;
        return (
            <HomeDiv
                guideIsON={guideIsON}
                popUps={popUps}
            >
                <Header
                    popUps={popUps}
                    popUpSwitchON={this.popUpSwitchON}
                    popUpSwitchOff={this.popUpSwitchOff}
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