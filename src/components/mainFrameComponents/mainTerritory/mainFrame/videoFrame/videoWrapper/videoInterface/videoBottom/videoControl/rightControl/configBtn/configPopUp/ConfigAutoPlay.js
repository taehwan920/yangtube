import React from 'react';
import { ConfigItem, ItemLeftBox, ItemRightBox } from '../ConfigPopUp';
import ConfigSwitch from './autoPlay/ConfigSwitch';

export default class extends React.Component {
    render() {
        const {
            autoPlay,
            lang,
            toggleAutoPlay,
        } = this.props;
        return (
            <ConfigItem>
                <ItemLeftBox>
                    {lang.videoFrame.rightControl.config.autoPlay}
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