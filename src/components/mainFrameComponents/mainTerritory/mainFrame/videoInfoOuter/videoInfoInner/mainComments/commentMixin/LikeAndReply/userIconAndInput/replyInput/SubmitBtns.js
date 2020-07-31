import React from 'react';
import styled from 'styled-components';

const ReplyBtnsWrapper = styled.div`
    width: 100%;
    height: 39px;
    display: flex;
    justify-content: flex-end;
`;

const ReplyBtnsBox = styled.div`
    width: max-content;
    height: 39px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

const ReplyBtns = styled.div`
    min-width: 72px;
    width: max-content;
    height: 39px;
    padding: 10px 16px;
    text-align: center;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
`;

const ReplySubmitBtn = styled(ReplyBtns)`
    background-color: ${props => props.inputting ? '#065FD4' : '#CCCCCC'};
    cursor: ${props => props.inputting ? 'pointer' : 'default'};
    color: white;
    margin-left: 8px;
`;

const ClickEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.1s linear;
    
    &:active{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export default class extends React.Component {
    render() {
        const { inputting, toggleReply, cancelReply, submitReply } = this.props;
        return (
            <ReplyBtnsWrapper>
                <ReplyBtnsBox>
                    <ReplyBtns
                        draggable="true"
                        onClick={() => {
                            cancelReply();
                            toggleReply();
                        }}>
                        취소
                        <ClickEffect></ClickEffect>
                    </ReplyBtns>
                    <ReplySubmitBtn
                        draggable="true"
                        inputting={inputting}
                        onClick={() => {
                            if (!inputting) { return; }
                            submitReply();
                            toggleReply();
                        }}>
                        답글
                        <ClickEffect></ClickEffect>
                    </ReplySubmitBtn>
                </ReplyBtnsBox>
            </ReplyBtnsWrapper>
        )
    }
}