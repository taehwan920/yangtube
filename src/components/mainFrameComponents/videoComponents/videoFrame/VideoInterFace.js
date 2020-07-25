import React from 'react';
// import styled from 'styled-components';
import VideoGradient from './videoInterface/VideoGradient';

export default class extends React.Component {
    render() {
        const { videoActivated } = this.props;
        return (
            <React.Fragment>
                {videoActivated ? <VideoGradient /> : null}
            </React.Fragment>
        )
    }
}