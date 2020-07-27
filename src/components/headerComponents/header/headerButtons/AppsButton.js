import React from 'react';
import { AppsBtn, ClickEffectHeader } from '../HeaderButtons';

export default class extends React.Component {
    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    btnRef = React.createRef();

    clickOutside = (e) => {
        if (this.props.appsON) {
            if (this.btnRef && !this.btnRef.contains(e.target)) {
                this.props.popUpOff();
            }
        }
    };

    render() {
        const { onOff } = this.props;
        return (
            <AppsBtn
                ref={this.btnRef}
                onClick={onOff}>
                <i class="fas fa-th"></i>
                <ClickEffectHeader></ClickEffectHeader>
            </AppsBtn>
        )
    }
}