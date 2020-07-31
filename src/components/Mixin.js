import React from 'react';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
};

export const toggleGuide = () => {
    const guide = document.querySelector('.guide-wrapper');
    guide.classList.toggle('move');
};

export function debounce(func, wait = 15, immediate = false) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const shuffle = arr => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
};

export class NotCreated extends React.Component {
    render() {
        return (
            <div>
                <span>해당 기능은 구현하지 않았습니다.</span>
                <span>사유: 서버 부재</span>
            </div>
        )
    }
};