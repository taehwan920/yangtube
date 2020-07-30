import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChangeTitle } from './Mixin';
import LogoOnlyImg from './mixin/LogoOnlyImg';

const NotFoundFrame = styled.main`
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NotFoundImg = styled.img`
    margin-bottom: 40px;
    margin-left: 20px;
`;

const NotFoundSpan = styled.span`
    margin-bottom: 30px;
`;

const NotFoundLogo = styled(Link)`
    margin-right: 30px; 
`;

export default class extends React.Component {
    render() {
        ChangeTitle('404 Not Found');
        return (
            <NotFoundFrame>
                <NotFoundImg alt="Not Found!" src="../images/not_found.png"></NotFoundImg>
                <NotFoundSpan>이 페이지를 사용할 수 없습니다.</NotFoundSpan>
                <NotFoundSpan>아래 버튼을 이용해 메인 페이지로 돌아가세요.</NotFoundSpan>
                <NotFoundLogo to="/home">
                    <LogoOnlyImg></LogoOnlyImg>
                </NotFoundLogo>
            </NotFoundFrame>
        )
    }
}