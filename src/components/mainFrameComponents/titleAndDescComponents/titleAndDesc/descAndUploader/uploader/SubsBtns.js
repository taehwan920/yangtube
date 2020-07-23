import React from 'react';
import styled from 'styled-components';
import { descItems } from '../../DescAndUploader';
import SubscribeNoteBtn from './subBtns/SubscribeNoteBtn';

const SubsBtnWrapper = styled.div`
    width: max-content;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubsBtn = styled.div`
    background-color: ${props => props.subscribed ? '#ECECEC' : '#CC0000'};
    width: auto;
    height: 39px;
    margin: 0px 4px;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SubsBtnTxt = styled.span`
    width: ${props => props.subscribed ? '3.2em' : '2.8em'};
    color: ${props => props.subscribed ? 'black' : 'white'};
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
        const { subscribed } = this.state;
        return (
            <SubsBtnWrapper>
                <SubsBtn
                    subscribed={subscribed}
                    onClick={this.clickSubs}>
                    <SubsBtnTxt subscribed={subscribed}>
                        {subscribed
                            ? descItems.subBtn[1]
                            : descItems.subBtn[0]}
                    </SubsBtnTxt>
                </SubsBtn>
                {subscribed
                    ? <SubscribeNoteBtn></SubscribeNoteBtn>
                    : null}
            </SubsBtnWrapper>
        )
    }
}