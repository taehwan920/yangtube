import React from 'react';
import { ConfigItem, ConfigItemIcon, ConfigText, ItemLeftBox, ItemRightBox } from '../ConfigPopUp';

export default class extends React.Component {
    render() {
        const { togglePlayBack } = this.props;
        return (
            <ConfigItem
                onClick={togglePlayBack}
            >
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