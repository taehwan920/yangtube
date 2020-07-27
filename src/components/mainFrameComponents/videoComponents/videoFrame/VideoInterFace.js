import React from 'react';
import VideoGradient from './videoInterface/VideoGradient';
import VideoBottom from './videoInterface/VideoBottom';

export default class extends React.Component {
    render() {
        const { currentTime,
            getVol,
            muted,
            scrubCurrent,
            theaterMode,
            toggleFullVF,
            toggleMute,
            toggleTheater,
            pauseVideo,
            vidDuration,
            videoActivated,
            videoPaused,
            volume,
            updateCurrent
        } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
                <VideoBottom
                    currentTime={currentTime}
                    getVol={getVol}
                    muted={muted}
                    scrubCurrent={scrubCurrent}
                    theaterMode={theaterMode}
                    toggleFullVF={toggleFullVF}
                    toggleMute={toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoActivated={videoActivated}
                    videoPaused={videoPaused}
                    volume={volume}
                    updateCurrent={updateCurrent}
                />
            </React.Fragment>
        )
    }
}