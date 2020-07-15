import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChangeTitle, LogoOnlyImg } from './Mixin';

const NotFoundFrame = styled.main`
    background-color: #F1F1F1;
`;

export default class extends React.Component {
    render() {
        ChangeTitle('404 Not Found');
        return (
            <main className="not-found">
                <img alt="Not Found!" src="../images/not_found.png"></img>
                이 페이지를 사용할 수 없습니다.
                아래 버튼을 이용해 메인 페이지로 돌아가세요.
                <Link to="/">
                    <LogoOnlyImg></LogoOnlyImg>
                </Link>
            </main>
        )
    }
}