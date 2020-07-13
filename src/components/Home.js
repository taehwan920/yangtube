import React from 'react';
import Guide from './guideComponents/Guide';
import Header from './headerComponents/Header';
import MainFrame from './mainFrameComponents/MainFrame';
import VirtualKeyboard from './VirtualKeyboard';

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