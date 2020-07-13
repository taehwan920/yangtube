import React from 'react';
import VideoNav from '../videoNavComponents/VideoNav';
import MainVideoFrame from './MainVideoFrame';

export default class extends React.Component {
    render() {
        return (
            <main>
                메인 프레임
                <MainVideoFrame></MainVideoFrame>
                <VideoNav></VideoNav>
            </main>
        )
    }
}