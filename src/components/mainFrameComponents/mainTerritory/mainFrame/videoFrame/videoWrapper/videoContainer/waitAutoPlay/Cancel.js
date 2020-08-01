import React from 'react';
import styled from 'styled-components';

const CancelBox = styled.div`
    width: max-content;
    height: max-content;
    padding: 12px 24px;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover{
        background: rgba(255, 255, 255, 0.15);
    }
`;

const CancelTxt = styled.span`
    font-size: 16px;
    color: white;
`;

export default class extends React.Component {
    render() {
        return (
            <CancelBox>
                <CancelTxt>
                    취소
                </CancelTxt>
            </CancelBox>
        )
    }
}