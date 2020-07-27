import React from 'react';
import styled from 'styled-components';
import FullScreenBtn from './rightControl/FullScreenBtn';

const RightControlBox = styled.div`
    width: max-content;
    height: 36px;
    display: flex;
    align-items: center;
`;

const CommonBtn = styled.span`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const CaptionBtn = styled(CommonBtn)`
    font-size: 20px;
`;

const ConfigBtn = styled(CommonBtn)`
`;

const TheaterBtn = styled(CommonBtn)`
`;

const TheaterRec = styled.div`
    width: ${props => props.theaterMode ? '16px' : '20px'};
    height: ${props => props.theaterMode ? '10px' : '14px'};
    border: 2px solid white;
`;

export default class extends React.Component {
    render() {
        const { theaterMode, toggleTheater } = this.props;
        return (
            <RightControlBox>
                <CaptionBtn>
                    <i class="far fa-closed-captioning"></i>
                </CaptionBtn>
                <ConfigBtn>
                    <i class="fas fa-cog"></i>
                </ConfigBtn>
                <TheaterBtn
                    onClick={toggleTheater}>
                    <TheaterRec
                        theaterMode={theaterMode} />
                </TheaterBtn>
                <FullScreenBtn />
            </RightControlBox>
        )
    }
}