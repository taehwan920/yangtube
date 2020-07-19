import React from 'react';
import { AddVideoBtn, AddVideoBtnPlusIcon, ClickEffectHeader } from '../HeaderButtons';


export default class extends React.Component {
    render() {
        const { onOff, popUpSwitchON, popUps } = this.props;
        return (
            <AddVideoBtn onClick={() => {
                onOff();
                popUpSwitchON(popUps);
            }}>
                <i class="fas fa-video"></i>
                <AddVideoBtnPlusIcon>
                    <i class="fas fa-plus"></i>
                </AddVideoBtnPlusIcon>
                <ClickEffectHeader></ClickEffectHeader>
            </AddVideoBtn>
        )
    }
}