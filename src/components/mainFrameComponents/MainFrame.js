import React from 'react';
import styled from 'styled-components';
import VideoNav from '../videoNavComponents/VideoNav';
import MainVideoFrame from './MainVideoFrame';

const MainFrameStyle = styled.div`
    background-color: pink;
    top: 56px;
    position: relative;
    z-index: 1;
`;

export default class extends React.Component {
    render() {
        return (
            <MainFrameStyle>
                메인 프레임
                <MainVideoFrame></MainVideoFrame>
                <VideoNav></VideoNav>
            </MainFrameStyle>
        )
    }
}