import React from 'react';
import styled from 'styled-components';
import ThumbLoading from './ThumbLoading';

const NextVidThumbnail = styled.img`
    width: 100%;
`;

export default class extends React.Component {
    state = {
        loaded: false,
    };
    endLoading = () => {
        console.log(this.state.loaded);
        this.setState({ loaded: true });
    };

    render() {
        const {
            video
        } = this.props;
        const {
            loaded
        } = this.state;
        return (
            <React.Fragment>
                <NextVidThumbnail
                    src={video.thumbnailUrl}
                    onLoad={this.endLoading}
                />
                {loaded ? null : <ThumbLoading />}
            </React.Fragment>
        )
    }
};