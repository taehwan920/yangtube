import React from 'react';
import VideoBottomGradient from './videoInterface/VideoBottomGradient';
import VideoBottom from './videoInterface/VideoBottom';
import VideoTopGradient from './videoInterface/VideoTopGradient';

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            currentTime,
            getPlaySpeed,
            getVol,
            muted,
            scrubCurrent,
            theaterMode,
            toggleAutoPlay,
            toggleFullVF,
            toggleMute,
            toggleTheater,
            pauseVideo,
            videoActivated,
            vidDuration,
            videoEnded,
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
                    autoPlay={autoPlay}
                    currentTime={currentTime}
                    getPlaySpeed={getPlaySpeed}
                    getVol={getVol}
                    muted={muted}
                    scrubCurrent={scrubCurrent}
                    theaterMode={theaterMode}
                    toggleAutoPlay={toggleAutoPlay}
                    toggleFullVF={toggleFullVF}
                    toggleMute={toggleMute}
                    toggleTheater={toggleTheater}
                    pauseVideo={pauseVideo}
                    vidDuration={vidDuration}
                    videoActivated={videoActivated}
                    videoEnded={videoEnded}
                    videoPaused={videoPaused}
                    volume={volume}
                    updateCurrent={updateCurrent}
                    contentData={contentData}
                />
            </React.Fragment>
        )
    }
}