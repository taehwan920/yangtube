import React from 'react';
import styled from 'styled-components';

const TimeDisplayBox = styled.div`
    width: max-content;
    height: 36px;
    padding: 0px 5px;
    display: flex;
    justify-content: center;
`;

const TimeTextBox = styled.div`
    display:flex;
    align-items: center;
    line-height: 22px;
`;

const TimeText = styled.span`
    color: white;
    font-size: 13px;
`;

const TimeSlash = styled(TimeText)`
    margin: 0px 5px;
`;

export default class extends React.Component {
    render() {
        const { currentTime, vidDuration } = this.props;
        const curMin = parseInt(currentTime / 60) < 10 ? `0${parseInt(currentTime / 60)}` : parseInt(currentTime / 60);
        const curSec = parseInt(currentTime % 60) < 10 ? `0${parseInt(currentTime % 60)}` : parseInt(currentTime % 60);
        const duMin = parseInt(vidDuration / 60) < 10 ? `0${parseInt(vidDuration / 60)}` : parseInt(vidDuration / 60);
        const duSec = parseInt(vidDuration % 60) < 10 ? `0${parseInt(vidDuration % 60)}` : parseInt(vidDuration % 60);
        return (
            <TimeDisplayBox>
                <TimeTextBox>
                    <TimeText>
                        {curMin}:{curSec}
                    </TimeText>
                    <TimeSlash>
                        /
                    </TimeSlash>
                    <TimeText>
                        {duMin}:{duSec}
                    </TimeText>
                </TimeTextBox>
            </TimeDisplayBox>
        )
    }
}