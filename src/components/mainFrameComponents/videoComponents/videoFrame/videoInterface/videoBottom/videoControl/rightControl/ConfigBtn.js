import React from 'react';
import styled, { keyframes } from 'styled-components';
import ConfigPopUp from './configBtn/ConfigPopUp';

const ConfigON = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(60deg);
    }
`;

const ConfigOff = keyframes`
    from{
        transform: rotate(60deg);
    }
    to{
        transform: rotate(0deg);
    }
`;

const ConfigBtn = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const configIcon = styled.span`
    width: 36px;
    height: 36px;
    transform-origin: center;

    animation: ${props => props.activated ? ConfigON : ConfigOff} 0.3s linear;
`;

export default class extends React.Component {
    state = {
        activated: false
    }
    clickInit = e => {
        e.stopPropagation();
        this.setState({ activated: !this.state.activated });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    popUpRef = React.createRef();

    clickOutside = e => {
        if (this.popUpRef.current === null) { return; }
        if (this.popUpRef && !this.popUpRef.current.contains(e.target)) {
            this.turnOff();
        }
    };

    turnOff = () => {
        this.setState({ activated: false });
    }

    render() {

        const { activated } = this.state;
        return (
            <ConfigBtn
                ref={this.popUpRef}
                activated={activated}
                onClick={this.clickInit}
            >
                <configIcon>
                    <i class="fas fa-cog"></i>
                </configIcon>
                {activated
                    ? <ConfigPopUp />
                    : null}
            </ConfigBtn>
        )
    }
}