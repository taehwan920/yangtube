import React from 'react';
import styled from 'styled-components';
import ReportPopUp from './ReportPopUp';

const ReportWrapper = styled.div`
    width: 40px;
    height: 100%;
    position: relative;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
    opacity: ${props => props.hovering || props.btnClicked ? '1' : '0'};
`;

const ReportIconBox = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    position: relative;
`;

const ClickEffect = styled.div`
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 10px;
    left: 0px;
    border-radius: 50%;

    &:active {
        background: rgba(0, 0, 0, 0.2);
    }
`;

export default class extends React.Component {
    state = {
        btnClicked: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    wrapperRef = React.createRef();

    clickOutside = (e) => {
        if (this.state.btnClicked) {
            if (this.wrapperRef.current === null) { return; }
            if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
                this.setState({ btnClicked: false })
            }
        }

    }

    render() {
        const { hovering } = this.props;
        const { btnClicked } = this.state;
        return (
            <ReportWrapper
                ref={this.wrapperRef}
                hovering={hovering}
                btnClicked={btnClicked}>
                <ReportIconBox
                    onClick={() => this.setState({ btnClicked: !this.state.btnClicked })}
                >
                    <i class="fas fa-ellipsis-v"></i>
                    <ClickEffect></ClickEffect>
                </ReportIconBox>
                {btnClicked
                    ? <ReportPopUp></ReportPopUp>
                    : null}
            </ReportWrapper>
        )
    }
}