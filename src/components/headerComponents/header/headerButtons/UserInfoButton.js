import React from 'react';
import styled from 'styled-components';
import HeaderUserInfoPopUp from './HeaderUserInfoPopUp';

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
        if (this.props.userInfoON) {
            if (this.btnRef.current === null) { return; }
            if (this.btnRef && !this.btnRef.current.contains(e.target)) {
                this.props.popUpOff();
            }
        }
    };

    render() {
        const { onOff, userInfoON } = this.props;
        return (
            <UserInfoIcon
                ref={this.btnRef}
                onClick={onOff}
                draggable="true">
                G
                {(userInfoON)
                    ? <HeaderUserInfoPopUp
                        userInfoON={userInfoON}
                    ></HeaderUserInfoPopUp>
                    : null}
            </UserInfoIcon>
        )
    }
}