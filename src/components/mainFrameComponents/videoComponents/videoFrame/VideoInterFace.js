import React from 'react';
import VideoGradient from './videoInterface/VideoGradient';
import VideoBottom from './videoInterface/VideoBottom';

export default class extends React.Component {
    render() {
        const { currentTime,
            vidDuration,
            theaterMode,
            toggleTheater,
            pauseVideo,
            videoActivated,
            videoPaused } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
                <VideoBottom
                    currentTime={currentTime}
                    vidDuration={vidDuration}
                    theaterMode={theaterMode}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    videoActivated={videoActivated}
                    videoPaused={videoPaused}
                />
            </React.Fragment>
        )
    }
}