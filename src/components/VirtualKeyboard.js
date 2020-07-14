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
    background: green;
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

const KbdHeader = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default class extends React.Component {
    state = {
        langIsKR: true,
        shift: false,
        capsLock: false
    }
    render() {
        const { langIsKR, shift, capsLock } = this.state.langIsKR;
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
                    <KbdHeader>
                        <div className="lang-mode">{langIsKR ? '한국어' : 'ENG'}</div>
                        <div className=""><i class="fas fa-times"></i></div>
                    </KbdHeader>
                    <tr className="firstRow">
                        {keySet[0].map(key => {
                            if (key === 'backspace') {
                                return <button><i class="fas fa-backspace"></i></button>
                            } else {
                                return <button>{key}</button>
                            }
                        })}
                    </tr>
                    <tr className="secondRow">
                        {keySet[1].map(key => {
                            if (key === 'empty') {
                                return <button> </button>
                            } else {
                                return <button>{key}</button>
                            }
                        })}
                    </tr>

                    <tr>
                        {keySet[2].map(key => {
                            if (key === 'capslock') {
                                return <button><i class="fab fa-adn"></i></button>
                            } else if (key === 'empty2') {
                                return <button> </button>
                            } else {
                                return <button>{key}</button>
                            }
                        })}
                    </tr>
                    <tr>
                        {keySet[3].map(key => {
                            if (key === 'shift') {
                                return <button><i class="far fa-caret-square-up"></i></button>
                            } else {
                                return <button>{key}</button>
                            }
                        })}
                    </tr>
                    <tr>
                        {keySet[4].map(key => { return <button>{key}</button> })}
                    </tr>
                </KbdRowsWrapper>
            </KbdWrapper>
        )
    }
}