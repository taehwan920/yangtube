import React from 'react';
import Guide from './guideComponents/Guide';
import Header from './headerComponents/Header';
import MainFrame from './mainFrameComponents/MainFrame';
import VirtualKeyboard from './VirtualKeyboard';
import styled from 'styled-components';

const HomeDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 12px;
    background-color: #F9F9F9;
`;

export default class extends React.Component {
    render() {
        return (
            <HomeDiv>
                <Header></Header>
                <Guide></Guide>
                <MainFrame></MainFrame>
                <VirtualKeyboard></VirtualKeyboard>
            </HomeDiv>
        )
    }
}