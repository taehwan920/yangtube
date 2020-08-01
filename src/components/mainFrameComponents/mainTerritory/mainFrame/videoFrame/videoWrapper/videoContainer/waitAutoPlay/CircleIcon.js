import React from 'react';
import styled from 'styled-components';
import RotateCircle from './circleIcon/RotateCircle';

const NextBtnBox = styled.div`
    width: 64px;
    height: 64px;
    margin: 32px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const CircleBox = styled.div`
    width: 64px;
    height: 64px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterCircle = styled.div`
    background: rgba(255, 255, 255, 0.3);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const NextIcon = styled.span`
    font-size: 28px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class extends React.Component {
    render() {
        const {
            contentData
        } = this.props;
        return (
            <NextBtnBox>
                <CircleBox>
                    <CenterCircle>
                        <NextIcon>
                            <i class="fas fa-step-forward"></i>
                        </NextIcon>
                    </CenterCircle>
                    <RotateCircle
                        contentData={contentData}
                    />
                </CircleBox>
            </NextBtnBox>
        )
    }
};