import VideoSummary from './VideoSummary';

const dog = {
    title: VideoSummary[1].title,
    nextTitle: VideoSummary[2].title,
    pageUrl: VideoSummary[1].pageUrl,
    nextUrl: VideoSummary[2].pageUrl,
    videoUrl: VideoSummary[1].videoUrl,
    thumbnailUrl: VideoSummary[1].thumbnailUrl,
    nextThumb: VideoSummary[1].nextThumb,
    uploader: VideoSummary[1].uploader,
    uploaderIcon: './images/sheep_profile.png',
    subscribers: 1648292,
    views: VideoSummary[1].views,
    timestamp: VideoSummary[1].timestamp,
    likes: 103,
    dislikes: 24,
    nextVideo: VideoSummary[1].videoUrl,
    description:
        `ㅋㅋ아 진짜 너무 귀엽다`,
    comments: [
        {
            name: '송호연',
            iconColor: '#BF360C',
            timestamp: 1596077444793,
            content:
                `이렇게 귀엽고 이렇게 조회수가 많은데 댓글이 하나도 없다고?
말이 되나 이게`,
            likes: 12,
            replies: []
        }
    ]
};

export default dog;

