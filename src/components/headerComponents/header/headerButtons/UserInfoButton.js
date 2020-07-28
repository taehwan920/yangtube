import React from 'react';
import styled from 'styled-components';

const UserInfoIcon = styled.div`
    background-color: #AA47BC;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    z-index: 25;
`;

export default class extends React.Component {
    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    btnRef = React.createRef();

    clickOutside = (e) => {
        const { userInfoRef } = this.props;
        if (this.props.userInfoON) {
            if (this.btnRef && !this.btnRef.current.contains(e.target)) {
                if (userInfoRef.current && !userInfoRef.current.UIPopUpRef.contains(e.target)) {
                    this.props.popUpOff();
                }
            }
        }
    };

    render() {
        const { onOff } = this.props;
        return (
            <UserInfoIcon
                ref={this.btnRef}
                onClick={onOff}
                draggable="true">
                G
            </UserInfoIcon>
        )
    }
}