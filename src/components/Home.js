import React from 'react';
import Guide from './guideComponents/Guide';
import Header from './headerComponents/Header';
import MainFrame from './mainFrameComponents/MainFrame';

import styled from 'styled-components';

const HomeDiv = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #F9F9F9;
    z-index: auto;
`;

export default class extends React.Component {

    render() {

        return (
            <HomeDiv>
                <Header></Header>
                <Guide></Guide>
                <MainFrame></MainFrame>

            </HomeDiv>
        )
    }
}