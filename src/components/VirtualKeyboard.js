import React from 'react';
import styled from 'styled-components';

const keyRows = {
    'KR_small': [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['empty', 'ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '[', ']', '\\'],
        ['capslock', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', ';', '\'', 'empty2'],
        ['shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', ',', '.', '/', 'shift'],
        ['Ctrl + Alt', 'spacebar', 'Ctrl + Alt']
    ],
    'KR_Cap': [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
        ['empty', 'ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '{', '}', '|'],
        ['capslock', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', ':', '"', 'empty2'],
        ['shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '<', '>', '?', 'shift'],
        ['Ctrl + Alt', 'spacebar', 'Ctrl + Alt']
    ],
    'EN_small': [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['empty', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'empty2'],
        ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
        ['Ctrl + Alt', 'spacebar', 'Ctrl + Alt']
    ],
    'EN_Cap': [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
        ['empty', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
        ['capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'empty2'],
        ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift'],
        ['Ctrl + Alt', 'spacebar', 'Ctrl + Alt']
    ]
};

const KbdWrapper = styled.div`
    background-color: white;
    box-shadow: 6px 8px rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.3);
    width: 517px;
    height: 211px;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 70px;
`;

const KbdRowsWrapper = styled.table`
    width:497px;
    height: 191px;
    display: grid;
    grid-template-column: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const KbdRow = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const KbdHeaderBtn = styled.div`
    width: 50px;
    margin: 5px;
    font-size: 14px;
    line-height: 1;
`;

const KbdXBtn = styled(KbdHeaderBtn)`
    text-align: right;
    color: rgba(0, 0, 0, 0.25);
    font-size: 18px;
    line-height: 0.3;

    &:hover {
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
`;

const Key = styled.button`
    width: 29px;
    height: 29px;
    margin: 1.5px;
    background-color: #F5F5F5;
    font-size: 14px;
    text-align: center;
    line-height: 29px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0,0,0,0.2);
    outline: none;
`;

const BackSpace = styled(Key)`
    width: 62px;
    font-size: 16px;
    line-height: 30px;
`;

const Empty = styled(Key)`
    width: 50px;
    background: none;
    border: none;
`;

const Empty2 = styled(Empty)`
    width: 75px;
`;

const BackSlash = styled(Key)`
    width: 45.5px;
`;

const CapsLockKey = styled(Key)`
    width: 58px;
    font-size: 18px;
    line-height: 30px;
`;

const ShiftKey = styled(Key)`
    width: 80px;
    font-size: 18px;
    line-height: 30px;
`;

const CtrlAltKey = styled(Key)`
    width: 95px;
`;

const SpaceBar = styled(Key)`
    width: 293px;
`;


export default class extends React.Component {
    state = {
        langIsKR: true,
        shift: false,
        capsLock: false
    }
    render() {
        const { langIsKR, shift, capsLock } = this.state;
        let keySet;
        if (langIsKR) {
            shift
                ? keySet = keyRows.KR_Cap
                : keySet = keyRows.KR_small
        } else {
            shift
                ? keySet = keyRows.EN_Cap
                : keySet = keyRows.EN_small
        }
        return (
            <KbdWrapper>
                <KbdRowsWrapper>
                    <KbdRow>
                        <KbdHeaderBtn >{langIsKR ? '한국어' : 'ENG'}</KbdHeaderBtn>
                        <KbdXBtn onClick={this.props.onClick}><i class="fas fa-times"></i></KbdXBtn>
                    </KbdRow>
                    <KbdRow>
                        {keySet[0].map(key => {
                            if (key === 'backspace') {
                                return <BackSpace><i class="fas fa-backspace"></i></BackSpace>
                            } else {
                                return <Key>{key}</Key>
                            }
                        })}
                    </KbdRow>
                    <KbdRow className="secondRow">
                        {keySet[1].map(key => {
                            if (key === 'empty') {
                                return <Empty> </Empty>
                            } else if (key === '\\' || key === '|') {
                                return <BackSlash>{key}</BackSlash>
                            } else {
                                return <Key>{key}</Key>
                            }
                        })}
                    </KbdRow>
                    <KbdRow>
                        {keySet[2].map(key => {
                            if (key === 'capslock') {
                                return <CapsLockKey><i class="fab fa-adn"></i></CapsLockKey>
                            } else if (key === 'empty2') {
                                return <Empty2> </Empty2>
                            } else {
                                return <Key>{key}</Key>
                            }
                        })}
                    </KbdRow>
                    <KbdRow>
                        {keySet[3].map(key => {
                            if (key === 'shift') {
                                return <ShiftKey><i class="far fa-caret-square-up"></i></ShiftKey>
                            } else {
                                return <Key>{key}</Key>
                            }
                        })}
                    </KbdRow>
                    <KbdRow>
                        {keySet[4].map(key => {
                            if (key === 'spacebar') {
                                return <SpaceBar>{key}</SpaceBar>
                            } else {
                                return <CtrlAltKey>{key}</CtrlAltKey>
                            }
                        })}
                    </KbdRow>
                </KbdRowsWrapper>
            </KbdWrapper>
        )
    }
}