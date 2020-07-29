import React from 'react';
import VideoBottomGradient from './videoInterface/VideoBottomGradient';
import VideoBottom from './videoInterface/VideoBottom';
import VideoTopGradient from './videoInterface/VideoTopGradient';

export default class extends React.Component {
    render() {
        const {
            currentTime,
            getPlaySpeed,
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
            updateCurrent,
            contentData
        } = this.props;
        return (
            <React.Fragment>
                {videoActivated && document.fullscreenElement
                    ?
                    <VideoTopGradient
                        contentData={contentData}
                    />
                    : null}
                {videoActivated ? <VideoBottomGradient /> : null}
                <VideoBottom
                    currentTime={currentTime}
                    getPlaySpeed={getPlaySpeed}
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