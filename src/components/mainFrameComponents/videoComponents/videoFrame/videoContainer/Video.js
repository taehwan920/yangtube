import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
    width: 100%;
`;

export default class extends React.Component {
    playPause = () => {
        this.props.videoPaused
            ? this.vidRef['pause']()
            : this.vidRef['play']();
    }

    changeVolume = () => {
        this.vidRef.volume = this.props.volume;
    }

    toggleMuteVideo = () => {
        this.props.muted
            ? this.vidRef['muted'] = true
            : this.vidRef['muted'] = false;
    };

    componentDidUpdate() {
        this.changeVolume();
        this.toggleMuteVideo();
        this.playPause();
    };

    render() {
        const { getCurrent, getDuration } = this.props;
        return (
            <Video
                onLoadedData={getDuration}
                onTimeUpdate={getCurrent}
                ref={ref => this.vidRef = ref}
                src="./videos/dive.mp4" />
        )
    }
}