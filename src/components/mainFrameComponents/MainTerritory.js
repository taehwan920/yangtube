import React from 'react';
import styled from 'styled-components';
import MainDescription from './MainDescription';
import MainComments from './MainComments';
import VideoFrame from './videoComponents/VideoFrame';


const MainTerritory = styled.div`
    background-color: pink;
    margin-left: 82px;
    margin-top: 24px;
    margin-right: 24px;
    top: 56px;
    position: relative;
    height: 100vh;
    display: inline-block;
    z-index: 1;
`;


export default class extends React.Component {
    render() {
        return (
            <MainTerritory>
                <VideoFrame></VideoFrame>
                <MainDescription></MainDescription>
                <MainComments></MainComments>
            </MainTerritory>
        )
    }
}