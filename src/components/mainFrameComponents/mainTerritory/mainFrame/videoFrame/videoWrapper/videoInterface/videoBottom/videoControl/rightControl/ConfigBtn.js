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

const InfoPopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    right: 75px;
    display: ${props => props.hovering ? 'flex' : 'none'};
`;

const InfoPopUp = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: white;
`;

export default class extends React.Component {
    state = {
        configActivated: false,
        hovering: false,
    };

    btnRef = React.createRef();
    iconRef = React.createRef();

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    };

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    };

    clickInit = e => {
        e.stopPropagation();
        if (this.iconRef && this.iconRef.current.contains(e.target)) {
            this.setState({ configActivated: !this.state.configActivated });
        }
    };

    clickOutside = e => {
        if (this.btnRef && !this.btnRef.current.contains(e.target)) {
            this.turnOff();
        }
    };

    isHovering = e => {
        this.setState({ hovering: true })
    };
    notHovering = e => {
        this.setState({ hovering: false })
    };

    turnOff = () => {
        this.setState({ configActivated: false });
    }

    render() {
        const {
            autoPlay,
            lang,
            toggleAutoPlay,
            getPlaySpeed,
        } = this.props;
        const {
            configActivated,
            hovering
        } = this.state;
        return (
            <ConfigBtn
                ref={this.btnRef}
                configActivated={configActivated}
                onClick={this.clickInit}
                onMouseOver={this.isHovering}
                onMouseOut={this.notHovering}
            >
                <ConfigIcon
                    ref={this.iconRef}
                    configActivated={configActivated}
                >
                    <i class="fas fa-cog"></i>
                </ConfigIcon>
                {configActivated
                    ?
                    <ConfigPopUp
                        autoPlay={autoPlay}
                        lang={lang}
                        getPlaySpeed={getPlaySpeed}
                        toggleAutoPlay={toggleAutoPlay}
                        popUpRef={this.popUpRef}
                    />
                    : null}
                {configActivated
                    ? null
                    :
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            {lang.videoFrame.rightControl.config.config}
                        </InfoPopUp>
                    </InfoPopUpBox>
                }
            </ConfigBtn>
        )
    }
}