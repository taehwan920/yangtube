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
    cursor: pointer;
`;

const ReplySubmitBtn = styled(ReplyBtns)`
    background-color: ${props => props.replying ? '#065FD4' : '#CCCCCC'};
    cursor: ${props => props.replying ? 'pointer' : 'default'};
    color: white;
    margin-left: 8px;
`;

export default class extends React.Component {
    render() {
        return (
            <ReplyBtnsWrapper>
                <ReplyBtnsBox>
                    <ReplyBtns>취소</ReplyBtns>
                    <ReplySubmitBtn>답글</ReplySubmitBtn>
                </ReplyBtnsBox>
            </ReplyBtnsWrapper>
        )
    }
}