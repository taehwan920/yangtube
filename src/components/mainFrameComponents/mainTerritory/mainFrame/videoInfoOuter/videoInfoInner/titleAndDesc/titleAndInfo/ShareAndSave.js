import React from 'react';
import styled from 'styled-components';
import {
    TitleFunctionsItems,
    TitleFunctionsTexts
} from '../TitleAndInfo';

const TitleFunctionsIcons = styled.span`
    width: 36px;
    height: 36px;
    padding: 8px;
    font-size: 16px;
    line-height: 24px;
`;

const ShareAndSaveEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 8px;
    left: 4px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export default class extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleFunctionsItems>
                    <TitleFunctionsIcons>
                        <i class="fas fa-share"></i>
                        <ShareAndSaveEffect />
                    </TitleFunctionsIcons>
                    <TitleFunctionsTexts>
                        공유
                        </TitleFunctionsTexts>
                </TitleFunctionsItems>
                <TitleFunctionsItems>
                    <TitleFunctionsIcons>
                        <i class="fas fa-folder-plus"></i>
                        <ShareAndSaveEffect />
                    </TitleFunctionsIcons>
                    <TitleFunctionsTexts>
                        저장
                        </TitleFunctionsTexts>
                </TitleFunctionsItems>
            </React.Fragment>
        )
    }
}