import 'react';

export const player = {
    name: 'GUEST',
    iconColor: '#AA47BC'
}

export const commentItems = [{
    main: {
        iconColor: '#EC407A',
        userName: 'Vienna Sausage',
        timestamp: 1595398976859,
        content:
            `동해물과 백두산이
마르고 닳도록
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려강산
대한 사람 대한으로 
길이 보전하세`,
        like: 361489324
    },
    reply: [
        {
            iconColor: '#78909C',
            userName: '이영종',
            timestamp: 1595399884809,
            content:
                `이분은
대체
왜 갑자기
애국가를
부르는거죳?!`,
            like: 1578
        },
        {
            iconColor: '#BF360C',
            userName: 'ネギトロ',
            timestamp: 1595400065508,
            content:
                `いきなり国歌歌い出して草www`,
            like: 98
        }
    ]
},
{
    main: {
        iconColor: '#EF6C00',
        userName: '유진우',
        timestamp: 1595425950017,
        content:
            `남산 위의 저 소나무
철갑을 두른 듯
바람서리 불변함은 우리 기상일세
무궁화 삼천리 
화려 강산
대한 사람 대한으로 
길이 보전하세`,
        like: 4839284
    },
    reply: [
        {
            iconColor: '#78909C',
            userName: '이영종',
            timestamp: 1595433883374,
            content:
                `이분은
대체
왜
2절까지
하시는거죳?!`,
            like: 1578
        },
        {
            iconColor: '#BF360C',
            userName: 'ネギトロ',
            timestamp: 1595433977045,
            content:
                `もうつまんねぇーからやめろw`,
            like: 98
        },
        {
            iconColor: '#00579C',
            userName: 'John Smith',
            timestamp: 1595433739420,
            content:
                `You guys are so funny! LMAO`,
            like: 0
        }
    ]
}];

export const commentFixed = {
    showMore: '자세히 보기',
    showLess: '간략히',
    replyBtnTxt: '답글'
};

export const replyFixed = {
    name: 'GUEST',
    placeholder: '공개 답글 추가...',
    cancelBtn: '취소',
    submitBtn: '답글'
};

export const reportFixed = {
    text: '신고'
};

export const timestampTxt = {
    kr: {
        sec: '초 전',
        min: '분 전',
        hour: '시간 전',
        day: '일 전',
        week: '주 전',
        month: '개월 전',
        year: '년 전'
    }
};

export const shortNum = {
    kr: {
        hundredMillion: [10 ** 8, '억'],
        tenThousand: [10 ** 4, '만'],
        thousand: [10 ** 3, '천']
    }
}