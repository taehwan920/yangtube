import React from 'react';
import { AddVideoBtn, AddVideoBtnPlusIcon, ClickEffectHeader } from '../HeaderButtons';
import HeaderAddVideoPopUp from './HeaderAddVideoPopUp';


export default class extends React.Component {
    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    btnRef = React.createRef();

    clickOutside = (e) => {
        if (this.props.addVideoON) {
            if (this.btnRef && !this.btnRef.current.contains(e.target)) {
                this.props.popUpOff();
            }
        }
    };

    render() {
        const { addVideoON, onOff } = this.props;
        return (
            <AddVideoBtn
                ref={this.btnRef}
                onClick={onOff}>
                <i class="fas fa-video"></i>
                <AddVideoBtnPlusIcon>
                    <i class="fas fa-plus"></i>
                </AddVideoBtnPlusIcon>
                <ClickEffectHeader></ClickEffectHeader>
                {(addVideoON)
                    ? <HeaderAddVideoPopUp
                        addVideoON={addVideoON}
                    ></HeaderAddVideoPopUp>
                    : null}
            </AddVideoBtn>
        )
    }
}