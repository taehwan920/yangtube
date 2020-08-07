import React from 'react';
import VideoItem from './makeVideoItems/VideoItem';

export default class extends React.Component {
    key = 0;
    render() {
        const {
            doubleRest,
            lang,
            langState,
            themeColor,
        } = this.props;
        return (
            <React.Fragment>
                {doubleRest.map(video => {
                    this.key++
                    return (
                        <VideoItem
                            lang={lang}
                            langState={langState}
                            themeColor={themeColor}
                            video={video}
                            key={this.key}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};