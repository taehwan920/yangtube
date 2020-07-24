import React from 'react';
import { AppsBtn, ClickEffectHeader } from '../HeaderButtons';

export default class extends React.Component {
    render() {
        const { onOff } = this.props;
        return (
            <AppsBtn onClick={onOff}>
                <i class="fas fa-th"></i>
                <ClickEffectHeader></ClickEffectHeader>
            </AppsBtn>
        )
    }
}