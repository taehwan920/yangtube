import VideoSummary from './VideoSummary';

const dolphin = {
    title: VideoSummary[2].title,
    nextTitle: VideoSummary[3].title,
    pageUrl: VideoSummary[2].pageUrl,
    nextUrl: VideoSummary[3].pageUrl,
    videoUrl: VideoSummary[2].videoUrl,
    thumbnailUrl: VideoSummary[2].thumbnailUrl,
    nextThumb: VideoSummary[2].nextThumb,
    uploader: VideoSummary[2].uploader,
    uploaderIcon: './images/sheep_profile.png',
    subscribers: 1648292,
    views: VideoSummary[2].views,
    timestamp: VideoSummary[2].timestamp,
    likes: 39843,
    dislikes: 35000,
    nextVideo: VideoSummary[2].videoUrl,
    description:
        `정말 재밌었던 교토 수족관`,
    comments: [
        {
            name: '川渕　美鈴',
            iconColor: '#7E57C2',
            timestamp: 1596077444793,
            content:
                `楽しかったー`,
            likes: 828,
            replies: []
        }
    ]
};

export default dolphin;

