import React from 'react';
import styled from 'styled-components';

const UserInfoPopUpWrapper = styled.div`
    display: none;
`;


export default class extends React.Component {
    render() {
        return (
            <UserInfoPopUpWrapper>
                <header>
                    <div>G</div>
                    <span>Guest</span>
                </header>
                <section>
                    <article>
                        <span><i class="fas fa-moon"></i></span>
                        <span>어두운 테마: 사용 안함</span>
                        <span><i class="fas fa-chevron-right"></i></span>
                    </article>
                    <article>
                        <span><i class="far fa-file-word"></i></span>
                        <span>언어: 한국어</span>
                        <span><i class="fas fa-chevron-right"></i></span>
                    </article>
                    <article>
                        <span><i class="fas fa-globe"></i></span>
                        <span>위치: 한국</span>
                        <span><i class="fas fa-chevron-right"></i></span>
                    </article>
                    <article>
                        <span><i class="fas fa-cog"></i></span>
                        <span></span>
                    </article>
                    <article>
                        <span><i class="fas fa-user-shield"></i></span>
                        <span></span>
                    </article>
                    <article>
                        <span><i class="fas fa-question-circle"></i></span>
                        <span></span>
                    </article>
                    <article>
                        <span><i class="fas fa-exclamation"></i></span>
                        <span></span>
                    </article>
                    <article>
                        <span><i class="fas fa-keyboard"></i></span>
                        <span></span>
                    </article>
                </section>
                <section>
                    <article>
                        <span>제한 모드: 사용 안함</span>
                        <span><i class="fas fa-chevron-right"></i></span>
                    </article>
                </section>
            </UserInfoPopUpWrapper>
        )
    }

}