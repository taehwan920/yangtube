import React from 'react';
import VideoItem from './makeVideoItems/VideoItem';

export default class extends React.Component {
    render() {
        const {
            doubleRest,
            lang,
            langState,
            themeColor
        } = this.props;
        return (
            <React.Fragment>
                {doubleRest.map(video => {
                    return (
                        <VideoItem
                            lang={lang}
                            langState={langState}
                            themeColor={themeColor}
                            video={video}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};