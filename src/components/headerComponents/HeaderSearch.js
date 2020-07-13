import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section>
                <input placeholder="검색" type="text" />
                <div><i class="fas fa-keyboard"></i></div>
                <button><i class="fas fa-search"></i></button>
            </section>
        )
    }
}