import React from 'react';
import { AddVideoBtn, AddVideoBtnPlusIcon, ClickEffectHeader } from '../HeaderButtons';


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
        const {
            onOff,
            nightMode,
            theaterMode,
            themeColor,
        } = this.props;
        return (
            <AddVideoBtn
                ref={this.btnRef}
                onClick={onOff}
                nightMode={nightMode}
                theaterMode={theaterMode}
                themeColor={themeColor}
            >
                <i class="fas fa-video"></i>
                <AddVideoBtnPlusIcon
                    nightMode={nightMode}
                    theaterMode={theaterMode}
                    themeColor={themeColor}
                >
                    <i class="fas fa-plus"></i>
                </AddVideoBtnPlusIcon>
                <ClickEffectHeader />
            </AddVideoBtn>
        )
    }
}