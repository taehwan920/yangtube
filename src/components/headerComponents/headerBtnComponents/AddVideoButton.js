import React from 'react';
import { AddVideoBtn, AddVideoBtnPlusIcon, ClickEffectHeader } from '../HeaderButtons';


export default class extends React.Component {
    state = {

    }
    render() {
        return (
            <AddVideoBtn onClick={this.props.onOff}>
                <i class="fas fa-video"></i>
                <AddVideoBtnPlusIcon>
                    <i class="fas fa-plus"></i>
                </AddVideoBtnPlusIcon>
                <ClickEffectHeader clicked={this.props.clicked}></ClickEffectHeader>
            </AddVideoBtn>
        )
    }
}