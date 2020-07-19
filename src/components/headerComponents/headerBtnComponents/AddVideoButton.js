import React from 'react';
import { AddVideoBtn, AddVideoBtnPlusIcon, ClickEffectHeader } from '../HeaderButtons';


export default class extends React.Component {
    render() {
        const { onOff, popUpSwitchON } = this.props;
        return (
            <AddVideoBtn onClick={() => {
                onOff();
                popUpSwitchON();
            }}>
                <i class="fas fa-video"></i>
                <AddVideoBtnPlusIcon>
                    <i class="fas fa-plus"></i>
                </AddVideoBtnPlusIcon>
                <ClickEffectHeader clicked={this.props.clicked}></ClickEffectHeader>
            </AddVideoBtn>
        )
    }
}