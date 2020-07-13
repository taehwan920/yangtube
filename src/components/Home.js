import React from 'react';
import Header from './header_comp/Header';
import VirtualKeyboard from './VirtualKeyboard';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <aside></aside>
                <main></main>
                <section></section>
                <section></section>
                <nav></nav>
                <VirtualKeyboard></VirtualKeyboard>
            </div>
        )
    }
}