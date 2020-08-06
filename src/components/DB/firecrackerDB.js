import VideoSummary from './VideoSummary';

export default {
    title: VideoSummary[3].title,
    nextTitle: VideoSummary[4].title,
    pageUrl: VideoSummary[3].pageUrl,
    nextUrl: VideoSummary[4].pageUrl,
    videoUrl: VideoSummary[3].videoUrl,
    thumbnailUrl: VideoSummary[3].thumbnailUrl,
    nextThumb: VideoSummary[3].nextThumb,
    uploader: VideoSummary[3].uploader,
    uploaderIcon: './images/sheep_profile.png',
    subscribers: 1648292,
    views: VideoSummary[3].views,
    timestamp: VideoSummary[3].timestamp,
    likes: 11,
    dislikes: 240,
    nextVideo: VideoSummary[3].videoUrl,
    description:
        `사람이 굉장히 많아서 핸드폰이 먹통이 되는 일까지 생겼던 불꽃 축제였습니다.
가서 노점 음식도 사먹어보고... 사람도 보고.. 사람도 보고..
정말 끔찍하게 사람이 많았지만 불꽃놀이 볼 때만큼은 그 스트레스가 확 날아가는 느낌이었어요
결론은 가길 잘했다~ 이말이야`,
    comments: [
        {
            name: '聖徳太子',
            iconColor: '#689F39',
            timestamp: 1596695008152,
            content:
                `うるさいなーこの動画
それに 00:18 のこの人今キムチーって言ってんのか？`,
            likes: 0,
            replies: [
                {
                    name: '빅 번역맨',
                    iconColor: '#0288D1',
                    timestamp: 1596695959200,
                    content: `번역 : 이 영상 왜이렇게 시끄러워
그리고 00:18 에서 나온 애 김치~ 라고 말한 거야?`,
                    likes: 68
                },
                {
                    name: 'つっこみたいやき',
                    iconColor: '#AA47BC',
                    timestamp: 1596696106263,
                    content: `お前の耳が良すぎるだけや！ 
花火大会は騒がしくて当たり前やないか！`,
                    likes: 1
                }
            ]
        }
    ]
};