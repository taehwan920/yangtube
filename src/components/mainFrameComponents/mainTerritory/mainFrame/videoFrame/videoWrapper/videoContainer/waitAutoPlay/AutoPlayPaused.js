import React from 'react';
import styled from 'styled-components';

const AutoPlayStoppedBox = styled.div`
    opacity: ${props => props.canceledByScroll ? 1 : 0};
    width: max-content;
    height: max-content;
    font-size: 14px;
    font-style: italic;
    color: white;

    @media (max-width: 849px) {
        font-size: 12px;
    }
`;

export default class extends React.Component {
    render() {
        const {
            canceledByScroll,
            lang,
        } = this.props;
        return (
            <AutoPlayStoppedBox
                canceledByScroll={canceledByScroll}
            >
                {lang.videoFrame.waitAutoPlay.autoPlayPaused}
            </AutoPlayStoppedBox>
        )
    }
};