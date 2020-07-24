import React from 'react';
import styled from 'styled-components';
import { reportFixed } from '../../../../DB';

const PopUpWrapper = styled.div`
    background-color: white;
    width: max-content;
    height: 52px;
    padding: 8px 0px;
    border-radius: 3px;
    position: absolute;
    top: 35px;
    left: 5px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
    z-index: 26;

    @media(max-width: 1023px) {
        left: -85px;
    }
`;

const PopUpItem = styled.div`
    width: 100%;
    height: 36px;
    padding: 0px 30px 0px 22px;
    display: flex;
    align-items: center;

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`;

const ReportIcon = styled.span`
    width: 24px;
    height: 24px;
    font-size: 20px;
    margin-right: 16px;
`;

const ReportTxt = styled.span`
    width: max-content;
    height: 21px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
`;

export default class extends React.Component {
    render() {
        return (
            <PopUpWrapper>
                <PopUpItem>
                    <ReportIcon>
                        <i class="fas fa-flag"></i>
                    </ReportIcon>
                    <ReportTxt>
                        {reportFixed.text}
                    </ReportTxt>
                </PopUpItem>
            </PopUpWrapper>
        )
    }
}