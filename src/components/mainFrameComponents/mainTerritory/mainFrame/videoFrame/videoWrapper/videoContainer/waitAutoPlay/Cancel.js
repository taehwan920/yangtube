import React from 'react';
import styled from 'styled-components';

const CancelBox = styled.div`
    width: max-content;
    height: max-content;
    padding: 12px 24px;
    border-radius: 2px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover{
        background: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 849px) {
        padding: 6px 12px;
        margin-bottom: 0px;
    }
`;

const CancelTxt = styled.span`
    font-size: 16px;
    color: white;

    @media (max-width: 849px) {
        font-size: 12px;
    }
`;

export default class extends React.Component {
    clickCancel = e => {
        e.stopPropagation();
        this.props.activateRecommend();
    }
    render() {
        const {
            lang,
        } = this.props;
        return (
            <CancelBox
                onClick={this.clickCancel}
            >
                <CancelTxt>
                    {lang.videoFrame.waitAutoPlay.waitCancel}
                </CancelTxt>
            </CancelBox>
        )
    }
}