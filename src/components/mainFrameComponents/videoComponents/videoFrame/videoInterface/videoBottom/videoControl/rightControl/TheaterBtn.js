import React from 'react';
import styled from 'styled-components';

const TheaterBtn = styled.span`
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
`;

const TheaterRec = styled.div`
    width: ${props => props.theaterMode ? '16px' : '20px'};
    height: ${props => props.theaterMode ? '10px' : '14px'};
    border: 2px solid white;
`;

const InfoPopUpBox = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: max-content;
    height: max-content;
    padding: 2px 4px;
    border-radius: 2px;
    position: absolute;
    bottom: 49px;
    right: 0;
    display: ${props => props.hovering ? 'flex' : 'none'};
`;

const InfoPopUp = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: white;
`;

export default class extends React.Component {
    state = {
        hovering: false
    };

    isHovering = e => {
        this.setState({ hovering: true })
    };
    notHovering = e => {
        this.setState({ hovering: false })
    };

    render() {
        const {
            theaterMode,
            toggleTheater,
        } = this.props;
        const {
            hovering
        } = this.state;
        return (
            <TheaterBtn
                onClick={toggleTheater}
                onMouseOver={this.isHovering}
                onMouseOut={this.notHovering}
            >
                <TheaterRec
                    theaterMode={theaterMode}
                />
                {theaterMode
                    ?
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            기본 보기(t)
                        </InfoPopUp>
                    </InfoPopUpBox>
                    :
                    <InfoPopUpBox
                        hovering={hovering}
                    >
                        <InfoPopUp>
                            영화관 모드(t)
                        </InfoPopUp>
                    </InfoPopUpBox>
                }
            </TheaterBtn>
        )
    }
}