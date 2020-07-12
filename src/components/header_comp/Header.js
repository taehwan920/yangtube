import React from 'react';
import { ChangeTitle, Logo } from '../Mixin';

export default class extends React.Component {
    render() {
        ChangeTitle('Main Page!');
        return (
            <header className="header">
                <div></div>
                <Logo></Logo>
                <section>
                    <input type="text" />
                    <button></button>
                </section>
            </header>
        )
    }
}