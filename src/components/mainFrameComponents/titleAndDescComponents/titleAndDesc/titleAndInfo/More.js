import React from 'react';
import { EllipsisIcon, TitleFunctionsItems, TitleInfoClickEffect } from '../TitleAndInfo';
import MorePopUp from './more/MorePopUp';

export default class extends React.Component {
    state = {
        popUp: true
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
                    ? <MorePopUp
                        popUpOff={() => this.setState({ popUp: false })}
                    ></MorePopUp>
                    : null}
            </TitleFunctionsItems>
        )
    }
}