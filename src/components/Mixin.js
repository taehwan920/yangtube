import React from 'react';

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
}

export class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img width="30px" alt="YangTube 홈" src="./images/youtube_logo2.png" />
                <span className="logo__name">YangTube</span>
            </div>
        )
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <div><i class="fas fa-bars"></i></div>
        )
    }
}