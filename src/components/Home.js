import React from 'react';
import Header from './headerComponents/Header';
import VirtualKeyboard from './VirtualKeyboard';
import Guide from './guideComponents/Guide';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Guide></Guide>
                <main></main>
                <section></section>
                <section></section>
                <nav></nav>
                <VirtualKeyboard></VirtualKeyboard>
            </div>
        )
    }
}