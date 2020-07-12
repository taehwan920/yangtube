import React from 'react';

const langisKR = true;
const shift = false;
const capsLock = false;
const keys = {
    'KR': [],
    'EN': [],
    'baseSpecialChr': [],
    'shiftedSpecialChr': []
};

export default class extends React.Component {
    state = {
        mode: [langisKR, shift, capsLock]
    }

    render() {
        return (
            <div className="home__virtualKbd">
                <table>
                    <tr className="virtual-kbd-row">
                        <div className="lang-mode">한국어</div>
                        <div className=""><i class="fas fa-times"></i></div>
                    </tr>
                    <tr className="virtual-kbd-row">
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr">
                            <i class="fas fa-backspace"></i>
                        </button>
                    </tr>
                    <tr className="virtual-kbd-row">
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                    </tr>
                    <tr className="virtual-kbd-row">
                        <button className="virtual-key"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                    </tr>
                    <tr className="virtual-kbd-row">
                        <button className="virtual-key shift-key">
                            <i class="far fa-caret-square-up"></i>
                        </button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key convert-EN/KR"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-special-chr"></button>
                        <button className="virtual-key shift-key">
                            <i class="far fa-caret-square-up"></i>
                        </button>
                    </tr>
                    <tr className="virtual-kbd-row">
                        <button className="virtual-key">Ctrl + Alt</button>
                        <button className="virtual-key spacebar"></button>
                        <button className="virtual-key">Ctrl + Alt</button>
                    </tr>
                </table>
            </div>
        )
    }
}