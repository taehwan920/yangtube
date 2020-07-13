import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span><i class="far fa-play-circle"></i></span>
                    <span>동영상 업로드</span>
                </div>
                <div>
                    <span><i class="fas fa-broadcast-tower"></i></span>
                    <span>실시간 스트리밍 시작</span>
                </div>
            </div>
        )
    }
}