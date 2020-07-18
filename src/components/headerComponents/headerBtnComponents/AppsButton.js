import React from 'react';
import { AppsBtn, ClickEffectHeader } from '../HeaderButtons';

export default class extends React.Component {
    render() {
        return (
            <AppsBtn onClick={this.props.onOff}>
                <i class="fas fa-th"></i>
                <ClickEffectHeader></ClickEffectHeader>
            </AppsBtn>
        )
    }
}