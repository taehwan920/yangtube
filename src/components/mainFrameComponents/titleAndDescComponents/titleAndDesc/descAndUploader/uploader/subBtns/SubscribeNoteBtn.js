import React from 'react';
import styled from 'styled-components';
import NotePopUp from './subscribeNoteBtn/NotePopUp';

const NotificationIcon = styled.span`
    width: 40px;
    height: 40px;
    padding: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    position: relative;
`;

const SubsClickEffect = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 24px;
    height: 24px;
    top: 8px;
    left: 8px;
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.05s ease-in-out;

    &:active {
        transform: scale(1.5);
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

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
            this.setState({ popUp: false });
        }
    };

    render() {
        const { popUp } = this.state;
        return (
            <NotificationIcon
                ref={this.popUpRef}
                onClick={() => this.setState({ popUp: !this.state.popUp })}>
                <i class="far fa-bell"></i>
                <SubsClickEffect></SubsClickEffect>
                {popUp
                    ? <NotePopUp></NotePopUp>
                    : null}
            </NotificationIcon>
        )
    }
}