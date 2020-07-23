import React from 'react';
import { EllipsisIcon, TitleFunctionsItems, TitleInfoClickEffect } from '../TitleAndInfo';
import PopUp from './more/PopUp';

export default class extends React.Component {
    state = {
        popUp: false
    }
    render() {
        const { popUp } = this.state;
        return (
            <TitleFunctionsItems onClick={() => this.setState({ popUp: true })}>
                <EllipsisIcon>
                    <i class="fas fa-ellipsis-h"></i>
                </EllipsisIcon>
                <TitleInfoClickEffect></TitleInfoClickEffect>
                {popUp
                    ? <PopUp
                        popUpOff={() => this.setState({ popUp: false })}
                    ></PopUp>
                    : null}
            </TitleFunctionsItems>
        )
    }
}