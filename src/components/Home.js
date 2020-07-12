import React from 'react';
import Header from './header_comp/Header';

export default class extends React.Component {
    render() {
        return (
            <div className="home">
                안녕!
                <Header></Header>
                <aside></aside>
                <main></main>
                <section></section>
                <section></section>
                <nav></nav>
            </div>
        )
    }
}