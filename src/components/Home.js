import React from 'react';
import Guide from './guideComponents/Guide';
import Header from './headerComponents/Header';
import MainTerritory from './mainFrameComponents/MainTerritory';

import styled from 'styled-components';

const HomeDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: #F9F9F9;
    z-index: 1;
    height: ${props => (props.guideIsON ? '100vh' : 'max-content')};
    overflow: ${props => (props.guideIsON ? 'hidden' : 'none')};
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
            <HomeDiv
                guideIsON={guideIsON}
            >
                <Header
                    toggleGuide={this.toggleGuide}
                ></Header>
                <Guide
                    guideIsON={guideIsON}
                    toggleGuide={this.toggleGuide}
                ></Guide>
                <MainTerritory></MainTerritory>
            </HomeDiv>
        )
    }
}