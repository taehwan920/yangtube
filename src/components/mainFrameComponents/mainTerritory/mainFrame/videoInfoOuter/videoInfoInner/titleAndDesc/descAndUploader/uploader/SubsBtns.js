import React from 'react';
import styled from 'styled-components';
import SubscribeNoteBtn from './subBtns/SubscribeNoteBtn';

const SubsBtnWrapper = styled.div`
    width: max-content;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubsBtn = styled.div`
    background-color: ${props => {
        if (props.subscribed) {
            return props.themeColor.main.subscribedBtnBG;
        } else {
            return '#CC0000';
        }
    }};
    width: max-content;
    height: 39px;
    margin: 0px 4px;
    padding: 10px ${props => props.subscribed ? '16px' : '20px'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SubsBtnTxt = styled.span`
    color: ${props => {
        if (props.subscribed) {
            return props.themeColor.main.subscribedBtnFont;
        } else {
            return 'white';
        }
    }};
    text-align: center;
    font-size: 14px;
`;

export default class extends React.Component {
    state = {
        subscribed: false
    }

    subsRef = React.createRef();

    clickSubs = () => {
        this.setState({ subscribed: !this.state.subscribed });
    };

    render() {
        const {
            themeColor
        } = this.props;
        const {
            subscribed
        } = this.state;
        return (
            <SubsBtnWrapper>
                <SubsBtn
                    onClick={this.clickSubs}
                    subscribed={subscribed}
                    themeColor={themeColor}
                >
                    <SubsBtnTxt
                        subscribed={subscribed}
                        themeColor={themeColor}
                    >
                        {subscribed
                            ? '구독중'
                            : '구독'}
                    </SubsBtnTxt>
                </SubsBtn>
                {subscribed
                    ? <SubscribeNoteBtn
                        themeColor={themeColor}
                    />
                    : null}
            </SubsBtnWrapper>
        )
    }
}