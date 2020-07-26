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

    componentDidUpdate() {
        this.playPause();
    }

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