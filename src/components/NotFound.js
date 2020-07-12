import React from 'react';
import { ChangeTitle } from './Mixin';

export default class extends React.Component {
    render() {
        ChangeTitle('404 Not Found');
        return (
            <main className="not-found">
                <img alt="Not Found!" src="../images/not_found.png"></img>
                Not Found!
            </main>
        )
    }
}