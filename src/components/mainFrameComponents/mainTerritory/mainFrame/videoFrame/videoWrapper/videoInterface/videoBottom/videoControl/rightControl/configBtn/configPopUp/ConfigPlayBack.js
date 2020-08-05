import React from 'react';
import { ConfigItem, ConfigItemIcon, ConfigText, ItemLeftBox, ItemRightBox } from '../ConfigPopUp';

export default class extends React.Component {
    getSpeedtxt = (arr, list) => {
        const newTxt = list[arr.indexOf(true)]
        return newTxt
    }

    render() {
        const {
            lang,
            togglePlayback,
            playbackArr,
            playbackList
        } = this.props;
        const {
            config
        } = lang.videoFrame.rightControl;
        return (
            <ConfigItem
                onClick={togglePlayback}
            >
                <ItemLeftBox>
                    {config.playback}
                </ItemLeftBox>
                <ItemRightBox>
                    <ConfigText>
                        {this.getSpeedtxt(playbackArr, playbackList) || config.normalSpeed}
                    </ConfigText>
                    <ConfigItemIcon>
                        <i class="fas fa-chevron-right"></i>
                    </ConfigItemIcon>
                </ItemRightBox>
            </ConfigItem>
        )
    }
}