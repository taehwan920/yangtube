import React from 'react';
import VideoBottomGradient from './videoInterface/VideoBottomGradient';
import VideoBottom from './videoInterface/VideoBottom';
import VideoTopGradient from './videoInterface/VideoTopGradient';

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            contentData,
            currentTime,
            getPlaySpeed,
            getVol,
            lang,
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
        } = this.props;
        return (
            <React.Fragment>
                {videoActivated && document.fullscreenElement
                    ?
                    <VideoTopGradient
                        contentData={contentData}
                    />
                    : null}
                {videoActivated
                    ?
                    <VideoBottomGradient
                        theaterMode={theaterMode}
                    />
                    : null}
                <VideoBottom
                    autoPlay={autoPlay}
                    contentData={contentData}
                    currentTime={currentTime}
                    getPlaySpeed={getPlaySpeed}
                    getVol={getVol}
                    lang={lang}
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
                />
            </React.Fragment>
        )
    }
}