import React from 'react';
import VideoItem from './makeVideoItems/VideoItem';

export default class extends React.Component {
    render() {
        const {
            doubleRest,
            themeColor
        } = this.props;
        return (
            <React.Fragment>
                {doubleRest.map(video => {
                    return (
                        <VideoItem
                            video={video}
                            themeColor={themeColor}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};