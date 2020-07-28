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

const ConfigIcon = styled.span`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;

    animation: ${props => props.configActivated ? ConfigON : ConfigOff} 0.3s linear;
`;

export default class extends React.Component {
    state = {
        configActivated: true,
    }
    clickInit = e => {
        e.stopPropagation();
        if (this.iconRef && this.iconRef.current.contains(e.target)) {
            this.setState({ configActivated: !this.state.configActivated });
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    btnRef = React.createRef();
    iconRef = React.createRef();

    clickOutside = e => {
        if (this.btnRef && !this.btnRef.current.contains(e.target)) {
            this.turnOff();
        }
    };

    turnOff = () => {
        this.setState({ configActivated: false });
    }

    render() {
        const { configActivated } = this.state;
        return (
            <ConfigBtn
                ref={this.btnRef}
                configActivated={configActivated}
                onClick={this.clickInit}
            >
                <ConfigIcon
                    ref={this.iconRef}
                >
                    <i class="fas fa-cog"></i>
                </ConfigIcon>
                {configActivated
                    ? <ConfigPopUp
                        popUpRef={this.popUpRef}
                    />
                    : null}
            </ConfigBtn>
        )
    }
}