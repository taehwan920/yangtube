import React from 'react';
import { EllipsisIcon, TitleFunctionsItems, TitleInfoClickEffect } from '../TitleAndInfo';
import PopUp from './more/PopUp';

export default class extends React.Component {
    state = {
        popUp: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    popUpRef = React.createRef();

    clickOutside = e => {
        if (this.popUpRef.current === null) { return; }
        if (this.popUpRef && !this.popUpRef.current.contains(e.target)) {
            this.setState({ popUp: false })
        }
    };

    render() {
        const { popUp } = this.state;
        return (
            <TitleFunctionsItems
                ref={this.popUpRef}
                onClick={() => this.setState({ popUp: !this.state.popUp })}>
                <EllipsisIcon>
                    <i class="fas fa-ellipsis-h"></i>
                </EllipsisIcon>
                <TitleInfoClickEffect></TitleInfoClickEffect>
                {popUp
                    ? <PopUp></PopUp>
                    : null}
            </TitleFunctionsItems>
        )
    }
}