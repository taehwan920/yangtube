import React from 'react';
import { AppsBtn, ClickEffectHeader } from '../HeaderButtons';

export default class extends React.Component {
    render() {
        const { onOff, popUpSwitchON } = this.props;
        return (
            <AppsBtn onClick={() => {
                onOff();
                popUpSwitchON();
            }}>
                <i class="fas fa-th"></i>
                <ClickEffectHeader></ClickEffectHeader>
            </AppsBtn>
        )
    }
}