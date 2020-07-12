import React from 'react';

export const ChangeTitle = (str) => {
    document.title = str
}

export class MyTubeLogo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img alt="logo" src="./images/youtube_logo2.png" />
                <span className="logo__name">MyTube</span>
            </div>
        )
    }
}