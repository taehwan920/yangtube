import React from 'react';
import styled from 'styled-components';
import FullScreenBtn from './rightControl/FullScreenBtn';
import ConfigBtn from './rightControl/ConfigBtn';
import TheaterBtn from './rightControl/TheaterBtn';

const RightControlBox = styled.div`
    width: max-content;
    height: 36px;
    display: flex;
    align-items: center;
`;

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            getPlaySpeed,
            lang,
            theaterMode,
            toggleAutoPlay,
            toggleFullVF,
            toggleTheater,
        } = this.props;
        return (
            <RightControlBox>
                <ConfigBtn
                    autoPlay={autoPlay}
                    getPlaySpeed={getPlaySpeed}
                    lang={lang}
                    toggleAutoPlay={toggleAutoPlay}
                />
                <TheaterBtn
                    lang={lang}
                    theaterMode={theaterMode}
                    toggleTheater={toggleTheater}
                />
                <FullScreenBtn
                    lang={lang}
                    toggleFullVF={toggleFullVF}
                    toggleTheater={toggleTheater}
                />
            </RightControlBox>
        )
    }
}