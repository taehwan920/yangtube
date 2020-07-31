import React from 'react';
import styled from 'styled-components';

const WatingWrapper = styled.div`
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 150;
`;

const NextThumbBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    blur: 0.8;
    transform: scale(1.1);
`;

const InterfaceBox = styled.section`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NextTxt = styled.span`

`;

const NextTitle = styled.span`

`;

const NextUploader = styled.span`

`;

const NextBtnBox = styled.div`
`;

const CancelBox = styled.div`

`;

const AutoPlayStoppedBox = styled.div`

`;

export default class extends React.Component {
    render() {
        return (
            <WatingWrapper>
                <InterfaceBox>

                </InterfaceBox>
            </WatingWrapper>
        )
    }
};