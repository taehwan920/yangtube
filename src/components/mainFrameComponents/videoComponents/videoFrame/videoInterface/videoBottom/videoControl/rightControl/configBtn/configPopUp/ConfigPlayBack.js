import React from 'react';
import styled from 'styled-components';
import { ConfigItem, ItemLeftBox, ItemRightBox } from '../ConfigPopUp';

const ConfigText = styled.span`
    margin-right: 4px;
`;

const ConfigItemIcon = styled.span`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class extends React.Component {
    render() {
        return (
            <ConfigItem>
                <ItemLeftBox>
                    재생 속도
                </ItemLeftBox>
                <ItemRightBox>
                    <ConfigText>
                        보통
                    </ConfigText>
                    <ConfigItemIcon>
                        <i class="fas fa-chevron-right"></i>
                    </ConfigItemIcon>
                </ItemRightBox>
            </ConfigItem>
        )
    }
}