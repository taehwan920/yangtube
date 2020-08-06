import VideoSummary from './VideoSummary';

const dance = {
    title: VideoSummary[4].title,
    nextTitle: VideoSummary[5].title,
    pageUrl: VideoSummary[4].pageUrl,
    nextUrl: VideoSummary[5].pageUrl,
    videoUrl: VideoSummary[4].videoUrl,
    thumbnailUrl: VideoSummary[4].thumbnailUrl,
    nextThumb: VideoSummary[4].nextThumb,
    uploader: VideoSummary[4].uploader,
    uploaderIcon: './images/sheep_profile.png',
    subscribers: 1648292,
    views: VideoSummary[4].views,
    timestamp: VideoSummary[4].timestamp,
    likes: 300,
    dislikes: 300,
    nextVideo: VideoSummary[4].videoUrl,
    description:
        `USJ 해리포터 어트랙션 쪽에서 본 공연입니다
호그와트는 안 나오고 보바통(여학교)이랑 덤스트랭(남학교)만 나왔습니다
두 팀 다 각자 학교의 특성을 잘 살려서 보는 재미가 있었어요
이 영상은 보바통 팀 댄스 영상이에요
덤스트랭 영상은 나중에 업로드 할게요~`,
    comments: [
        {
            name: '무플방지위원회',
            iconColor: '#BF360C',
            timestamp: 1596031632570,
            content:
                `해당 영상에 댓글이 하나도 없는 이상현상을 감지하여
무플방지위원회에서 댓글 지원 나왔습니다.
감사합니다. ^^7`,
            likes: 52,
            replies: [
                {
                    name: '무답방지위원회',
                    iconColor: '#0288D1',
                    timestamp: 1596694432442,
                    content: `해당 댓글에 답글이 하나도 없는 이상현상을 감지하여
무답방지위원회에서 댓글 지원 나왔습니다 
감사합니다. ^^7`,
                    likes: 0
                }
            ]
        }
    ]
};

export default dance;

