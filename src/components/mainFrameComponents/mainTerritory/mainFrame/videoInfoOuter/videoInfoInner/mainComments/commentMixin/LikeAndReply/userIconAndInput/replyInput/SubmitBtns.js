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
    border-radius: 3px;
    color: ${props => props.themeColor.grayFont};
    text-align: center;
    position: relative;
    cursor: pointer;
`;

const ReplySubmitBtn = styled(ReplyBtns)`
    background-color: ${props =>
        props.inputting
            ? props.themeColor.main.commentInputtingBtn
            : props.themeColor.main.commentInputBtn
    };
    cursor: ${props => props.inputting ? 'pointer' : 'default'};
    color: ${props => props.themeColor.main.commentInputBtnTxt};
    margin-left: 8px;
`;

const ClickEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: transparent;
    transition: background-color 0.1s linear;
    
    &:active{
        background-color: ${props => props.themeColor.effectBG};
    }
`;

export default class extends React.Component {
    render() {
        const {
            inputting,
            toggleReply,
            cancelReply,
            submitReply,
            themeColor,
        } = this.props;
        return (
            <ReplyBtnsWrapper>
                <ReplyBtnsBox>
                    <ReplyBtns
                        draggable="true"
                        onClick={() => {
                            cancelReply();
                            toggleReply();
                        }}
                        themeColor={themeColor}
                    >
                        취소
                        <ClickEffect
                            themeColor={themeColor}
                        />
                    </ReplyBtns>
                    <ReplySubmitBtn
                        draggable="true"
                        inputting={inputting}
                        onClick={() => {
                            if (!inputting) { return; }
                            submitReply();
                            toggleReply();
                        }}
                        themeColor={themeColor}
                    >
                        답글
                        <ClickEffect
                            themeColor={themeColor}
                        />
                    </ReplySubmitBtn>
                </ReplyBtnsBox>
            </ReplyBtnsWrapper>
        )
    }
}