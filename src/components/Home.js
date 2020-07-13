import React from 'react';
import Header from './headerComponents/Header';
import VirtualKeyboard from './VirtualKeyboard';
import Guide from './guideComponents/Guide';
import MainFrame from './mainFrameComponents/MainFrame';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Guide></Guide>
                <MainFrame></MainFrame>
                <VirtualKeyboard></VirtualKeyboard>
            </div>
        )
    }
}