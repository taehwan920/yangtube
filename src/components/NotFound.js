import React from 'react';
import { ChangeTitle, MyTubeLogo } from './Mixin';

export default class extends React.Component {
    render() {
        ChangeTitle('404 Not Found');
        return (
            <main className="not-found">
                <img alt="Not Found!" src="../images/not_found.png"></img>
                이 페이지를 사용할 수 없습니다.
                아래 버튼을 이용해 메인 페이지로 돌아가세요.
                <MyTubeLogo></MyTubeLogo>
            </main>
        )
    }
}