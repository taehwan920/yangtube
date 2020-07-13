import React from 'react';
import Guide from './guideComponents/Guide';
import Header from './headerComponents/Header';
import MainFrame from './mainFrameComponents/MainFrame';
import VirtualKeyboard from './VirtualKeyboard';
import styled from 'styled-components';

const HomeDiv = styled.div`
    display: relative;
    width: 100%;
    height: 100%;
    background-color: pink;
`;

export default class extends React.Component {
    render() {
        return (
            <HomeDiv>
                <div>
                    <Header></Header>
                    <Guide></Guide>
                    <MainFrame></MainFrame>
                    <VirtualKeyboard></VirtualKeyboard>
                </div>
            </HomeDiv>
        )
    }
}