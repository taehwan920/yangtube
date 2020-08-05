import React from 'react';

export const addComma = num => {
    const numToStr = String(num);
    if (numToStr.length <= 3) return num;
    const reversed = numToStr.split('').reverse();
    const newArr = [];
    let cnt = 0;
    for (let i = 0; i < numToStr.length; i++) {
        if (cnt === 2 && i !== numToStr.length - 1) {
            cnt = 0;
            newArr.push(reversed[i]);
            newArr.push(',');
        } else {
            newArr.push(reversed[i]);
            cnt++
        }
    };
    const result = newArr.reverse();
    return result.join('');
};

export const ChangeTitle = (str) => {
    document.title = `${str} | YangTube`;
};

export function debounce(func, wait = 15, immediate = false) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const getTimestamp = (num, lang) => {
    const now = new Date().getTime();
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 4;
    const year = month * 12;
    const timeGap = now - num;

    if (lang === 'KR') {
        if (Math.round(timeGap / year) > 0) {
            return [Math.round(timeGap / year), '년 전'];
        } else if (Math.round(timeGap / month) > 0) {
            return [Math.round(timeGap / month), '개월 전'];
        } else if (Math.round(timeGap / week) > 0) {
            return [Math.round(timeGap / week), '주 전'];
        } else if (Math.round(timeGap / day) > 0) {
            return [Math.round(timeGap / day), '일 전'];
        } else if (Math.round(timeGap / hour) > 0) {
            return [Math.round(timeGap / hour), '시간 전'];
        } else if (Math.round(timeGap / min) > 0) {
            return [Math.round(timeGap / min), '분 전'];
        } else {
            return [Math.round(timeGap / sec), '초 전']
        }
    } else if (lang === 'JP') {
        if (Math.round(timeGap / year) > 0) {
            return [Math.round(timeGap / year), '年前'];
        } else if (Math.round(timeGap / month) > 0) {
            return [Math.round(timeGap / month), 'か月前'];
        } else if (Math.round(timeGap / week) > 0) {
            return [Math.round(timeGap / week), '週前'];
        } else if (Math.round(timeGap / day) > 0) {
            return [Math.round(timeGap / day), '日前'];
        } else if (Math.round(timeGap / hour) > 0) {
            return [Math.round(timeGap / hour), '時間前'];
        } else if (Math.round(timeGap / min) > 0) {
            return [Math.round(timeGap / min), '分前'];
        } else {
            return [Math.round(timeGap / sec), '秒前']
        }
    } else if (lang === 'EN') {
        if (Math.round(timeGap / year) > 0) {
            return [Math.round(timeGap / year), Math.round(timeGap / year) > 1 ? 'years ago' : 'year ago'];
        } else if (Math.round(timeGap / month) > 0) {
            return [Math.round(timeGap / month), Math.round(timeGap / month) > 1 ? 'months ago' : 'month ago'];
        } else if (Math.round(timeGap / week) > 0) {
            return [Math.round(timeGap / week), Math.round(timeGap / week) > 1 ? 'weeks ago' : 'week ago'];
        } else if (Math.round(timeGap / day) > 0) {
            return [Math.round(timeGap / day), Math.round(timeGap / day) > 1 ? 'days ago' : 'day ago'];
        } else if (Math.round(timeGap / hour) > 0) {
            return [Math.round(timeGap / hour), Math.round(timeGap / hour) > 1 ? 'hours ago' : 'hour ago'];
        } else if (Math.round(timeGap / min) > 0) {
            return [Math.round(timeGap / min), Math.round(timeGap / min) > 1 ? 'minutes ago' : 'minute ago'];
        } else {
            return [Math.round(timeGap / sec), Math.round(timeGap / min) > 1 ? 'seconds ago' : 'second ago'];
        }
    }

};

const parseDecimal = (num, divider) => {
    let parsed;
    num / divider / 10 > 100
        ? parsed = parseInt(num / divider) / 10
        : parsed = parseInt(num / divider);
    return parsed;
};

export const parseNum = (num, lang) => {
    if (lang === 'KR') {
        if (num / 10 ** 8 > 1) {
            return [parseDecimal(num, 10 ** 8), '억'];
        } else if (num / 10 ** 4 > 1) {
            return [parseDecimal(num, 10 ** 4), '만'];
        } else if (num / 10 ** 3 > 1) {
            return [parseDecimal(num, 10 ** 3), '천'];
        } else {
            return [num, ''];
        }
    } else if (lang === 'JP') {
        if (num / 10 ** 8 > 1) {
            return [parseDecimal(num, 10 ** 8), '億'];
        } else if (num / 10 ** 4 > 1) {
            return [parseDecimal(num, 10 ** 4), '万'];
        } else if (num / 10 ** 3 > 1) {
            return [parseDecimal(num, 10 ** 3), '千'];
        } else {
            return [num, ''];
        }
    } else if (lang === 'EN') {
        if (num / 10 ** 9 > 1) {
            return [parseDecimal(num, 10 ** 9), 'B'];
        } else if (num / 10 ** 6 > 1) {
            return [parseDecimal(num, 10 ** 6), 'M'];
        } else if (num / 10 ** 3 > 1) {
            return [parseDecimal(num, 10 ** 3), 'K'];
        } else {
            return [num, ''];
        }
    }
};

export const parseTime = num => {
    const min = num / 60 >= 10 ? parseInt(num / 60) : `0${parseInt(num / 60)}`;
    const sec = num % 60 >= 10 ? num % 60 : `0${num % 60}`;
    return `${min}:${sec}`;
};

export const shuffle = arr => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
};

export const toggleGuide = () => {
    const guide = document.querySelector('.guide-wrapper');
    guide.classList.toggle('move');
};

export class NotCreated extends React.Component {
    render() {
        return (
            <div>
                <span>해당 기능은 구현하지 않았습니다.</span>
                <span>사유: 서버 부재</span>
            </div>
        )
    }
};