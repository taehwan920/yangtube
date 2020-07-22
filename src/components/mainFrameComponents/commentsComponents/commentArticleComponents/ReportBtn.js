import React from 'react';
import styled from 'styled-components';

const ReportWrapper = styled.div`
    width: 40px;
    height: 100%;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
`;

const ReportIconBox = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
`;

export default class extends React.Component {
    render() {
        return (
            <ReportWrapper>
                <ReportIconBox>
                    <i class="fas fa-ellipsis-v"></i>
                </ReportIconBox>
            </ReportWrapper>
        )
    }
}