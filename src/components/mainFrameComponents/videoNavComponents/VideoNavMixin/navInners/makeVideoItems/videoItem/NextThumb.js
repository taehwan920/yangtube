import React from 'react';
import styled from 'styled-components';

const NextVidThumbnail = styled.img`
    width: 100%;
`;

export default class extends React.Component {

    render() {
        const {
            video
        } = this.props;
        return (
            <React.Fragment>
                <NextVidThumbnail
                    src={video.thumbnailUrl}
                />
            </React.Fragment>
        )
    }
};