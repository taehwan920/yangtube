import React from 'react';
import { ConfigItem, ItemLeftBox, ItemRightBox } from '../ConfigPopUp';
import ConfigSwitch from './autoPlay/ConfigSwitch';

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            toggleAutoPlay,
        } = this.props;
        return (
            <ConfigItem>
                <ItemLeftBox>
                    자동재생
                </ItemLeftBox>
                <ItemRightBox>
                    <ConfigSwitch
                        switchON={autoPlay}
                        switchFunc={toggleAutoPlay}
                    />
                </ItemRightBox>
            </ConfigItem>
        )
    }
};