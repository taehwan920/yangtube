import React from 'react';
import { AppsBtn, ClickEffectHeader } from '../HeaderButtons';

export default class extends React.Component {
    render() {
        const { onOff, popUpSwitchON, popUps } = this.props;
        return (
            <AppsBtn onClick={() => {
                onOff();
                popUpSwitchON(popUps);
            }}>
                <i class="fas fa-th"></i>
                <ClickEffectHeader></ClickEffectHeader>
            </AppsBtn>
        )
    }
}