import React from 'react';
import styled, { keyframes } from 'styled-components';

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
    width: 20px;
    height: 14px;
    border: 2px solid white;
`;

const FullscreenBtn = styled(CommonBtn)`
`;

const FullAni = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
`;

const FullscreenIcon = styled.span`
    width: max-content;
    height: max-content;
    font-size: 18px;
    color: 18px;
    
    &:hover{
        animation: ${FullAni} 0.25s ease-in;
    }
`;

export default class extends React.Component {
    render() {
        return (
            <RightControlBox>
                <CaptionBtn>
                    <i class="far fa-closed-captioning"></i>
                </CaptionBtn>
                <ConfigBtn>
                    <i class="fas fa-cog"></i>
                </ConfigBtn>
                <TheaterBtn>
                    <TheaterRec />
                </TheaterBtn>
                <FullscreenBtn>
                    <FullscreenIcon>
                        <i class="fas fa-expand"></i>
                    </FullscreenIcon>
                </FullscreenBtn>
            </RightControlBox>
        )
    }
}