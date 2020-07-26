import React from 'react';
import VideoGradient from './videoInterface/VideoGradient';
import VideoBottom from './videoInterface/VideoBottom';

export default class extends React.Component {
    render() {
        const { currentTime,
            getVol,
            theaterMode,
            toggleTheater,
            pauseVideo,
            vidDuration,
            videoActivated,
            videoPaused,
            volume
        } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
                <VideoBottom
                    currentTime={currentTime}
                    getVol={getVol}
                    theaterMode={theaterMode}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoActivated={videoActivated}
                    videoPaused={videoPaused}
                    volume={volume}
                />
            </React.Fragment>
        )
    }
}